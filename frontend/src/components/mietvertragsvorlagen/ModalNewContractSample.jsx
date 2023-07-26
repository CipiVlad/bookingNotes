import { TextField } from '@mui/material';
import React from 'react'
import { Modal, Form, Button } from "react-bootstrap";

const ModalNewContractSample = ({ handleAddNewContract, contractSampleData, setContractSampleData, showModal, handleCloseModal }) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Erstelle eine neue Mietvertragsvorlage</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddNewContract}>
                    <Form.Group controlId="title">
                        <Form.Label>Titel</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            required
                            value={contractSampleData.title}
                            onChange={(e) =>
                                setContractSampleData({ ...contractSampleData, title: e.target.value })
                            }
                        />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            type="text"
                            name="text"
                            required
                            value={contractSampleData.text}
                            onChange={(e) =>
                                setContractSampleData({ ...contractSampleData, text: e.target.value })
                            }
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Speichern
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}



export default ModalNewContractSample