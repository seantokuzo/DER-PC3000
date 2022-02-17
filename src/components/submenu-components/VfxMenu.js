import React from "react"
import { nanoid } from 'nanoid'

export default function VfxMenu(props) {

    const vfxSamples = props.sounds[8].samples.map(obj => (
        <div
            key={nanoid()}
            className="sample-selector-div"
            onClick={(event) => props.handleSampleSelection(event, 'vfx')}
        >
            <h3 className="sample-selector">{obj.name}</h3>
        </div>
    ))

    return (
        <div className="samples-menu-page">
            {vfxSamples}
        </div>
    )
}