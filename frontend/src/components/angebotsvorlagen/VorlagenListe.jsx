import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React, { useState } from 'react';
import axios from 'axios';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';


//mui confirmation dialog for delete

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const VorlagenListe = (props) => {
    //Dialog Window Delete
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //clipboard state
    let [clipboardState, setClipboardState] = useState('')

    //event handler
    function handleCopy() {
        clipboardState = props.offerings.filter((e) => e.id == props.id)
        setClipboardState(clipboardState[0].text)
        console.log(clipboardState[0].text);
    }

    function handleDelete() {
        props.onDelete(props.id);
    }
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Please Confirm"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you really want to delete this sample?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>

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
                    <IconButton onClick={handleClickOpen}>
                        <DeleteForeverIcon />
                    </IconButton>
                    <CopyToClipboard text={clipboardState} onCopy={() => handleCopy} >
                        <IconButton onClick={handleCopy}>
                            <ContentPasteIcon />
                        </IconButton>
                    </CopyToClipboard>
                </div>
            </div>
        </>

    )
}

export default VorlagenListe