import React from "react"
import { nanoid } from "nanoid"

export default function MainMenu(props) {
    const sampleTypes = (
        <div className="sounds-menu-page">
            <div className="sounds-menu-div">
                {
                    props.sounds.map(obj =>
                    (
                        <div
                            key={nanoid()}
                            className="sounds-menu-type"
                            onClick={(event) => props.handleTypeClick(event)}
                        >
                            <h3>{obj.type}</h3>
                        </div>
                    ))
                }
            </div>
            <button type="button" id="exit-sounds-menu" onClick={props.exitMainMenu}>Exit</button>
        </div>
    )
    return (
        <div>
            {sampleTypes}
        </div>
    )
}