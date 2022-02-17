import React from "react"
import { nanoid } from 'nanoid'

export default function ClapsMenu(props) {
    
    const clapsSamples = props.sounds[0].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'claps')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {clapsSamples}
        </div>
    )
}