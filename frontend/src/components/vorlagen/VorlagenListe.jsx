import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const VorlagenListe = (props) => {
    //event handler
    function handleAdd() {
        console.log('add');
    }

    function handleCopy() {
        console.log(props.offerings[0].text);
    }

    function handleDelete() {
        console.log('deleted');
    }

    return (
        <div className='text_right'>
            <div className='headline_and_icon'>
                <h2>Liste</h2>
                <IconButton onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
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
                    <CopyToClipboard>
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