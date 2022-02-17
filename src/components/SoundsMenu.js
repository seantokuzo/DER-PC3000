import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function SoundsMenu(props) {
    const [subMenu, setSubMenu] = useState({
        'claps': false,
        'fun': false,
        'hats': false,
        'kicks': false,
        'percs': false,
        'snares': false,
        'toms': false,
        'tracks': false,
        'vfx': false
    })
    const sampleTypes = props.sounds.map(obj =>
    (
        <div
            key={nanoid()}
            className="sounds-menu-type"
            onClick={() => handleTypeClick(obj.type)}
        >
            <h3>{obj.type}</h3>
        </div>
    ))

    const clapsMenu = (
        props.sounds[0].samples.map(samp => (
            <div
                className="sample-sub-div"
                key={nanoid()}
            >
                <h3 className="sample-sub">{samp.name}</h3>
            </div>
        ))
    )

    function handleTypeClick(key) {
        setSubMenu(prevSub => ({
            ...prevSub,
            key: true
        }))
    }

    return (
        <div className="sounds-menu-page">
            <div className="sounds-menu-div">
                {sampleTypes}
            </div>
            <button type="button" id="exit-sounds-menu" onClick={props.exitSoundsMenu}>Exit</button>
        </div>
    )
}