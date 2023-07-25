import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import ModalNewOfferSample from './ModalNewOfferSample';


const NeueVorlage = ({ loadingData }) => {
    const [offerSampleData, setOfferSampleData] = useState({
        title: "",
        text: ""
    })

    const [showModal, setShowModal] = useState(false);

    //handle events
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleAddNewOffer = async (event) => {
        event.preventDefault()

        //Extrahiere die Werte aus den Formularfeldern
        const { title, text } = offerSampleData

        //Erstelle ein Objekt für die Angebotsvorlagedaten
        const newOffer = {
            title,
            text
        }

        try {
            //Sende die Daten an den Server
            const response = await axios.post('http://localhost:3001/offeringlist', newOffer)

            //Update die Daten in der State-Variable
            setOfferSampleData(response.data)

            //Setze die Formulardaten zurück
            setOfferSampleData({
                title: "",
                text: ""
            })

            handleCloseModal()

            loadingData()

        } catch (error) {
            console.log("Fehler beim Erstellen einer neuen Angebotsvorlage", error)
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '5vh' }}>
            <IconButton onClick={handleOpenModal} style={{ border: '4px solid lightgray' }}>
                <AddIcon />
            </IconButton>

            <ModalNewOfferSample
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                handleAddNewOffer={handleAddNewOffer}
                offerSampleData={offerSampleData}
                setOfferSampleData={setOfferSampleData}
            />
        </div>
    )
}

export default NeueVorlage