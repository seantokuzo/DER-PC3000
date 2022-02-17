import React from "react"
import { nanoid } from 'nanoid'

export default function KicksMenu(props) {

    const kicksSamples = props.sounds[3].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'kicks')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {kicksSamples}
        </div>
    )
}