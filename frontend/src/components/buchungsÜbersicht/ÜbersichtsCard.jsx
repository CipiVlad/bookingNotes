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

    //  

    let mappedRooms = props.room.map(e => e)
    // console.log(mappedRooms);
    // i.e.: [false, true, false, false, false, false, false, false]

    // store to push loop results
    let convertIndexOfRooms = []

    // loop through the length of mappedRooms
    // get index of each position
    // push it to store and add + 1 to start from 1 
    for (let i = 0; i < mappedRooms.length; i++) {
        if (mappedRooms[i]) convertIndexOfRooms.push(i + 1)
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
                    <td>{props.startDate.slice(5)} - {props.endDate}</td>
                    <td>
                        <a href="mailto:">{props.emailAddress}</a>
                    </td>
                    <td>
                        <a href="tel:">{props.phoneNumber}</a>
                    </td>
                    <td>{props.persons}</td>

                    {/* 
                    since input checkbox 'all' results in an array [1,2,3,4,5,6,7,8]
                    set up a condition:
                    first join('') to concatinate to 12345678
                    then: if number is greater than 7 (sum of all room numbers) return 'all', else
                    return the simple convertIndexRooms Number
                    */}
                    <td>{convertIndexOfRooms.join('') > 12345677 ? 'alle' : convertIndexOfRooms.map(e => e + " ")}</td>


                    <td>{props.price} €</td>
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

