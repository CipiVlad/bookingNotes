import React from 'react'
import VorlagenListe from '../../../components/mietvertragsvorlagen/VorlagenListe'
import './Vorlagen.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import NeueVorlage from '../../../components/mietvertragsvorlagen/NeueVorlage';


const Mietvertragsvorlage = () => {
    const [contractData, setContractData] = useState([])

    useEffect(() => {
        loadingData()
    }, [])

    const loadingData = async () => {
        await axios.get('http://localhost:3001/contractSampleList')
            .then((response) => {
                setContractData(response.data)
                console.log(response.data)
            })
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/contractSampleList/${id}`)
            // const offeringSampleList = offerings.filter(offer => offer.id == id)
            // console.log(offeringSampleList);
            setContractData([])
            loadingData()
            console.log('Daten gelöscht');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NeueVorlage
                loadingData={loadingData}
            />
            {
                contractData.map((e, index) => (
                    <div className="container" key={index}>
                        <div className='text_left'>
                            <h2>{e.text.slice(0, 25)}...</h2>
                            <article>
                                <p>{e.text.slice(25)}</p>
                            </article>
                        </div>

                        <VorlagenListe
                            key={index}
                            id={e.id}
                            title={e.title}
                            text={e.text}
                            contractData={contractData}
                            state={contractData.id}
                            onDelete={handleDelete}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Mietvertragsvorlage