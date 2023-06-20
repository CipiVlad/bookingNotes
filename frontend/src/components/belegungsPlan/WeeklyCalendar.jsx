import React, { useState } from "react";
import moment from "moment";
import {
    Typography,
    Grid,
    IconButton,
    Button
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import BookingCalendar from "./BookingCalendar";

const WeeklyCalendar = () => {

    //Abkürzung der Wochentage
    const weekdays = moment.weekdaysMin()

    //Aktuelle Kalenderwoche
    const [currentWeek, setCurrentWeek] = useState(moment().isoWeek())

    //Pfeile Logik
    const handlePreviousWeek = () => {
        setCurrentWeek(prevWeek => prevWeek - 1)
    }
    const handleNextWeek = () => {
        setCurrentWeek(prevWeek => prevWeek + 1)
    }

    //zurück zur aktuellen Woche
    const handleCurrentWeek = () => {
        setCurrentWeek(moment().isoWeek())
    }

    // Startdatum der aktuellen Kalenderwoche ermitteln
    const startOfWeek = moment().isoWeek(currentWeek).startOf('isoWeek')

    //Aktuelles Datum und Wochentag ermitteln
    // const currentDate = moment()
    // const startOfWeek = currentDate.clone().startOf('isoWeek')
    // const currentDayOfWeek = currentDate.isoWeekday()

    //Wochentage generieren
    const weekDaysList = weekdays.map((day, index) => {
        const dayOfWeek = (index + 1) % 7;

        const date = startOfWeek.clone().add(index, 'days')
        // const dayOfWeek = date.isoWeekday()
        // const dayOfWeek = (currentDayOfWeek + index) % 7

        return (
            <Grid item xs key={index}>
                <Typography variant="h6">{weekdays[dayOfWeek]}</Typography>
                <Typography variant="body1">{date.format('D MMM')}</Typography>
            </Grid>
        )

    })

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <IconButton onClick={handlePreviousWeek}>
                    <ChevronLeftIcon />
                </IconButton>
                <Typography variant="h6">KW  {currentWeek}</Typography>
                <IconButton onClick={handleNextWeek}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button variant="outlined" onClick={handleCurrentWeek}>Zurück Zur Aktuelle Woche</Button>
            </div>
            <Grid container spacing={2} marginTop={'2vh'}>
                {weekDaysList}
            </Grid>
            {/* <BookingCalendar /> */}
        </div>
    )
};

export default WeeklyCalendar;
