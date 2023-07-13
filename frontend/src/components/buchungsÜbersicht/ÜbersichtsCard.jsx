import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ÜbersichtsCard(props) {

    const handleDelete = () => {
        props.onDelete(props.id);
    };
    const handleEdit = () => {
        props.onEdit(props)
    }

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
                    <td>
                        <IconButton onClick={handleEdit}>
                            <EditIcon></EditIcon>
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                    </td>
                </tr>
            </tbody >
        </>
    )
}

