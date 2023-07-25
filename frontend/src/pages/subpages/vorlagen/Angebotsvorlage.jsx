import React from 'react'
import VorlagenListe from '../../../components/angebotsvorlagen/VorlagenListe'
import './Angebotsvorlage.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import NeueVorlage from '../../../components/angebotsvorlagen/NeueVorlage';


const Angebotsvorlage = () => {
    const [offerings, setOfferings] = useState([])

    useEffect(() => {
        loadingData()
    }, [])

    const loadingData = async () => {
        await axios.get('http://localhost:3001/offeringlist')
            .then((response) => {
                setOfferings(response.data)
                console.log(response.data)
            })
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/offeringlist/${id}`)
            // const offeringList = offerings.filter(offer => offer.id == id)
            // console.log(offeringList);
            setOfferings([])
            loadingData()
            console.log('Daten gelöscht');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NeueVorlage />
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
                            title={e.title}
                            text={e.text}
                            id={e.id}
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