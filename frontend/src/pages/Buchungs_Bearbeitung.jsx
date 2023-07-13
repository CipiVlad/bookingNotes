import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import moment from "moment";
import axios from "axios";

const Buchungs_Bearbeitung = () => {

    //verarbeitet die dynamischen parameter der endpoints 
    //hier z.B. '/edit/id'
    const { id } = useParams()

    //ermöglicht es den state aus der ÜbersichtsCard hierher mitzunehmen
    const location = useLocation()
    let data = location.state
    // console.log(data);

    //herausfiltern des 
    let detail = data.filter((elt) => {
        // console.log(elt.id);
        return elt.id == id
    })
    console.log(detail[0].id);
    const [bookingData, setBookingData] = useState(
        {
            startDate: detail[0].startDate,
            endDate: detail[0].endDate,
            name: detail[0].name,
            phoneNumber: detail[0].phoneNumber,
            emailAddress: detail[0].emailAddress,
            persons: detail[0].persons,
            price: detail[0].price,
            room: detail[0].room
        }
    )

    const [bookings, setBookings] = useState([]);

    //event-handler
    const navigate = useNavigate()
    const handleEdit = async (id) => {

        // Extrahiere die Werte aus den Formularfeldern
        const { startDate, endDate, name, phoneNumber, price, emailAddress, persons, room } = bookingData;

        // Erstelle ein Objekt mit den Buchungsdaten
        const updateBooking = {
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
            const response = await axios.put(`http://localhost:3001/bookings/${detail[0].id}`, updateBooking);

            // Update die Buchungsdaten in der State-Variable
            setBookings(bookings.map(booking => booking.id === id ? { ...response.data } : booking))

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

            // zurück zu /buchungen
            navigate('/buchungen')
        } catch (error) {
            console.error("Fehler beim Buchen:", error);
        }

    }


    return (
        <div>

            <Form style={{ width: "500px", margin: " 0 auto" }}>
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

                <Button onClick={handleEdit} variant="success">
                    Buchen
                </Button>
            </Form>
        </div>
    )
}

export default Buchungs_Bearbeitung