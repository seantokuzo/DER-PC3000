import React from "react"
import { nanoid } from "nanoid"

export default function MainMenu(props) {
    const sampleTypes = (
        <div className="main-menu-page">
            <div className="main-menu-div">
                {
                    props.sounds.map(obj =>
                    (
                        <div
                            key={nanoid()}
                            className="main-menu-type"
                            onClick={(event) => props.handleTypeClick(event)}
                        >
                            <h3>{obj.type}</h3>
                        </div>
                    ))
                }
            </div>
            <button type="button" id="exit-main-menu" onClick={props.exitMainMenu}>Exit</button>
        </div>
    )
    return (
        <div>
            {sampleTypes}
        </div>
    )
}