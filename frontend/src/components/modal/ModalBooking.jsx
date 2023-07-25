import { Modal, Form, Button } from "react-bootstrap";

const ModalBooking = ({ showModal, handleCloseModal, handleBooking, bookingData, setBookingData }) => {
    console.log(bookingData.startDate);
    return (
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

    )
}

export default ModalBooking