import './BookCal_ver2.css'
import { useState } from 'react';
import { Container, Row, Button, Modal, Form } from "react-bootstrap";

const BookCal_ver2 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="parent" onClick={() => handleShow()} >
                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Buchung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
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
    )
}

export default BookCal_ver2
