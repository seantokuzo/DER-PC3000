import React from "react"
import Pad from "./Pad"

export default function DrumPads(props) {

    const padsLayout = props.myPads.map((obj, ind) => (
        <Pad
            key={obj.code}
            code={obj.code}
            currentPad={props.currentPad}
            source={obj.src}
            letter={obj.key}
            triggerSample={props.triggerSample}
        />
    ))

    return (
        <div className="drum-pads-div">
            {padsLayout}
        </div>
    )
}