import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Vorlagen = () => {
    /**
     *     <Link to={'/vorlagen/angebotsvorlage'}>Angebotsvorlage</Link>
                    <Link to={'/vorlagen/mietvertragsvorlage'}>Mietvertragsvorlage</Link>
                    <Link to={'/vorlagen/rechnungsvorlage'}>Rechnungsvorlage</Link>
     */


    const arrayVorlagen = [
        {
            id: 1,
            name: 'Angebote',
            link: '/vorlagen/angebotsvorlage',
            text: 'hier kannst du z.B. neue Mietvertragsvorlagen anlegen,verschiedene Varianten hinterlegen und einfach die Vorlage kopieren'
        },
        {
            id: 2,
            name: 'Rechnungen',
            link: '/vorlagen/rechnungsvorlage',
            text: 'hier kannst du z.B. Rechnungsvorlagen für Barzahlungen oder Überweisungen anlegen und die jeweilige kopieren'
        },
        {
            id: 3,
            name: 'Mietverträge',
            link: '/vorlagen/mietvertragsvorlage',
            text: 'hier kannst du z.B. Mietvertragsvorlage in verschiedenen Varianten anlegen und die jeweilige kopieren'
        }

    ]

    return (
        <Row xs={1} md={2} className="g-4">
            {arrayVorlagen.map((e, idx) => (
                <Col key={idx}>
                    <Card style={{ padding: '5vw', margin: '5%' }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>{e.text}</Card.Text>
                            <Link to={e.link}>bearbeiten</Link>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Vorlagen