import React from "react"

export default function Pad(props) {

    return (
        <div
            className={props.code === props.currentPad.code ? "drum-pad active" : "drum-pad"}
            id={`${props.code}`}
            onClick={(event) => props.triggerSample(event)}
        >
            <h2 className="pad-letter">{props.letter}</h2>
            {/* <p className="pad-sample-name">{props.sampleName}</p> */}
            <audio
                className="clip"
                id={`${props.letter}`}
                src={props.source}
                preload="metadata"
            />
        </div>
    )
}