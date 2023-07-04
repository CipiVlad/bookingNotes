import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Buchungsübersicht = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // API-Aufruf mit Axios, um die Buchungsdaten abzurufen
        axios.get('http://localhost:3001/bookings')
            .then(response => {
                // Daten speichern
                setBookings(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Buchungsdaten:', error);
            });
    }, []);

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
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{booking.name}</td>
                            <td>{booking.startDate} - {booking.endDate}</td>
                            <td>{booking.emailAddress}</td>
                            <td>{booking.phoneNumber}</td>
                            <td>{booking.persons}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Buchungsübersicht;
