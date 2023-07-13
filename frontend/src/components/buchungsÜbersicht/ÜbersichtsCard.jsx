import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

export default function ÜbersichtsCard(props) {
    const handleDelete = () => {
        props.onDelete(props.id);
    };

    return (
        <>
            <tbody>
                <tr >
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.startDate} - {props.endDate}</td>
                    <td>
                        <a href="mailto:">{props.emailAddress}</a>
                    </td>
                    <td>
                        <a href="tel:">{props.phoneNumber}</a>
                    </td>
                    <td>{props.persons}</td>
                    <td>{props.room}</td>
                    <td>{props.price}</td>
                    <td>
                        <Link to={`/edit/${props.id}`} state={props.bookings}>
                            <IconButton>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Link>
                        <IconButton onClick={handleDelete}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                    </td>
                </tr>
            </tbody >
        </>
    )
}

