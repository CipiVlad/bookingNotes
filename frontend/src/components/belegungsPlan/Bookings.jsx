
import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from 'axios'
import "./Bookings.css";
import moment from "moment";

const Bookings = () => {
    const [show, setShow] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [bookings, setBookings] = useState([]);

    const handleClose = () => {
        setSelectedDay(null);
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };
    const handleBooking = (e) => {
        e.preventDefault();

        const startDate = new Date(e.target.startDate.value);
        console.log("startDate: ", startDate);
        const endDate = new Date(e.target.endDate.value);
        const daysDifference = (endDate - startDate - 1) / (1000 * 3600 * 24);
        const bookedDays = [];

        for (let i = 0; i <= daysDifference; i++) {
            const bookedDay = new Date(startDate.getTime());
            bookedDay.setDate(startDate.getDate() + i);
            bookedDays.push(bookedDay.toISOString().split('T')[0]);
            console.log(bookedDays);
        }

        const isBooked = bookings.some((booking) => {
            return booking.bookedDays.some((bookedDay) => {
                const currentDate = moment().startOf("day").toDate();
                const bookedDate = moment(bookedDay).startOf("day").toDate();
                return moment(currentDate).isSame(bookedDate);
            });
        });


        const newBooking = {
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
            name: e.target.name.value,
            phoneNumber: e.target.phoneNumber.value,
            price: e.target.price.value,
            bookedDays,
            isBooked,
        };

        axios
            .post("http://localhost:3001/bookings", newBooking)
            .then((response) => {
                setBookings([...bookings, response.data]);
                handleClose();
            })
            .catch((error) => {
                console.log(error);
            });

        setBookings([...bookings, newBooking]);
        handleClose();
    };

    useEffect(() => {
        axios.get("http://localhost:3001/bookings")
            .then(response => {
                const formattedBookings = response.data.map((booking) => {
                    const formattedBookedDays = booking.bookedDays.map((day) =>
                        new Date(day)
                    );

                    return {
                        ...booking,
                        bookedDays: formattedBookedDays,
                    };
                });

                setBookings(formattedBookings);
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });
    }, []);



    return (
        <>

            <div className="parent" onClick={handleShow}>
                {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                    const currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() + dayIndex - 1);
                    const isBooked = bookings.some((booking) => {
                        return booking.bookedDays.some((bookedDay) => {
                            // console.log(booking.bookedDays); 
                            return (
                                currentDate.toDateString() === bookedDay.toDateString()
                            )
                        });
                    });

                    return (
                        <div
                            key={dayIndex}
                            className={`child ${isBooked ? "green" : ""}`}
                        ></div>
                    );
                })}
            </div>

            <Modal show={show} onHide={handleClose}>
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
        </>
    );
};

export default Bookings;
