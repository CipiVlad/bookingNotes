export default function ÜbersichtsCard(props) {
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
                </tr>
            </tbody >
        </>
    )
}

