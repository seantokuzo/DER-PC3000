import React from "react"


export default function Pad(props) {

    return (
        <div className="pad" id={`pad-${props.padNumber}`}>
            <h2>{props.letter}</h2>
            <p className="pad-sample-name">{props.sampleName}</p>
        </div>
    )
}
