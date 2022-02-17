import React from "react"
import { nanoid } from 'nanoid'

export default function FunMenu(props) {

    const funSamples = props.sounds[1].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event, str) => props.handleSampleSelection(event, 'fun')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {funSamples}
        </div>
    )
}