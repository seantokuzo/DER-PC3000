import React from "react";
import { nanoid } from "nanoid";

export default function SoundsMenu(props) {
    const sampleTypes = props.sounds.map(obj => (
        <div
            key={nanoid()}
            className="sounds-menu-type"
        >
            <h3>{obj.type}</h3>
        </div>
    ))

    return (
        <div className="sounds-menu-page">
            <div className="sounds-menu-div">
                {sampleTypes}
            </div>
                <button type="button" id="exit-sounds-menu" onClick={props.exitSoundsMenu}>Exit</button>
        </div>
    )
}