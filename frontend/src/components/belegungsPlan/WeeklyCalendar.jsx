// import React, { useState } from "react";
// import moment from "moment";
// import {
//     Typography,
//     Grid,
//     IconButton,
//     Button
// } from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import "./WeeklyCalendar.css";
// const WeeklyCalendar = ({ selectedDay }) => {
//     const weekdays = moment.weekdaysMin();
//     const [currentWeek, setCurrentWeek] = useState(moment().isoWeek());

//     const handlePreviousWeek = () => {
//         setCurrentWeek(prevWeek => prevWeek - 1);
//     };

//     const handleNextWeek = () => {
//         setCurrentWeek(prevWeek => prevWeek + 1);
//     };

//     const handleCurrentWeek = () => {
//         setCurrentWeek(moment().isoWeek());
//     };

//     const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");

//     const weekDaysList = weekdays.map((day, index) => {
//         const dayOfWeek = (index + 1) % 7;
//         const date = startOfWeek.clone().add(index, "days");

//         return (
//             <Grid item xs key={index} className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""}`}>

//                 <Typography variant="h6" className="day-name">
//                     {weekdays[dayOfWeek]}
//                 </Typography>
//                 <Typography variant="body1" className="day-date">
//                     {date.format("D MMM")}
//                 </Typography>
//             </Grid>
//         );
//     });

//     return (
//         <div className="weekly-calendar">
//             <div className="calendar-header">
//                 <IconButton onClick={handlePreviousWeek} className="arrow-icon">
//                     <ChevronLeftIcon />
//                 </IconButton>
//                 <Typography variant="h6" className="week-number">
//                     KW {currentWeek}
//                 </Typography>
//                 <IconButton onClick={handleNextWeek} className="arrow-icon">
//                     <ChevronRightIcon />
//                 </IconButton>
//             </div>
//             <div>
//                 <Button
//                     variant="outlined"
//                     onClick={handleCurrentWeek}
//                     className="booking-button"
//                 >
//                     Zurück zur aktuellen Woche
//                 </Button>
//             </div>
//             <Grid container spacing={2} className="calendar-days">
//                 {weekDaysList}
//             </Grid>
//         </div>
//     );
// };

// export default WeeklyCalendar;


// import React, { useState } from "react";
// import moment from "moment";
// import {
//     Typography,
//     Grid,
//     IconButton
// } from "@mui/material";
// import { Button, Modal, Form } from "react-bootstrap";

// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import "./WeeklyCalendar.css";

// const WeeklyCalendar = ({ selectedDay }) => {
//     const weekdays = moment.weekdaysMin();
//     const [currentWeek, setCurrentWeek] = useState(moment().isoWeek());
//     const [showModal, setShowModal] = useState(false);
//     const [bookingData, setBookingData] = useState(null);

//     const handlePreviousWeek = () => {
//         setCurrentWeek((prevWeek) => prevWeek - 1);
//     };

//     const handleNextWeek = () => {
//         setCurrentWeek((prevWeek) => prevWeek + 1);
//     };

//     const handleCurrentWeek = () => {
//         setCurrentWeek(moment().isoWeek());
//     };

//     const handleOpenModal = (date) => {
//         setBookingData({ date });
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleBooking = (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const booking = {
//             startDate: formData.get("startDate"),
//             endDate: formData.get("endDate"),
//             name: formData.get("name"),
//             phoneNumber: formData.get("phoneNumber"),
//             price: formData.get("price"),
//         };

//         // Send booking data to the server (json-server)
//         fetch("http://localhost:3001/bookings", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(booking),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 // Handle successful booking
//                 console.log("Booking successful", data);
//                 // Update the UI to reflect the booked dates
//                 // You can modify this part based on your UI requirements
//                 setBookingData(null);
//                 handleCloseModal();
//             })
//             .catch((error) => {
//                 // Handle booking error
//                 console.error("Error booking", error);
//                 // Display an error message to the user if needed
//             });
//     };


//     const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");

//     const weekDaysList = weekdays.map((day, index) => {
//         const dayOfWeek = (index + 1) % 7;
//         const date = startOfWeek.clone().add(index, "days");

//         return (
//             <Grid
//                 item
//                 xs
//                 key={index}
//                 className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""
//                     }`}
//             >
//                 <div
//                     className={`booking-slot ${bookingData && bookingData.date.isSame(date, "day")
//                         ? "booked"
//                         : "not-booked"
//                         }`}
//                     onClick={() => handleOpenModal(date)}
//                 ></div>
//                 <Typography variant="h6" className="day-name">
//                     {weekdays[dayOfWeek]}
//                 </Typography>
//                 <Typography variant="body1" className="day-date">
//                     {date.format("D MMM")}
//                 </Typography>
//             </Grid>
//         );
//     });

//     return (
//         <div className="weekly-calendar">
//             <div className="calendar-header">
//                 <IconButton onClick={handlePreviousWeek} className="arrow-icon">
//                     <ChevronLeftIcon />
//                 </IconButton>
//                 <Typography variant="h6" className="week-number">
//                     KW {currentWeek}
//                 </Typography>
//                 <IconButton onClick={handleNextWeek} className="arrow-icon">
//                     <ChevronRightIcon />
//                 </IconButton>
//             </div>
//             <div>
//                 <Button
//                     variant="outlined"
//                     onClick={handleCurrentWeek}
//                     className="booking-button"
//                 >
//                     Zurück zur aktuellen Woche
//                 </Button>
//             </div>
//             <Grid container spacing={2} className="calendar-days">
//                 {weekDaysList}
//             </Grid>
//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Buchung</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleBooking}>
//                         <Form.Group controlId="startDate">
//                             <Form.Label>Anreisedatum</Form.Label>
//                             <Form.Control type="date" name="startDate" required />
//                         </Form.Group>

//                         <Form.Group controlId="endDate">
//                             <Form.Label>Abreisedatum</Form.Label>
//                             <Form.Control type="date" name="endDate" required />
//                         </Form.Group>

//                         <Form.Group controlId="name">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" name="name" required />
//                         </Form.Group>

//                         <Form.Group controlId="phoneNumber">
//                             <Form.Label>Telefonnummer</Form.Label>
//                             <Form.Control type="tel" name="phoneNumber" required />
//                         </Form.Group>

//                         <Form.Group controlId="price">
//                             <Form.Label>Preis</Form.Label>
//                             <Form.Control type="number" name="price" required />
//                         </Form.Group>

//                         <Button type="submit" variant="primary">
//                             Buchen
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default WeeklyCalendar;





import React, { useState, useEffect } from "react";
import moment from "moment";
import {
    Typography,
    Grid,
    IconButton
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Modal, Form } from "react-bootstrap";

import "./WeeklyCalendar.css";

const WeeklyCalendar = ({ selectedDay }) => {
    const weekdays = moment.weekdaysMin();
    const [currentWeek, setCurrentWeek] = useState(moment().isoWeek());
    const [showModal, setShowModal] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/bookings")
            .then((response) => response.json())
            .then((data) => {
                setBookings(data);
            })
            .catch((error) => {
                console.error("Error fetching bookings", error);
            });
    }, []);

    const handlePreviousWeek = () => {
        setCurrentWeek((prevWeek) => prevWeek - 1);
    };

    const handleNextWeek = () => {
        setCurrentWeek((prevWeek) => prevWeek + 1);
    };

    const handleCurrentWeek = () => {
        setCurrentWeek(moment().isoWeek());
    };

    const handleOpenModal = (date) => {
        setBookingData({ date });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBooking = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const booking = {
            startDate: formData.get("startDate"),
            endDate: formData.get("endDate"),
            name: formData.get("name"),
            phoneNumber: formData.get("phoneNumber"),
            price: formData.get("price"),
        };

        // Send booking data to the server (json-server)
        fetch("http://localhost:3001/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle successful booking
                console.log("Booking successful", data);
                // Update the UI to reflect the booked dates
                setBookingData(null);
                handleCloseModal();
            })
            .catch((error) => {
                // Handle booking error
                console.error("Error booking", error);
                // Display an error message to the user if needed
            });
    };

    const startOfWeek = moment().isoWeek(currentWeek).startOf("isoWeek");

    const weekDaysList = weekdays.map((day, index) => {
        const dayOfWeek = (index + 1) % 7;
        const date = startOfWeek.clone().add(index, "days");

        const isBooked = bookings.some((booking) =>
            moment(booking.startDate).isSame(date, "day")
        );

        return (
            <Grid
                item
                xs
                key={index}
                className={`calendar-day ${selectedDay === dayOfWeek ? "selected" : ""
                    }`}
            >
                <div
                    className={`booking-slot ${isBooked ? "booked" : "not-booked"
                        }`}
                    onClick={() => handleOpenModal(date)}
                >
                    <Typography variant="h6" className="day-name">
                        {weekdays[dayOfWeek]}
                    </Typography>
                    <Typography variant="body1" className="day-date">
                        {date.format("D MMM")}
                    </Typography>
                </div>
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
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Buchung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBooking}>
                        <Form.Group controlId="startDate">
                            <Form.Label>Anreisedatum</Form.Label>
                            <Form.Control type="date" name="startDate" required />
                        </Form.Group>

                        <Form.Group controlId="endDate">
                            <Form.Label>Abreisedatum</Form.Label>
                            <Form.Control type="date" name="endDate" required />
                        </Form.Group>

                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" required />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Telefonnummer</Form.Label>
                            <Form.Control type="tel" name="phoneNumber" required />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Preis</Form.Label>
                            <Form.Control type="number" name="price" required />
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
