import React, { useEffect } from "react"

export default function Controls(props) {

    const volumeSlider = (
        <div className='volume-slider'>
            <input
                max='1'
                min='0'
                onChange={(event) => props.adjustVolume(event)}
                onDoubleClick={(event) => props.resetVolume(event)}
                step='0.01'
                type='range'
                placeholder="25%"
                value={props.currentPad.volume}
                id="volume"
                />
        </div>
    )
    const hiPassSlider = (
        <div className='volume-slider'>
            <input
                max='1'
                min='0'
                onChange={(event) => props.adjustHiPass(event)}
                onDoubleClick={props.resetHiPass}
                step='0.01'
                type='range'
                placeholder="25%"
                value={props.currentPad.hiPass}
                id="volume"
                />
        </div>
    )
    const lowPassSlider = (
        <div className='volume-slider'>
            <input
                max='1'
                min='0'
                onChange={(event) => props.adjustLoPass(event)}
                onDoubleClick={props.resetLoPass}
                step='0.01'
                type='range'
                placeholder="25%"
                value='readOnly'
                value={props.currentPad.loPass}
                id="volume"
            />
        </div>
    )

    // console.log(props.currentPad)
    return (
        <div className="controls-div">
            <div className="controls-title-div">
                <h2 className="controls-title">TW</h2>
                <h2 className="backwards">KA3</h2>
                <h2 className="controls-title">3</h2>
                <h2 className="backwards">R</h2>
            </div>
            <div id='sliders-div'>
                <div className="slider-div">
                    {volumeSlider}
                    <p className="slider-value">{Math.ceil(props.currentPad.volume * 100)}</p>
                    <p className="slider-label">VOL</p>
                </div>
                <div className="slider-div">
                {hiPassSlider}
                    <p className="slider-value">{Math.ceil(props.currentPad.hiPass * 100)}</p>
                    <p className="slider-label">HiPass</p>
                </div>
                <div className="slider-div">
                {lowPassSlider}
                    <p className="slider-value">{Math.ceil(props.currentPad.loPass * 100)}</p>
                    <p className="slider-label">LoPass</p>
                </div>
            </div>
            <div
                id="current-pad-display"
                onClick={props.showMainMenu}
            >
                <h6 id="display">{props.currentPad.name}</h6>
            </div>
        </div >
    )
}