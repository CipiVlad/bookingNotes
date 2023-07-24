import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react';

const VorlagenListe = (props) => {
    let [clipboardState, setClipboardState] = useState('')
    //event handler
    function handleCopy() {
        clipboardState = props.offerings.filter((e) => e.id == props.id)
        setClipboardState(clipboardState[0].text)
        console.log(clipboardState[0].text);
    }

    function handleDelete() {
        console.log('deleted');
    }

    return (
        <div className='text_right'>
            <div className='headline_and_icon'>
                <h2>Bearbeiten</h2>
            </div>
            <div className='icons_container'>
                <ul >
                    <li>{props.title}</li>
                    <Link to={`/vorlagen/angebotsvorlageneditor/${props.id}`} state={props.offerings} >
                        <IconButton>
                            <EditIcon></EditIcon>
                        </IconButton>
                    </Link>
                    <IconButton onClick={handleDelete}>
                        <DeleteForeverIcon></DeleteForeverIcon>
                    </IconButton>
                    <CopyToClipboard text={clipboardState} onCopy={() => handleCopy} >
                        <IconButton onClick={handleCopy}>
                            <ContentPasteIcon />
                        </IconButton>
                    </CopyToClipboard>
                </ul>
            </div>
        </div>
    )
}

export default VorlagenListe