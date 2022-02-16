import React, { useEffect } from "react"
import Pad from "./Pad"
import { nanoid } from 'nanoid'

export default function DrumPads(props) {

    useEffect(() => {
        document.addEventListener('keydown', handleKeys)
    }, [])

    function handleKeys(e) {
        console.log(e)
        const triggerPad = (code) => {
            const pad = document.getElementById(`sample-${code}`)
            console.log("flash")
        }
        if (props.myPads.some(obj => obj.code === e.code)) {
            const sample = document.getElementById(`sample-${e.code}`)
            sample.currentTime = 0
            sample.play()
            triggerPad(e.code)
        }
    }

    function triggerSample(e) {
        console.log("hear me?")
        console.log(`sample-${e.target.innerText}`)
        const sample = document.getElementById(`sample-Key${e.target.innerText.toUpperCase()}`)
        sample.currentTime = 0
        sample.play()
    }

    const padsLayout = props.myPads.map((obj, ind) => (
        <Pad
            key={nanoid()}
            padNumber={ind + 1}
            source={obj.src}
            letter={obj.key}
            code={obj.code}
            sampleName={obj.sample}
            triggerSample={triggerSample}
        />
    ))

    return (
        <div className="drum-pads-div">
            {padsLayout}
        </div>
    )
}