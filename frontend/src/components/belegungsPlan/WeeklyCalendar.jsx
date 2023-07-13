import React, { useState, useEffect } from "react";
import moment from "moment";
import {
    Typography,
    Grid,
    IconButton,
    Button
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import { eachDayOfInterval, format } from 'date-fns';

import "./WeeklyCalendar.css";
import RoomLogic from "./RoomLogic";
import ModalBooking from '../modal/ModalBooking'

const WeeklyCalendar = ({ selectedDay }) => {
    const year = moment().isoWeekYear()

    //!states
    const [currentWeek, setCurrentWeek] = useState(moment().isoWeek());
    const [showModal, setShowModal] = useState(false);

    //User Input mit Daten für den Server
    const [bookingData, setBookingData] = useState({
        startDate: "",
        endDate: "",
        name: "",
        phoneNumber: "",
        emailAddress: "",
        persons: "",
        price: "",
        room: ""
    });
    //Array von Buchungsdaten, die vom Server aberufen werden
    //jedes array Element repräsentiert eine Buchung
    const [bookings, setBookings] = useState([]);

    //Array von Datumswerten, die bereits gebucht sind
    //verwendet um die Kalenderdaten zu aktualisieren, gebuchte Tage farblich zu markieren
    const [bookedDays, setBookedDays] = useState([]);


    //event-handler
    const handlePreviousWeek = () => {
        setCurrentWeek((prevWeek) => prevWeek - 1);
    };

    const handleNextWeek = () => {
        setCurrentWeek((prevWeek) => prevWeek + 1);
    };

    const handleCurrentWeek = () => {
        setCurrentWeek(moment().isoWeek());
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBooking = async (event) => {
        event.preventDefault();

        // Extrahiere die Werte aus den Formularfeldern
        const { startDate, endDate, name, phoneNumber, price, emailAddress, persons, room } = bookingData;

        // Erstelle ein Objekt mit den Buchungsdaten
        const newBooking = {
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
            name,
            phoneNumber,
            emailAddress,
            persons,
            price,
            room
        };

        try {
            // Sende die Buchungsdaten an den Server
            const response = await axios.post("http://localhost:3001/bookings", newBooking);

            // Update die Buchungsdaten in der State-Variable
            setBookings((prevBookings) => [...prevBookings, response.data]);

            // Setze die Formulardaten zurück
            setBookingData({
                startDate: "",
                endDate: "",
                name: "",
                phoneNumber: "",
                emailAddress: "",
                persons: "",
                price: "",
                room: ""
            });

            // Schließe das Modal
            handleCloseModal();

            // Aktualisiere die Daten sofort
            updateCalendarData();
        } catch (error) {
            console.error("Fehler beim Buchen:", error);
        }
    };

    // Aktualisiere die Daten bei jedem rendern
    useEffect(() => {
        updateCalendarData();
    }, []);

    const updateCalendarData = () => {
        axios
            .get("http://localhost:3001/bookings")
            .then((response) => {
                const bookings = response.data;
                const bookedDays = [];

                bookings.forEach((booking) => {
                    const { startDate, endDate } = booking;
                    const range = eachDayOfInterval({ start: new Date(startDate), end: new Date(endDate) });

                    //entferne das letzte item aus einem array, damit das Abreisedatum nicht grün gefärbt ist
                    range.pop();
                    range.forEach((date) => {
                        const formattedDate = format(date, "yyyy-MM-dd");
                        if (!bookedDays.includes(formattedDate)) {
                            bookedDays.push(formattedDate);
                        }
                    });
                });


                setBookedDays(bookedDays);
                setBookings(bookings);
            })
            .catch((error) => {
                console.error("Fehler beim Abrufen der Buchungsdaten:", error);
            });
    };

    return (
        <div className="weekly-calendar">
            <div className="calendar-header">

                <Typography variant="h6" className="week-number">
                    <IconButton onClick={handlePreviousWeek} className="arrow-icon">
                        <ChevronLeftIcon />
                    </IconButton>
                    {`${year} KW ${currentWeek}`}
                    <IconButton onClick={handleNextWeek} className="arrow-icon">
                        <ChevronRightIcon />
                    </IconButton>
                </Typography>

            </div>
            <div>
                <Button variant="outlined" onClick={handleCurrentWeek} className="booking-button">
                    Zurück zur aktuellen Woche
                </Button>
            </div>

            <RoomLogic
                currentWeek={currentWeek}
                bookedDays={bookedDays}
                bookingData={bookingData}
                selectedDay={selectedDay}
                handleOpenModal={handleOpenModal}
            />

            <ModalBooking
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleBooking={handleBooking}
                bookingData={bookingData}
                setBookingData={setBookingData}
            />
        </div>
    );
};

export default WeeklyCalendar;
