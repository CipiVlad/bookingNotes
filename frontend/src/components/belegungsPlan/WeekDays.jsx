import { Paper, Typography } from '@mui/material'

import WeeklyCalendar from './WeeklyCalendar'
import Bookings from './Bookings'

import { useState } from 'react'



const WeekDays = ({ bookings }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <Paper>
            <WeeklyCalendar selectedDay={selectedDay} bookings={bookings} />
            <Bookings selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </Paper>
    )
}

export default WeekDays