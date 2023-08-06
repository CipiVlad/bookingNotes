import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModalBooking = ({ showModal, handleCloseModal, handleBooking, bookingData, setBookingData }) => {
    console.log(bookingData.room);
    const [room1, setRoom1] = useState(false)
    const [room2, setRoom2] = useState(false)
    const [room3, setRoom3] = useState(false)
    const [room4, setRoom4] = useState(false)
    const [room5, setRoom5] = useState(false)
    const [room6, setRoom6] = useState(false)
    const [room7, setRoom7] = useState(false)
    const [allRooms, setAllRooms] = useState(false)



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
                        <br />
                        {/* <Form.Control
                            type="number"
                            name="room"
                            required
                            value={bookingData.room}
                            onChange={(e) =>
                                setBookingData({ ...bookingData, room: e.target.value })
                            }
                        /> */}
                        <label htmlFor="">1</label>
                        <input type="checkbox" checked={room1} onChange={(e) => setRoom1(e.target.checked)} />
                        <label htmlFor="">2</label>
                        <input type="checkbox" checked={room2} onChange={(e) => setRoom2(e.target.checked)} />
                        <label htmlFor="">3</label>
                        <input type="checkbox" checked={room3} onChange={(e) => setRoom3(e.target.checked)} />
                        <label htmlFor="">4</label>
                        <input type="checkbox" checked={room4} onChange={(e) => setRoom4(e.target.checked)} />
                        <label htmlFor="">5</label>
                        <input type="checkbox" checked={room5} onChange={(e) => setRoom5(e.target.checked)} />
                        <label htmlFor="">6</label>
                        <input type="checkbox" checked={room6} onChange={(e) => setRoom6(e.target.checked)} />
                        <label htmlFor="">7</label>
                        <input type="checkbox" checked={room7} onChange={(e) => setRoom7(e.target.checked)} />
                        <label htmlFor="">all</label>
                        <input type="checkbox" checked={allRooms} onChange={(e) => setAllRooms(e.target.checked)} />
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