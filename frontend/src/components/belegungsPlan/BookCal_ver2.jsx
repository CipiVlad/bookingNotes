// import "./BookCal_ver2.css";
// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";

// const BookCal_ver2 = ({ selectedDay, setSelectedDay }) => {
//     const [show, setShow] = useState(false);
//     const [bookings, setBookings] = useState([]); // Zustand für Buchungen hinzugefügt
//     const handleClose = () => {
//         setSelectedDay(null);
//         setShow(false);
//     };
//     const handleShow = () => {
//         setShow(true);
//     };

//     const handleBooking = (e) => {
//         e.preventDefault();

//         // Handle booking logic
//         // ...

//         // Erstelle ein neues Buchungsobjekt
//         const newBooking = {
//             selectedDay,
//             startDate: e.target.startDate.value,
//             endDate: e.target.endDate.value,
//             name: e.target.name.value,
//             phoneNumber: e.target.phoneNumber.value,
//             price: e.target.price.value,
//         };

//         // Füge das neue Buchungsobjekt zum Array hinzu
//         setBookings([...bookings, newBooking]);

//         handleClose();
//         console.log(newBooking);
//     };

//     return (
//         <>
//             <div className="parent" onClick={handleShow}>
//                 <div className={`child ${selectedDay === 0 ? "selected" : ""}`} onClick={() => setSelectedDay(0)}></div>
//                 <div className={`child ${selectedDay === 1 ? "selected" : ""}`} onClick={() => setSelectedDay(1)}></div>
//                 <div className={`child ${selectedDay === 2 ? "selected" : ""}`} onClick={() => setSelectedDay(2)}></div>
//                 <div className={`child ${selectedDay === 3 ? "selected" : ""}`} onClick={() => setSelectedDay(3)}></div>
//                 <div className={`child ${selectedDay === 4 ? "selected" : ""}`} onClick={() => setSelectedDay(4)}></div>
//                 <div className={`child ${selectedDay === 5 ? "selected" : ""}`} onClick={() => setSelectedDay(5)}></div>
//                 <div className={`child ${selectedDay === 6 ? "selected" : ""}`} onClick={() => setSelectedDay(6)}></div>
//             </div>

//             <Modal show={show} onHide={handleClose}>
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
//             {/* Iteriere über das Array von Buchungen */}
//             {bookings.map((booking, index) => (
//                 <div key={index}>
//                     {/* Zeige Buchungsinformationen an */}
//                     <p>Name: {booking.name}</p>
//                     <p>Startdatum: {booking.startDate}</p>
//                     <p>Enddatum: {booking.endDate}</p>
//                     {/* Weitere Informationen anzeigen */}
//                 </div>
//             ))}
//         </>
//     );
// };

// export default BookCal_ver2;

// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import "./BookCal_ver2.css"; // Importiere die CSS-Datei für die Komponente

// const BookCal_ver2 = ({ selectedDay, setSelectedDay }) => {
//     const [show, setShow] = useState(false);
//     const [bookings, setBookings] = useState([]);

//     const handleClose = () => {
//         setSelectedDay(null);
//         setShow(false);
//     };
//     const handleShow = () => {
//         setShow(true);
//     };

//     const handleBooking = (e) => {
//         e.preventDefault();

//         const newBooking = {
//             selectedDay,
//             startDate: e.target.startDate.value,
//             endDate: e.target.endDate.value,
//             name: e.target.name.value,
//             phoneNumber: e.target.phoneNumber.value,
//             price: e.target.price.value,
//             booked: "green", // Neues Eigenschaftspaar "booked: green"
//         };

//         setBookings([...bookings, newBooking]);

//         handleClose();
//     };

//     return (
//         <>
//             <div className="parent" onClick={handleShow}>
//                 <div
//                     className={`child ${selectedDay === 0 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(0)}
//                 ></div>
//                 <div
//                     className={`child ${selectedDay === 1 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(1)}
//                 ></div>
//                 <div
//                     className={`child ${selectedDay === 2 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(2)}
//                 ></div>
//                 <div
//                     className={`child ${selectedDay === 3 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(3)}
//                 ></div>
//                 <div
//                     className={`child ${selectedDay === 4 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(4)}
//                 ></div>
//                 <div
//                     className={`child ${selectedDay === 5 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(5)}
//                 ></div>
//                 <div
//                     className={`child ${selectedDay === 6 ? "selected" : ""}`}
//                     onClick={() => setSelectedDay(6)}
//                 ></div>
//                 {/* Füge hier weitere child-Elemente hinzu */}
//             </div>

//             <Modal show={show} onHide={handleClose}>
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
//                             <Form.Control type="text" name="name" />
//                         </Form.Group>

//                         <Form.Group controlId="phoneNumber">
//                             <Form.Label>Telefonnummer</Form.Label>
//                             <Form.Control type="tel" name="phoneNumber" />
//                         </Form.Group>

//                         <Form.Group controlId="price">
//                             <Form.Label>Preis</Form.Label>
//                             <Form.Control type="number" name="price" />
//                         </Form.Group>

//                         <Button type="submit" variant="primary">
//                             Buchen
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>

//             <div className="parent">
//                 {bookings.map((booking, index) => {
//                     const bookedDayIndex = booking.selectedDay;
//                     return (
//                         <div
//                             key={index}
//                             className={`child ${selectedDay === bookedDayIndex ? "selected" : ""
//                                 } ${booking.booked}`}
//                             onClick={() => setSelectedDay(bookedDayIndex)}
//                         ></div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default BookCal_ver2;
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./BookCal_ver2.css";

const BookCal_ver2 = () => {
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
        const endDate = new Date(e.target.endDate.value);
        const daysDifference = (endDate - startDate) / (1000 * 3600 * 24);
        const bookedDays = [];

        for (let i = 0; i <= daysDifference; i++) {
            const bookedDay = new Date(startDate.getTime());
            bookedDay.setDate(startDate.getDate() + i);
            bookedDays.push(bookedDay);
        }

        const newBooking = {
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
            name: e.target.name.value,
            phoneNumber: e.target.phoneNumber.value,
            price: e.target.price.value,
            bookedDays,
        };

        setBookings([...bookings, newBooking]);

        handleClose();
    };

    return (
        <>
            <div className="parent" onClick={handleShow}>
                {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                    const currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() + dayIndex + 1);
                    const isBooked = bookings.some((booking) => {
                        return booking.bookedDays.some((bookedDay) => {
                            return (
                                currentDate.toDateString() === bookedDay.toDateString()
                            );
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

export default BookCal_ver2;
