import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import ModalNewContractSample from './ModalNewContractSample';


const NeueVorlage = ({ loadingData }) => {
    const [contractSampleData, setContractSampleData] = useState({
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
    const handleAddNewContract = async (event) => {
        event.preventDefault()

        //Extrahiere die Werte aus den Formularfeldern
        const { title, text } = contractSampleData

        //Erstelle ein Objekt für die Angebotsvorlagedaten
        const newContract = {
            title,
            text
        }

        try {
            //Sende die Daten an den Server
            const response = await axios.post('http://localhost:3001/contractSampleList', newContract)

            //Update die Daten in der State-Variable
            setContractSampleData(response.data)

            //Setze die Formulardaten zurück
            setContractSampleData({
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

            <ModalNewContractSample
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                handleAddNewContract={handleAddNewContract}
                contractSampleData={contractSampleData}
                setContractSampleData={setContractSampleData}
            />
        </div>
    )
}

export default NeueVorlage