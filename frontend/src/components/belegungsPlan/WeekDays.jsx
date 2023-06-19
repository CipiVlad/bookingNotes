// import React, { useState, useEffect } from "react";

// const WeekDays = () => {
//     const current = new Date();
//     // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     const [date, setDate] = useState(`${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`)

//     const dienstag = `${current.getDate() + 1}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     const mittworch = `${current.getDate() + 2}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     const donnerstag = `${current.getDate() + 3}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     const freitag = `${current.getDate() + 4}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     const samstag = `${current.getDate() + 5}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     const sonntag = `${current.getDate() + 6}/${current.getMonth() + 1}/${current.getFullYear()}`;


//     var currentdate = new Date();
//     var oneJan = new Date(currentdate.getFullYear(), 0, 1);
//     var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
//     var weekNumber = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
//     console.log(`The week number of the current date (${currentdate}) is ${weekNumber}.`);

//     return (
//         <div>
//             <h2>KW {weekNumber}</h2>
//             <table >
//                 <thead>
//                     <tr>
//                         <th>Montag</th>
//                         <th>Dienstag</th>
//                         <th>Mittwoch</th>
//                         <th>Donnerstag</th>
//                         <th>Freitag</th>
//                         <th>Samstag</th>
//                         <th>Sonntag</th>
//                     </tr>
//                     <tr>
//                         <td>{date}</td>
//                         <td>{dienstag}</td>
//                         <td>{mittworch}</td>
//                         <td>{donnerstag}</td>
//                         <td>{freitag}</td>
//                         <td>{samstag}</td>
//                         <td>{sonntag}</td>
//                     </tr>
//                 </thead>
//                 <tbody>

//                 </tbody>
//             </table>



//         </div>
//     )
// };

// export default WeekDays

import { Paper, Typography } from '@mui/material'

import WeeklyCalendar from './WeeklyCalendar'

const WeekDays = () => {
    return (
        <Paper>
            <WeeklyCalendar />
            {/* <Typography>Calendar Grid</Typography> */}
        </Paper>
    )
}

export default WeekDays