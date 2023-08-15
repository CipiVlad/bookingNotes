import React, { useState, useEffect } from 'react';
import WeekDays from '../components/belegungsPlan/WeekDays';
import axios from 'axios';
// import { useGetBookingsQuery } from '../features/apiSlice';

const BelegungsPlan = () => {

    // const {
    //     data: bookingsDATA
    // } = useGetBookingsQuery()

    // console.log(bookingsDATA);

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/bookings')
            .then((response) => {
                // setBookings({ bookingsDATA });
                setBookings(response.data);
            })
            .catch((error) => {
                console.error('Error fetching bookings:', error);
            });
    }, []);

    return <WeekDays bookings={bookings} setBookings={setBookings} />;
};

export default BelegungsPlan;
