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
import { Modal, Form } from "react-bootstrap";
import { isAfter, isBefore, isEqual, eachDayOfInterval, format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify'

import "./WeeklyCalendar.css";
import RoomLogic from "./RoomLogic";

const WeeklyCalendar = ({ selectedDay }) => {
    const weekdays = moment.weekdaysMin();
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
                room
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


    // const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");
    // const weekDaysList = weekdays.map((day, index) => {
    //     const dayOfWeek = (index + 1) % 7;
    //     const date = startOfWeek.clone().add(index, "days");

    //     const isBooked = bookedDays.includes(date.format("YYYY-MM-DD"));
    //     const isStartDate = date.isSame(bookingData.startDate, "day");
    //     const isEndDate = date.isSame(bookingData.endDate, "day");
    //     const isWithinRange = date.isBetween(bookingData.startDate, bookingData.endDate, "day");

    //     return (

    //         <Grid
    //             item
    //             xs
    //             key={index}
    //             className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""}`}
    //             onClick={handleOpenModal}
    //         >
    //             <Typography variant="h6" className="day-name">
    //                 {weekdays[dayOfWeek]}
    //             </Typography>
    //             <Typography variant="body1" className="day-date">
    //                 {date.format("D MMM")}
    //             </Typography>
    //             <div className="parent-div">
    //                 <div className={`child-div ${isBooked ? "booked" : ""} ${isStartDate || isEndDate || isWithinRange ? "selected-slot" : ""}`} />
    //             </div>
    //         </Grid>
    //     );
    // });




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

            {/* <Grid container spacing={2} className="calendar-days">
                {weekDaysList}
            </Grid> */}
            <RoomLogic
                currentWeek={currentWeek}
                bookedDays={bookedDays}
                bookingData={bookingData}
                selectedDay={selectedDay}
                handleOpenModal={handleOpenModal}
            />

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Buchung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBooking}>
                        <Form.Group controlId="startDate">
                            <Form.Label>Anreisedatum</Form.Label>
                            <Form.Control
                                type="date"
                                name="startDate"
                                required
                                value={bookingData.startDate}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, startDate: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="endDate">
                            <Form.Label>Abreisedatum</Form.Label>
                            <Form.Control
                                type="date"
                                name="endDate"
                                required
                                value={bookingData.endDate}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, endDate: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                required
                                value={bookingData.name}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, name: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Telefonnummer</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phoneNumber"
                                required
                                value={bookingData.phoneNumber}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, phoneNumber: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="emailAddress">
                            <Form.Label>Emailadresse</Form.Label>
                            <Form.Control
                                type="email"
                                name="phoneNumber"
                                required
                                value={bookingData.emailAddress}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, emailAddress: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="persons">
                            <Form.Label>Personenanzahl</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                required
                                value={bookingData.persons}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, persons: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Preis</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                required
                                value={bookingData.price}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, price: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="room">
                            <Form.Label>Zimmer</Form.Label>
                            <Form.Control
                                type="number"
                                name="room"
                                required
                                value={bookingData.room}
                                onChange={(e) =>
                                    setBookingData({ ...bookingData, room: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Button type="submit" variant="primary">
                            Buchen
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default WeeklyCalendar;
