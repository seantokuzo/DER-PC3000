import React from "react"
import { nanoid } from 'nanoid'

export default function HatsMenu(props) {

    const hatsSamples = props.sounds[2].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'hats')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {hatsSamples}
        </div>
    )
}