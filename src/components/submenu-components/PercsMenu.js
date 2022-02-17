import React from "react"
import { nanoid } from 'nanoid'

export default function PercsMenu(props) {

    const percsSamples = props.sounds[4].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'percs')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {percsSamples}
        </div>
    )
}