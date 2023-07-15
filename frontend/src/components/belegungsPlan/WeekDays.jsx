import { Paper, Typography } from '@mui/material'

import WeeklyCalendar from './WeeklyCalendar'

import { useState } from 'react'



const WeekDays = ({ bookings, setBookings }) => {
    console.log(bookings);

    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
            <Paper>
                <WeeklyCalendar selectedDay={selectedDay} bookings={bookings} setBookings={setBookings} />
            </Paper>

            {bookings.map((e, i) => (
                <div key={i}>
                    <p>{e.name} --
                        {e.startDate} - {e.endDate} --
                        {e.persons} Personen</p>
                </div>
            ))}
        </>
    )
}

export default WeekDays