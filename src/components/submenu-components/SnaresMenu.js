import React from "react"
import { nanoid } from 'nanoid'

export default function SnaresMenu(props) {

    const snaresSamples = props.sounds[5].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'snares')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {snaresSamples}
        </div>
    )
}