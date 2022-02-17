import React from "react"
import { nanoid } from 'nanoid'

export default function TracksMenu(props) {

    const tracksSamples = props.sounds[7].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'tracks')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {tracksSamples}
        </div>
    )
}