// import React, { useState } from 'react';
// import moment from 'moment';
// import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const BookingCalendar = () => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [bookingData, setBookingData] = useState({});
//     const [showModal, setShowModal] = useState(false);

//     // const handleContainerClick = (containerNumber) => {
//     //     setSelectedDate(containerNumber);
//     // };

//     const handleBookingSubmit = (formData) => {
//         const { startDate, endDate, name, phoneNumber, price } = formData;
//         const newBookingData = {
//             ...bookingData,
//             [selectedDate]: {
//                 startDate,
//                 endDate,
//                 name,
//                 phoneNumber,
//                 price,
//             },
//         };
//         setBookingData(newBookingData);
//         setSelectedDate(null);
//         setShowModal(false);
//     };

//     const renderCalendarContainer = (containerNumber) => {
//         const isSelected = selectedDate === containerNumber;
//         const containerStyle = {
//             width: '100%',
//             height: '90px',
//             backgroundColor: '#999',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-start',
//             position: 'relative',
//             marginBottom: '5px',
//         };

//         const circleStyle = {
//             width: '50px',
//             height: '50px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: isSelected ? 'lightblue' : 'white',
//             marginLeft: '10px',
//             cursor: 'pointer'
//         };

//         const textStyle = {
//             fontWeight: isSelected ? 'bold' : 'normal',
//         };

//         const bookingLineStyle = {
//             width: '0',
//             height: '15px',
//             borderRadius: '6px',
//             backgroundColor: 'green',
//             visibility: bookingData[containerNumber] ? 'visible' : 'hidden',
//             left: 'calc(10px + 25px)',
//             transition: 'width 0.3s',
//         };

//         if (bookingData[containerNumber]) {
//             const startDate = moment(bookingData[containerNumber].startDate, 'YYYY-MM-DD');
//             const endDate = moment(bookingData[containerNumber].endDate, 'YYYY-MM-DD');
//             const bookingDays = endDate.diff(startDate, 'days') + 1;
//             const totalDaysInWeek = 7; // Gesamtanzahl der Tage in der Woche
//             const bookingGaps = bookingDays - 1; // Anzahl der Lücken zwischen den gebuchten Tagen
//             const bookingWidth = (bookingGaps / totalDaysInWeek) * 100; // Berechnung der Breite in Prozent
//             bookingLineStyle.width = `${bookingWidth}%`;
//         }



//         const bookingDataContent = bookingData[containerNumber] ? (
//             <div style={{ position: 'absolute', bottom: '-20px' }}>
//                 <p>
//                     Name: {bookingData[containerNumber].name} - Telefonnummer:{' '}
//                     {bookingData[containerNumber].phoneNumber} - Preis: {bookingData[containerNumber].price}
//                 </p>
//             </div>
//         ) : null;

//         const handleContainerClick = () => {
//             setSelectedDate(containerNumber);
//             setShowModal(true);
//         };

//         const bookingStartDate = bookingData[containerNumber] ? moment(bookingData[containerNumber].startDate, 'YYYY-MM-DD') : null;
//         const bookingEndDate = bookingData[containerNumber] ? moment(bookingData[containerNumber].endDate, 'YYYY-MM-DD') : null;

//         let bookingLineWidth = '0';

//         if (bookingStartDate && bookingEndDate) {
//             const bookingDuration = bookingEndDate.diff(bookingStartDate, 'days') + 1;
//             bookingLineWidth = `${bookingDuration * 50}px`;
//         }

//         return (
//             <Row key={containerNumber}>
//                 <div style={containerStyle}>
//                     <div style={circleStyle} onClick={handleContainerClick}>
//                         <p style={textStyle}>{containerNumber}</p>
//                     </div>
//                     {bookingDataContent}
//                     {bookingData[containerNumber] && (
//                         <div
//                             style={{
//                                 ...bookingLineStyle,
//                                 width: bookingLineWidth,
//                             }}
//                         ></div>
//                     )}
//                 </div>
//             </Row>
//         );
//     };


//     const renderStatusBars = () => {
//         const statusBars = [];
//         let currentStatus = '';
//         let isBooked = false;

//         for (let i = 1; i <= 7; i++) {
//             const containerNumber = i;
//             const containerKey = `container-${containerNumber}`;

//             if (bookingData[containerKey]) {
//                 if (!isBooked) {
//                     currentStatus = `${bookingData[containerKey].name} - ${bookingData[containerKey].phoneNumber} - ${bookingData[containerKey].price}`;
//                     isBooked = true;
//                 }
//             } else {
//                 if (isBooked) {
//                     statusBars.push(
//                         <div
//                             key={containerKey}
//                             className="status-bar"
//                             style={{
//                                 width: `${((i - 1) * 1) + 50}px`,
//                             }}
//                         ></div>
//                     );
//                     isBooked = false;
//                 }
//             }
//         }

//         if (isBooked) {
//             statusBars.push(
//                 <div
//                     key="container-8"
//                     className="status-bar"
//                     style={{
//                         width: `${(7 * 50) + 10}px`,
//                     }}
//                 ></div>
//             );
//         }

//         return statusBars;
//     };

//     const renderBookingForm = () => {
//         if (!selectedDate) {
//             return null;
//         }

//         const handleSubmit = (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.target);
//             const startDate = moment(formData.get('startDate'), 'YYYY-MM-DD');
//             const endDate = moment(formData.get('endDate'), 'YYYY-MM-DD');
//             const name = formData.get('name');
//             const phoneNumber = formData.get('phoneNumber');
//             const price = formData.get('price');
//             handleBookingSubmit({ startDate, endDate, name, phoneNumber, price });
//         };

//         return (
//             <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Buchung</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
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
//         );
//     };

//     const calendarContainers = [...Array(7)].map((_, index) => {
//         const containerNumber = index + 1;
//         return renderCalendarContainer(containerNumber);
//     });

//     return (
//         <Container fluid>
//             <Row>{calendarContainers}</Row>
//             <Row>{renderStatusBars()}</Row>
//             {renderBookingForm()}
//         </Container>
//     );
// };

// export default BookingCalendar;

import React, { useState } from "react";
import moment from "moment";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
import "./BookingCalendar.css"

const BookingCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookingData, setBookingData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleBookingSubmit = (formData) => {
        const { startDate, endDate, name, phoneNumber, price } = formData;
        const newBookingData = {
            ...bookingData,
            [selectedDate]: {
                startDate,
                endDate,
                name,
                phoneNumber,
                price,
            },
        };
        setBookingData(newBookingData);
        setSelectedDate(null);
        setShowModal(false);
    };

    const renderCalendarContainer = (containerNumber) => {
        const isSelected = selectedDate === containerNumber;
        const containerStyle = {
            width: '100%',
            height: '90px',
            backgroundColor: '#999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            marginBottom: '5px',
        };
        const circleStyle = {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isSelected ? 'lightblue' : 'white',
            marginLeft: '10px',
            cursor: 'pointer'
        };
        const bookingLineStyle = {
            width: '0',
            height: '15px',
            borderRadius: '6px',
            backgroundColor: 'green',
            visibility: bookingData[containerNumber] ? 'visible' : 'hidden',
            left: 'calc(10px + 25px)',
            transition: 'width 0.3s',
        };

        const bookingDataContent = bookingData[containerNumber] ? (
            <div style={{ position: 'absolute', bottom: '-20px' }}>
                <p>
                    Name: {bookingData[containerNumber].name} - Telefonnummer:{' '}
                    {bookingData[containerNumber].phoneNumber} - Preis: {bookingData[containerNumber].price}
                </p>
            </div>
        ) : null;
        const bookingStartDate = bookingData[containerNumber] ? moment(bookingData[containerNumber].startDate, 'YYYY-MM-DD') : null;
        const bookingEndDate = bookingData[containerNumber] ? moment(bookingData[containerNumber].endDate, 'YYYY-MM-DD') : null;

        let bookingLineWidth = '0';

        if (bookingStartDate && bookingEndDate) {
            const bookingDuration = bookingEndDate.diff(bookingStartDate, 'days') + 1;
            bookingLineWidth = `${bookingDuration * 200}px`;
        }

        const handleContainerClick = () => {
            setSelectedDate(containerNumber);
            setShowModal(true);
        };

        return (

            <Row key={containerNumber} className="calendar-container">
                <div style={containerStyle}>
                    <div style={circleStyle} onClick={handleContainerClick}
                        className={`container-circle ${isSelected ? "selected" : ""}`}

                    >
                        <p className="container-text">{containerNumber}</p>
                    </div>
                    {bookingDataContent}
                    {bookingData[containerNumber] && (
                        <div
                            style={{
                                ...bookingLineStyle,
                                width: bookingLineWidth,
                            }}
                        ></div>
                    )}
                </div>
            </Row>

        );
    };

    const renderStatusBars = () => {
        const statusBars = [];
        let currentStatus = "";
        let isBooked = false;

        for (let i = 1; i <= 7; i++) {
            const containerNumber = i;
            const containerKey = `container-${containerNumber}`;

            if (bookingData[containerKey]) {
                if (!isBooked) {
                    currentStatus = `${bookingData[containerKey].name} - ${bookingData[containerKey].phoneNumber} - ${bookingData[containerKey].price}`;
                    isBooked = true;
                }
            } else {
                if (isBooked) {
                    statusBars.push(
                        <div
                            key={containerKey}
                            className="status-bar"
                            style={{
                                width: `${((i - 1) * 1) + 50}px`,
                            }}
                        ></div>
                    );
                    isBooked = false;
                }
            }
        }

        if (isBooked) {
            statusBars.push(
                <div
                    key="container-8"
                    className="status-bar"
                    style={{
                        width: `${(7 * 50) + 10}px`,
                    }}
                ></div>
            );
        }

        return <div className="status-bars">{statusBars}</div>;
    };

    const renderBookingForm = () => {
        if (!selectedDate) {
            return null;
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const startDate = moment(formData.get('startDate'), 'YYYY-MM-DD');
            const endDate = moment(formData.get('endDate'), 'YYYY-MM-DD');
            const name = formData.get('name');
            const phoneNumber = formData.get('phoneNumber');
            const price = formData.get('price');
            handleBookingSubmit({ startDate, endDate, name, phoneNumber, price });
        };

        return (
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Buchung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
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
        );
    };

    const calendarContainers = [...Array(7)].map((_, index) => {
        const containerNumber = index + 1;
        return renderCalendarContainer(containerNumber);
    });

    return (
        <Container fluid className="booking-calendar">
            <Row>{calendarContainers}</Row>
            {renderStatusBars()}
            {renderBookingForm()}
        </Container>
    );
};

export default BookingCalendar;
