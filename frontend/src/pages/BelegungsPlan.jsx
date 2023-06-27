import React, { useState, useEffect } from 'react';
import WeekDays from '../components/belegungsPlan/WeekDays';
import axios from 'axios';

const BelegungsPlan = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/bookings')
            .then((response) => {
                setBookings(response.data);
            })
            .catch((error) => {
                console.error('Error fetching bookings:', error);
            });
    }, []);

    return <WeekDays bookings={bookings} />;
};

export default BelegungsPlan;
