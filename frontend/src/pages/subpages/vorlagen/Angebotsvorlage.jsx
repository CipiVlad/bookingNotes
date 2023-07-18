import React from 'react'
import AngebotsvorlagenListe from './AngebotsvorlagenListe'
import './Angebotsvorlage.css'
import data from './AngebotsvorlagenListe.json'

const Angebotsvorlage = () => {
    return (
        <div className="container">
            <div>
                <h2>Vorlagentext</h2>
                {
                    data.offeringlist.map((e, index) => (
                        <article key={index}>
                            <p>{e.text}</p>
                        </article>
                    ))
                }
            </div>
            <AngebotsvorlagenListe />
        </div>
    )
}

export default Angebotsvorlage