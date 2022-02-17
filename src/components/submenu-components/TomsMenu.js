import React from "react"
import { nanoid } from 'nanoid'

export default function TomsMenu(props) {

    const tomsSamples = props.sounds[6].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'toms')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {tomsSamples}
        </div>
    )
}