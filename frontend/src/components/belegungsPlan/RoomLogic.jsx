import React, { useState } from 'react'
import {
    Typography,
    Grid,
    IconButton,
    Button
} from "@mui/material";
import moment from 'moment';
import ÜbersichtsCard from '../buchungsÜbersicht/ÜbersichtsCard'

const RoomLogic = ({ currentWeek, bookedDays, bookingData, selectedDay, handleOpenModal }) => {

    console.log();

    const weekdays = moment.weekdaysMin();
    const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");
    const weekDaysList = weekdays.map((day, index) => {
        const dayOfWeek = (index + 1) % 7;
        const date = startOfWeek.clone().add(index, "days");

        const isBooked = bookedDays.includes(date.format("YYYY-MM-DD"));
        const isStartDate = date.isSame(bookingData.startDate, "day");
        const isEndDate = date.isSame(bookingData.endDate, "day");
        const isWithinRange = date.isBetween(bookingData.startDate, bookingData.endDate, "day");

        return (
            <Grid
                item
                xs
                key={index}
                className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""}`}
                onClick={handleOpenModal}
            >
                <Typography variant="h6" className="day-name">
                    {weekdays[dayOfWeek]}
                </Typography>
                <Typography variant="body1" className="day-date">
                    {date.format("D MMM")}
                </Typography>
                <div className="parent-div">
                    <div className={`child-div ${isBooked ? "booked" : ""} ${isStartDate || isEndDate || isWithinRange ? "selected-slot" : ""}`} />
                </div>
            </Grid>
        );
    });

    return (
        <>
            <Grid container spacing={2} className="calendar-days">
                {weekDaysList}
            </Grid>
        </>
    )
}

export default RoomLogic