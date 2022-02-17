import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function SoundsMenu(props) {

    const sampleTypes = (
        <div className="sounds-menu-main">
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
            <button type="button" id="exit-sounds-menu" onClick={props.exitSoundsMenu}>Exit</button>
        </div>
    )

    let myIndex = props.subMenu.map((obj, ind) => {
        if (obj.on) {
            return ind
        } else return false
    }).filter(item => item !== false)[0]
    console.log(myIndex)
    const subMenuDisplay = (
        myIndex
            ? (props.sounds[myIndex].samples.map(samp => (
                <div
                    className="sample-sub-div"
                    key={nanoid()}
                >
                    <h3 className="sample-sub">{samp.name}</h3>
                </div>
            )))
            : (<div></div>)
    )
    console.log(props.showSubMenu)
    console.log()
    return (
        <div className="menu-container">
            <div className="sounds-menu-page">
                {props.soundsMenu && sampleTypes}
            </div>
            {props.showSubMenu && subMenuDisplay}
        </div>
    )
}