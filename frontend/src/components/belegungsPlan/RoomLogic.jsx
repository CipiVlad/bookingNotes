import React from 'react';
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
    Paper
} from '@mui/material';

const RoomLogic = ({ currentWeek, bookedDays, bookingData, selectedDay, handleOpenModal }) => {

    const weekdays = moment.weekdaysMin();
    const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");

    // Group bookings by room number
    const bookingsByRoom = {};
    for (const booking of bookingData) {
        const roomNumber = booking.room;
        if (!bookingsByRoom[roomNumber]) {
            bookingsByRoom[roomNumber] = [];
        }
        bookingsByRoom[roomNumber].push(booking);
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
                                <TableCell>
                                    <Typography variant="h6" className="day-name">
                                        {weekdays[dayOfWeek]}
                                    </Typography>
                                    <Typography variant="body1" className="day-date">
                                        {date.format("D MMM")}
                                    </Typography>
                                </TableCell>
                                {/* Add additional table header cells if needed */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.from({ length: 7 }).map((_, roomIndex) => (
                                <TableRow key={roomIndex} style={{ height: '155px' }}>
                                    <TableCell>
                                        {bookingsByRoom[roomIndex + 1] &&
                                            bookingsByRoom[roomIndex + 1].map(booking => (
                                                //'[)' bedeutet, dass startDate inkludiert wird
                                                date.isBetween(booking.startDate, booking.endDate, "day", '[)') ? booking.name : null
                                            ))}
                                    </TableCell>
                                    {/* Add additional table cells if needed */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid >
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
