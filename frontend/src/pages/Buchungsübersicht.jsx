import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ÜbersichtsCard from '../components/buchungsÜbersicht/ÜbersichtsCard'

const Buchungsübersicht = () => {
    const [bookings, setBookings] = useState([]);

    // API-Aufruf mit Axios, um die Buchungsdaten abzurufen

    useEffect(() => {
        loadingData()
    }, []);

    const loadingData = async () => {
        axios.get('http://localhost:3001/bookings')
            .then(response => {
                // Daten speichern
                setBookings(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Buchungsdaten:', error);
            });
    }

    // Löschen einzelner Buchungen

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/bookings/${id}`)
            const bookingList = bookings.filter(booking => booking.id == id)
            setBookings(bookingList)
            loadingData()
            console.log('Daten gelöscht');
        } catch (error) {
            console.log(error);
        }
    }


    // Editieren einzelner Buchungen
    const handleEdit = async () => {

        console.log('edited');
    }



    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Buchungszeitraum</th>
                        <th>Emailadresse</th>
                        <th>Telefonnummer</th>
                        <th>Personenanzahl</th>
                        <th>Zimmer</th>
                        <th>Bearbeiten</th>
                    </tr>
                </thead>
                {bookings.map((booking, index) => (
                    <ÜbersichtsCard
                        key={index}
                        id={booking.id}
                        name={booking.name}
                        startDate={booking.startDate}
                        endDate={booking.endDate}
                        emailAddress={booking.emailAddress}
                        phoneNumber={booking.phoneNumber}
                        persons={booking.persons}
                        room={booking.room}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </Table>
        </>
    );
}

export default Buchungsübersicht;
