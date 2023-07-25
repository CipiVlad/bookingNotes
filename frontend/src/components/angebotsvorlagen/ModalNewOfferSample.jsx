import { TextField } from '@mui/material';
import React from 'react'
import { Modal, Form, Button } from "react-bootstrap";


const ModalNewOfferSample = ({ handleAddNewOffer, offerSampleData, setOfferSampleData, showModal, handleCloseModal }) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Erstelle eine neue Angebotsvorlage</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddNewOffer}>
                    <Form.Group controlId="title">
                        <Form.Label>Titel</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            required
                            value={offerSampleData.title}
                            onChange={(e) =>
                                setOfferSampleData({ ...offerSampleData, title: e.target.value })
                            }
                        />
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            type="text"
                            name="text"
                            required
                            value={offerSampleData.text}
                            onChange={(e) =>
                                setOfferSampleData({ ...offerSampleData, text: e.target.value })
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



export default ModalNewOfferSample