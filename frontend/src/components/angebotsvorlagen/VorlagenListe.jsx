import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react';
import axios from 'axios';

const VorlagenListe = (props) => {
    let [clipboardState, setClipboardState] = useState('')

    //event handler
    function handleCopy() {
        clipboardState = props.offerings.filter((e) => e.id == props.id)
        setClipboardState(clipboardState[0].text)
        console.log(clipboardState[0].text);
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/offeringlist/${props.id}`)
            const offeringList = props.offerings.filter(offer => offer.id == props.id)
            console.log(offeringList);
            // setBookings(bookingList)
            // loadingData()
            console.log('Daten gelöscht');
            window.onrel
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='text_right' >
            <div className='headline_and_icon'>
                <h4>{props.title}</h4>
            </div>
            <div className='icons_container' style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/vorlagen/angebotsvorlageneditor/${props.id}`} state={props.offerings} >
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Link>
                <IconButton onClick={handleDelete}>
                    <DeleteForeverIcon />
                </IconButton>
                <CopyToClipboard text={clipboardState} onCopy={() => handleCopy} >
                    <IconButton onClick={handleCopy}>
                        <ContentPasteIcon />
                    </IconButton>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default VorlagenListe