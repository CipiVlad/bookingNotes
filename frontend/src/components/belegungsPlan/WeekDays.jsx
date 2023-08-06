import { Paper, Typography } from '@mui/material'

import WeeklyCalendar from './WeeklyCalendar'

import { useState } from 'react'



const WeekDays = ({ bookings, setBookings }) => {
    // console.log(bookings);

    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
            <Paper>
                <WeeklyCalendar selectedDay={selectedDay} bookings={bookings} setBookings={setBookings} />
            </Paper>
            <Paper>
                {/* {bookings.map((e, i) => (
                    <div key={i}>
                        <span>Name: {e.name}</span>
                        <span>Zeitraum: {e.startDate} - {e.endDate}</span>
                        <span>Persrsonen: {e.persons} </span>
                    </div>
                ))} */}
            </Paper >
        </>
    )
}

export default WeekDays