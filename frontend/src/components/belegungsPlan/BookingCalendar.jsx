import React, { useState } from 'react';
import moment from 'moment';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const BookingCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookingData, setBookingData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleContainerClick = (date) => {
        setSelectedDate(date);
    };

    const handleBookingSubmit = (formData) => {
        const { startDate, endDate, name, phoneNumber, price } = formData;
        const newBookingData = {
            ...bookingData,
            [startDate]: {
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

    const renderCalendarContainer = (date, index) => {
        const isSelected = selectedDate && selectedDate.isSame(date, 'day');
        const isBooked = date.format('YYYY-MM-DD') in bookingData;
        const selectedDateFormatted = selectedDate ? selectedDate.format('YYYY-MM-DD') : null;
        const isInRange =
            selectedDateFormatted &&
            bookingData[selectedDateFormatted] &&
            date.isSameOrAfter(moment(bookingData[selectedDateFormatted].startDate), 'day') &&
            date.isSameOrBefore(moment(bookingData[selectedDateFormatted].endDate), 'day');

        const containerStyle = {
            width: '100vw',
            height: '90px',
            backgroundColor: 'lightgray',
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
            border: '1px solid black',
            marginLeft: '10px',
        };

        const textStyle = {
            fontWeight: isSelected ? 'bold' : 'normal',
        };

        const bookingLineStyle = {
            width: '100%',
            height: '3px',
            backgroundColor: 'green',
            position: 'absolute',
            bottom: '0',
            visibility: isInRange ? 'visible' : 'hidden',
        };

        const bookingDataContent = isBooked ? (
            <div style={{ position: 'absolute', bottom: '-20px' }}>
                <p>
                    Name: {bookingData[date.format('YYYY-MM-DD')].name} - Telefonnummer:{' '}
                    {bookingData[date.format('YYYY-MM-DD')].phoneNumber} - Preis: {bookingData[date.format('YYYY-MM-DD')].price}
                </p>
            </div>
        ) : null;

        const handleContainerClick = () => {
            setSelectedDate(date);
            setShowModal(true);
        };

        return (
            <Col key={index}>
                <div style={containerStyle}>
                    <div style={circleStyle} onClick={handleContainerClick}>
                        <p style={textStyle}>{date.format('ddd')}</p>
                    </div>
                    {bookingDataContent}
                    {isBooked && <div style={bookingLineStyle}></div>}
                </div>
            </Col>
        );
    };

    const renderStatusBars = () => {
        const statusBars = [];
        let currentStatus = '';
        let currentDate = moment().startOf('isoWeek');
        let isBooked = false;

        while (currentDate.day() !== 0) {
            const dateKey = currentDate.format('YYYY-MM-DD');
            if (bookingData[dateKey]) {
                if (!isBooked) {
                    currentStatus = `${bookingData[dateKey].name} - ${bookingData[dateKey].phoneNumber} - ${bookingData[dateKey].price}`;
                    isBooked = true;
                }
            } else {
                if (isBooked) {
                    statusBars.push(<div key={dateKey} className="status-bar" style={{ width: '10px' }}></div>);
                    isBooked = false;
                }
            }
            currentDate.add(1, 'day');
        }

        if (isBooked) {
            statusBars.push(<div key={currentDate.format('YYYY-MM-DD')} className="status-bar" style={{ width: '10px' }}></div>);
        }

        return statusBars;
    };

    const renderBookingForm = () => {
        if (!selectedDate) {
            return null;
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const startDate = moment(formData.get('startDate'), 'DD.MM.YYYY');
            const endDate = moment(formData.get('endDate'), 'DD.MM.YYYY');
            const name = formData.get('name');
            const phoneNumber = formData.get('phoneNumber');
            const price = formData.get('price');
            handleBookingSubmit({ startDate, endDate, name, phoneNumber, price });
        };

        return (
            <Modal show={showModal} onHide={() => setShowModal(false)} fullscreen>
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
        const date = moment().isoWeekday(index + 1);
        return renderCalendarContainer(date, index);
    });

    return (
        <Container>
            <Row>{calendarContainers}</Row>
            <Row>
                {renderStatusBars()}
                <div className="status-bar" style={{ flexGrow: 1 }}></div>
            </Row>
            {renderBookingForm()}
        </Container>
    );
};

export default BookingCalendar;
