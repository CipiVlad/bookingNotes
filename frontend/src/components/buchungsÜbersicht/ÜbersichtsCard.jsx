
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
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

export default function ÜbersichtsCard(props) {
    //Dialog Window Delete
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = () => {
        props.onDelete(props.id);
    };




    return (
        <>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Bitte um Bestätigung"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Möchtest du wirklich diese Buchung löschen?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete}>Ja</Button>
                    <Button onClick={handleClose}>Nein</Button>
                </DialogActions>
            </Dialog>
            <tbody>
                <tr >
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.startDate} - {props.endDate}</td>
                    <td>
                        <a href="mailto:">{props.emailAddress}</a>
                    </td>
                    <td>
                        <a href="tel:">{props.phoneNumber}</a>
                    </td>
                    <td>{props.persons}</td>
                    {/* alternative Lösung suchen für die Anzeige der gebuchten Zimmer */}
                    <td>{props.room.map(e => e.number1)}</td>
                    <td>{props.price}</td>
                    <td>
                        <Link to={`/edit/${props.id}`} state={props.bookings}>
                            <IconButton>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Link>
                        <IconButton onClick={handleClickOpen}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                    </td>
                </tr>
            </tbody >
        </>
    )
}

