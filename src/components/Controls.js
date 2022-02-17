import React from "react"

export default function Controls(props) {
    const volumeSlider = (
        <div className='volume-slider'>
            <input
                max='1'
                min='0'
                // onChange={this.adjustVolume}
                step='0.01'
                type='range'
                placeholder="25%"
                // value='50%'
                id="volume"
            />
        </div>
    )
    const hiPassSlider = (
        <div className='volume-slider'>
            <input
                max='1'
                min='0'
                // onChange={this.adjustVolume}
                step='0.01'
                type='range'
                placeholder="25%"
                // value='50%'
                id="volume"
            />
        </div>
    )
    const lowPassSlider = (
        <div className='volume-slider'>
            <input
                max='1'
                min='0'
                // onChange={this.adjustVolume}
                step='0.01'
                type='range'
                placeholder="25%"
                // value='50%'
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
                {volumeSlider}
                {hiPassSlider}
                {lowPassSlider}
            </div>
            <div
                id="current-pad-display"
                onClick={props.showSoundsMenu}
            >
                <h6 id="display">{props.currentPad.sample}</h6>
            </div>
        </div>
    )
}