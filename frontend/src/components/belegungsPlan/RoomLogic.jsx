import React, { useState } from 'react';
import {
    Typography,
    Grid,
} from "@mui/material";
import moment from 'moment';

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Tooltip
} from '@mui/material';
import '../../css/RoomLogic.css'
import RoomNumberCard from './RoomNumberCard';




const RoomLogic = ({ currentWeek, bookedDays, bookingData, selectedDay, handleOpenModal, bookings }) => {
    // console.log(bookings);

    const weekdays = moment.weekdaysMin();
    const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");

    // Fasse Buchungen anhand von gleicher Zimmernummer zusammen
    /**
     * In diesem  Code durchlaufen wir nun das bookingData-Array und überprüfen jedes Zimmer in der room-Liste der Buchung. Wenn das Zimmer als true markiert ist, wird es zur entsprechenden Zimmernummer in bookingsByRoom hinzugefügt, und die Zellen für die Buchungen in diesem Zimmer werden entsprechend eingefärbt. Dadurch werden jetzt alle ausgewählten Zimmer im gleichen Zeitraum richtig angezeigt.
     */
    const bookingsByRoom = {};
    for (const booking of bookings) {
        for (let i = 0; i < booking.room.length; i++) {
            if (booking.room[i]) {
                const roomNumber = i + 1;
                if (!bookingsByRoom[roomNumber]) {
                    bookingsByRoom[roomNumber] = [];
                }
                bookingsByRoom[roomNumber].push(booking);
            }
        }
    }

    // console.log(bookingsByRoom);

    //styles hovering table cell state and handler
    const [isHovering, setisHovering] = useState(false)
    let content;
    const handleMouseEnter = () => {
        setisHovering(true)
        // return content = (
        //     bookings.map((e) => {
        //         <div>
        //             {e.name}
        //         </div>
        //     })
        // )

    }
    const handleMouseLeave = () => {
        setisHovering(false)
    }



    const weekDaysList = weekdays.map((day, index) => {
        const dayOfWeek = (index + 1) % 7;
        const date = startOfWeek.clone().add(index, "days");

        return (
            <Grid
                item
                xs
                key={index}
                className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""}`}
                onClick={handleOpenModal}
            >
                <TableContainer component={Paper}>
                    <Table aria-label='simple table'>
                        <TableHead>
                            <TableRow style={{ height: '155px', background: 'lightsteelblue', borderBottom: '2px solid darkgray' }}>
                                <TableCell

                                >
                                    <Typography variant="h6" className="day-name">
                                        {weekdays[dayOfWeek]}
                                    </Typography>
                                    <Typography variant="body1" className="day-date">
                                        {date.format("D MMM")}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.from({ length: 7 }).map((_, roomIndex) => (
                                <TableRow key={roomIndex} style={{ height: '155px' }}
                                >
                                    <TableCell

                                        // Erklärung sieh ganz unten:
                                        className=
                                        {
                                            bookingsByRoom[roomIndex + 1]
                                                &&
                                                bookingsByRoom[roomIndex + 1]
                                                    .some
                                                    (
                                                        booking => date.isBetween(
                                                            booking.startDate, booking.endDate, "day", '[)')
                                                    )
                                                ?
                                                "booked-cell"
                                                :
                                                ""
                                        }

                                        style={{ textAlign: 'center' }}
                                    >
                                        {bookingsByRoom[roomIndex + 1] &&
                                            bookingsByRoom[roomIndex + 1].map(booking => (
                                                // '[)' bedeutet, dass startDate inkludiert wird
                                                date.isBetween(booking.startDate, booking.endDate, "day", '[)') ? (
                                                    <div key={booking.id} style={{ color: isHovering ? 'yellow' : 'black' }}
                                                    >
                                                        <>
                                                            <Tooltip title={
                                                                <div>
                                                                    <p>
                                                                        {booking.price} €/Nacht
                                                                    </p>
                                                                    <p>
                                                                        {booking.persons} Person(en)
                                                                    </p>

                                                                </div>
                                                            }>
                                                                <div
                                                                >{booking.name}</div>

                                                            </Tooltip>
                                                        </>
                                                    </div>
                                                ) : null
                                            ))}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        );
    });

    return (
        <>
            <Grid container spacing={2} className="calendar-days">
                {weekDaysList}
            </Grid>

        </>
    );
}

export default RoomLogic;


/*
Diese Zeile Code dient dazu, die CSS-Klasse für die Zellen festzulegen, die gebuchte Zimmer repräsentieren.

1. `bookingsByRoom[roomIndex + 1]`: Hier wird geprüft, ob es Buchungen für das Zimmer mit der Nummer `roomIndex + 1` gibt. Beachte, dass das Array `bookingsByRoom` die Zimmerindizes basierend auf 1 anstatt 0 verwendet.

2. `bookingsByRoom[roomIndex + 1] && bookingsByRoom[roomIndex + 1].some(booking => date.isBetween(booking.startDate, booking.endDate, "day", '[)'))`: Hier wird überprüft, ob das Zimmer `roomIndex + 1` Buchungen hat und ob mindestens eine dieser Buchungen den aktuellen Tag (`date`) beinhaltet. Dazu wird die `some`-Funktion verwendet, um zu überprüfen, ob mindestens ein Element im Array der Buchungen (`bookingsByRoom[roomIndex + 1]`) die Bedingung `date.isBetween(booking.startDate, booking.endDate, "day", '[)')` erfüllt. Die `isBetween`-Funktion prüft, ob das Datum `date` im Intervall (`startDate` bis `endDate`) einer Buchung liegt.

3. `? "booked-cell" : ""`: Wenn die obige Bedingung wahr ist (d.h., das Zimmer ist gebucht und der aktuelle Tag ist im Buchungsintervall), wird der `booked-cell` CSS-Klassenname zugewiesen, andernfalls wird eine leere Zeichenkette (`""`) als CSS-Klassenname zugewiesen.

Zusammengefasst, wenn das Zimmer gebucht ist und der aktuelle Tag Teil des Buchungsintervalls ist, wird der CSS-Klassenname `booked-cell` zugewiesen, was dazu führt, dass die entsprechende Zelle grün gefärbt wird. Ansonsten bleibt die Zelle ohne zusätzliche CSS-Klasse und behält ihre Standardfarbe.
*/