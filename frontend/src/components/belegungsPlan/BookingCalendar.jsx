import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/de';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles, ThemeProvider, createTheme } from '@mui/styles';


moment.locale('de');

const theme = createTheme()

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '90px',
        backgroundColor: '#f2f2f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    numberCircle: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '10px',
        left: '10px',
    },
    dayNumber: {
        color: 'white',
        fontWeight: 'bold',
    },
    statusBar: {
        width: '100%',
        height: '5px',
        position: 'absolute',
        bottom: '0',
        backgroundColor: theme.palette.success.main,
    },
    bookedStatus: {
        width: '0%',
    },
    selectedContainer: {
        backgroundColor: theme.palette.primary.light,
    },
}));

const BookingCalendar = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookingData, setBookingData] = useState({
        '2023-06-24': {
            startDate: '2023-06-24',
            endDate: '2023-06-26',
            name: 'John Doe',
            phoneNumber: '1234567890',
            price: '100€',
        },
        '2023-06-28': {
            startDate: '2023-06-28',
            endDate: '2023-06-30',
            name: 'Jane Smith',
            phoneNumber: '9876543210',
            price: '150€',
        },
    });

    const renderCalendarContainer = (date, index) => {
        const isSelected =
            selectedDate && moment(selectedDate).isSame(moment(date), 'day');
        const isBooked = date.format('YYYY-MM-DD') in bookingData;
        const selectedDateFormatted = selectedDate
            ? moment(selectedDate).format('YYYY-MM-DD')
            : null;
        const isInRange =
            selectedDateFormatted &&
            bookingData[selectedDateFormatted] &&
            moment(date).isSameOrAfter(
                moment(bookingData[selectedDateFormatted].startDate),
                'day'
            ) &&
            moment(date).isSameOrBefore(
                moment(bookingData[selectedDateFormatted].endDate),
                'day'
            );

        const handleContainerClick = () => {
            setSelectedDate(moment(date));
        };

        return (
            <Grid item key={index}>
                <Paper
                    className={`${classes.container} ${isSelected ? classes.selectedContainer : ''}`}
                    elevation={2}
                    onClick={handleContainerClick}
                >
                    <div className={classes.numberCircle}>
                        <Typography variant="body1" className={classes.dayNumber}>
                            {date.format('D')}
                        </Typography>
                    </div>
                    {isBooked && (
                        <div
                            className={`${classes.statusBar} ${isInRange ? classes.bookedStatus : ''}`}
                        >
                            {/* Hier werden die gebuchten Daten angezeigt */}
                            {isInRange && (
                                <div>
                                    <Typography variant="caption">
                                        Name: {bookingData[selectedDateFormatted].name}
                                    </Typography>
                                    <Typography variant="caption">
                                        Telefonnummer: {bookingData[selectedDateFormatted].phoneNumber}
                                    </Typography>
                                    <Typography variant="caption">
                                        Preis: {bookingData[selectedDateFormatted].price}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    )}
                </Paper>
            </Grid>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={1}>
                {/* Kalendercontainer für die Woche */}
                {Array.from({ length: 7 }).map((_, index) => {
                    const date = moment().startOf('isoWeek').add(index, 'days');
                    return renderCalendarContainer(date, index);
                })}
            </Grid>
        </ThemeProvider>
    );
};

export default BookingCalendar;
