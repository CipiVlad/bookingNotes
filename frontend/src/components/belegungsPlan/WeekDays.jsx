import { Paper, Typography } from '@mui/material'

import WeeklyCalendar from './WeeklyCalendar'
import BookCal_ver2 from './BookCal_ver2'

import { useState } from 'react'



const WeekDays = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <Paper>
            <WeeklyCalendar selectedDay={selectedDay} />
            <BookCal_ver2 selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </Paper>
    )
}

export default WeekDays