import React from 'react'
import VorlagenListe from '../../../components/vorlagen/VorlagenListe'
import './Angebotsvorlage.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Angebotsvorlage = () => {
    const [offerings, setOfferings] = useState([])

    useEffect(() => {
        fetchList()
    }, [])

    const fetchList = async () => {
        await axios.get('http://localhost:3001/offeringlist')
            .then((response) => {
                setOfferings(response.data)
                // console.log(response.data)
            })
    }

    return (
        <>
            {
                offerings.map((e, index) => (
                    <div className="container" key={index}>
                        <div className='text_left'>
                            <h2>Vorlagentext</h2>
                            <article>
                                <p>{e.text}</p>
                            </article>
                        </div>

                        <VorlagenListe
                            key={index}
                            title={e.title}
                            text={e.text}
                            id={e.id}
                            offerings={offerings}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Angebotsvorlage