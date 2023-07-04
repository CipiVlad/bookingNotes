import React from 'react'
import Table from 'react-bootstrap/Table';

const Buchungsübersicht = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Buchungszeitraum</th>
                    <th>Anfrage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>21.06.-25.06.23</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>21.06.-25.06.23</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>21.06.-25.06.23</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Buchungsübersicht