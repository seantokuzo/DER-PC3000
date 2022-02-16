import React from "react"
let num = 0


export default function Pad(props) {

    return (
        <div className="drum-pad" id={`${props.sampleName}`} onClick={(event) => props.triggerSample(event)}>
            <h2 className="pad-letter">{props.letter}</h2>
            <p className="pad-sample-name">{props.sampleName}</p>
            <audio
                className="sample"
                id={`sample-${props.code}`}
                src={props.source}
            />
        </div>
    )
}
