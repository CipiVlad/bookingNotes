import React from 'react'
import VorlagenListe from '../../../components/angebotsvorlagen/VorlagenListe'
import './Vorlagen.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import NeueVorlage from '../../../components/angebotsvorlagen/NeueVorlage';


const Angebotsvorlage = () => {
    const [offerings, setOfferings] = useState([])

    useEffect(() => {
        loadingData()
    }, [])

    const loadingData = async () => {
        await axios.get('http://localhost:3001/offeringSampleList')
            .then((response) => {
                setOfferings(response.data)
                console.log(response.data)
            })
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/offeringSampleList/${id}`)
            // const offeringSampleList = offerings.filter(offer => offer.id == id)
            // console.log(offeringSampleList);
            setOfferings([])
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
                offerings.map((e, index) => (
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
                            offerings={offerings}
                            state={offerings.id}
                            onDelete={handleDelete}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Angebotsvorlage