import React, { useEffect } from "react"
import Pad from "./Pad"
import { nanoid } from 'nanoid'

export default function DrumPads(props) {

    const padsLayout = props.myPads.map((obj, ind) => (
        <Pad
            key={obj.code}
            code={obj.code}
            currentPad={props.currentPad}
            padNumber={ind + 1}
            source={obj.src}
            letter={obj.key}
            sampleName={obj.sample}
            triggerSample={props.triggerSample}
        />
    ))

    return (
        <div className="drum-pads-div">
            {padsLayout}
        </div>
    )
}