import React from "react"

export default function Controls() {

    return (
        <div className="controls-div">
            <h2>Gimme Space</h2>
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
        </div>
    )
}
