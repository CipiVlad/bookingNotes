import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Kundenstamm = () => {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState([])

    // API-Aufruf mit Axios, um die Buchungsdaten abzurufen
    useEffect(() => {
        loadingData()
    }, []);

    const loadingData = async () => {
        await axios.get('http://localhost:3001/bookings')
            .then(response => {
                // Daten speichern
                setClients(response.data);
                setSearch(response.data)
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Buchungsdaten:', error);
            });
    }


    //searchBar
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearch(clients)
        const resultArray =
            clients.filter(
                client =>
                    client.name.includes(e.target.value)
                    || client.name.toLowerCase().includes(e.target.value)
            )

        setSearch(resultArray)
        console.log(resultArray)
    }



    return (
        <>
            <Stack spacing={2} sx={{ width: 300, margin: '4vh auto' }}>
                <TextField
                    label="Suche nach Kunde"
                    onChange={handleSearchChange}
                />
            </Stack>


            <Table striped bordered hover onSubmit={handleSubmit}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Emailadresse</th>
                        <th>Telefonnummer</th>
                    </tr>
                </thead>
                {search.map((client, index) => (
                    <tbody key={index}>
                        <tr >
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>
                                <a href="mailto:">{client.emailAddress}</a>
                            </td>
                            <td>
                                <a href="tel:">{client.phoneNumber}</a>
                            </td>
                        </tr>
                    </tbody >
                ))
                }
            </Table>
        </>
    );
}

export default Kundenstamm;
