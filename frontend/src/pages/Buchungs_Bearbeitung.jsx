import { useState, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import moment from "moment";
import axios from "axios";

const Buchungs_Bearbeitung = () => {
    const navigate = useNavigate()
    //verarbeitet die dynamischen parameter der endpoints 
    //hier z.B. '/edit/id'
    const { id } = useParams()

    //ermöglicht es den state aus der ÜbersichtsCard hierher mitzunehmen
    const location = useLocation()
    //wenn loaction.state null ist und User auf zurück klickt, dann navigate zu '/buchungen'
    let data = location.state || [];
    // console.log(data);

    useEffect(() => {
        if (!location.state) {
            navigate("/buchungen");
        }
    }, [location.state, navigate]);

    let detail = data.filter((elt) => elt.id == id);
    const initialBookingData = detail.length > 0 ? { // überprüft ob daten nicht null sind, sonst gibts einen error
        startDate: detail[0].startDate,
        endDate: detail[0].endDate,
        name: detail[0].name,
        phoneNumber: detail[0].phoneNumber,
        emailAddress: detail[0].emailAddress,
        persons: detail[0].persons,
        price: detail[0].price,
        room: detail[0].room
    } : {
        startDate: "",
        endDate: "",
        name: "",
        phoneNumber: "",
        emailAddress: "",
        persons: "",
        price: "",
        room: []
    };

    const [room1, setRoom1] = useState(false)
    const [room2, setRoom2] = useState(false)
    const [room3, setRoom3] = useState(false)
    const [room4, setRoom4] = useState(false)
    const [room5, setRoom5] = useState(false)
    const [room6, setRoom6] = useState(false)
    const [room7, setRoom7] = useState(false)
    const [allRooms, setAllRooms] = useState(false)

    const [bookingData, setBookingData] = useState(initialBookingData);


    const [bookings, setBookings] = useState([]);

    //event-handler
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
            room: [
                room1,
                room2,
                room3,
                room4,
                room5,
                room6,
                room7,
                allRooms
            ]
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
                room: []
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
                    <br />
                    <label htmlFor="">1</label>
                    <input type="checkbox" checked={room1 || allRooms} onChange={(e) => setRoom1(e.target.checked)} />
                    <label htmlFor="">2</label>
                    <input type="checkbox" checked={room2 || allRooms} onChange={(e) => setRoom2(e.target.checked)} />
                    <label htmlFor="">3</label>
                    <input type="checkbox" checked={room3 || allRooms} onChange={(e) => setRoom3(e.target.checked)} />
                    <label htmlFor="">4</label>
                    <input type="checkbox" checked={room4 || allRooms} onChange={(e) => setRoom4(e.target.checked)} />
                    <label htmlFor="">5</label>
                    <input type="checkbox" checked={room5 || allRooms} onChange={(e) => setRoom5(e.target.checked)} />
                    <label htmlFor="">6</label>
                    <input type="checkbox" checked={room6 || allRooms} onChange={(e) => setRoom6(e.target.checked)} />
                    <label htmlFor="">7</label>
                    <input type="checkbox" checked={room7 || allRooms} onChange={(e) => setRoom7(e.target.checked)} />
                    <label htmlFor="">alle</label>
                    <input type="checkbox" checked={allRooms} onChange={(e) => {
                        setAllRooms(e.target.checked)
                        setRoom1(e.target.checked)
                        setRoom2(e.target.checked)
                        setRoom3(e.target.checked)
                        setRoom4(e.target.checked)
                        setRoom5(e.target.checked)
                        setRoom6(e.target.checked)
                        setRoom7(e.target.checked)
                    }
                    }
                    />
                </Form.Group>

                <Button onClick={handleEdit} variant="contained" color="success">
                    Änderungen übernehmen
                </Button>
            </Form>
        </div>
    )
}

export default Buchungs_Bearbeitung