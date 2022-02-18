import React from "react"
import { nanoid } from 'nanoid'

export default function TomsMenu(props) {

    const tomsSamples = (
        <div className="samples-menu-page">
            {props.sounds[6].samples.map(obj => (
                <div
                    key={nanoid()}
                    className="sample-selector-div"
                    onClick={(event) => props.handleSampleSelection(event, 'toms')}
                >
                    <h3 className="sample-selector">{obj.name}</h3>
                </div>
            ))}
        </div>
    )

    return (
        <div className="samples-menu-container">
            {tomsSamples}
            <div className="submenu-buttons-div">
                <button
                    type="button"
                    className="submenu-button"
                    id="submenu-back"
                    onClick={props.subMenuBack}
                >
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <button
                    type="button"
                    className="submenu-button"
                    id="submenu-exit"
                    onClick={props.subMenuExit}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    )
}