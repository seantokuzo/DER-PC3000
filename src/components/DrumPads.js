import React from "react"
import Pad from "./Pad"
import {nanoid} from 'nanoid'

export default function DrumPads(props) {
    const myRegex = /[-]/
    const currentSampleNames = props.currentBank.map(obj => obj.sample.replace(myRegex, ' '))

    const padsLayout = props.currentBank.map((obj, ind) => (
        <Pad
            key={nanoid()}
            padNumber={ind + 1}
            source={obj.src}
            letter={obj.key}
            sampleName={currentSampleNames[ind]}
        />
    ))

    return (
        <div className="drum-pads-div">
            {padsLayout}
        </div>
    )
}