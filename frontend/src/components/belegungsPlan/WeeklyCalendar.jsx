import React, { useState } from "react";
import moment from "moment";
import {
    Typography,
    Grid,
    IconButton,
    Button
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./WeeklyCalendar.css";
const WeeklyCalendar = ({ selectedDay, bookings }) => {
    const weekdays = moment.weekdaysMin();
    const [currentWeek, setCurrentWeek] = useState(moment().isoWeek());

    const handlePreviousWeek = () => {
        setCurrentWeek(prevWeek => prevWeek - 1);
    };

    const handleNextWeek = () => {
        setCurrentWeek(prevWeek => prevWeek + 1);
    };

    const handleCurrentWeek = () => {
        setCurrentWeek(moment().isoWeek());
    };

    const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");

    const weekDaysList = weekdays.map((day, index) => {
        const dayOfWeek = (index + 1) % 7;
        const date = startOfWeek.clone().add(index, "days");

        return (
            <Grid item xs key={index} className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""}`}>

                <Typography variant="h6" className="day-name">
                    {weekdays[dayOfWeek]}
                </Typography>
                <Typography variant="body1" className="day-date">
                    {date.format("D MMM")}
                </Typography>
            </Grid>
        );
    });

    return (
        <div className="weekly-calendar">
            <div className="calendar-header">
                <IconButton onClick={handlePreviousWeek} className="arrow-icon">
                    <ChevronLeftIcon />
                </IconButton>
                <Typography variant="h6" className="week-number">
                    KW {currentWeek}
                </Typography>
                <IconButton onClick={handleNextWeek} className="arrow-icon">
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <div>
                <Button
                    variant="outlined"
                    onClick={handleCurrentWeek}
                    className="booking-button"
                >
                    Zurück zur aktuellen Woche
                </Button>
            </div>
            <Grid container spacing={2} className="calendar-days">
                {weekDaysList}
            </Grid>
        </div>
    );
};

export default WeeklyCalendar;
