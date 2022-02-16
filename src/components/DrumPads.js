import React, { useEffect } from "react"
import Pad from "./Pad"
import { nanoid } from 'nanoid'

export default function DrumPads(props) {

    useEffect(() => {
        function handleKeys(e) {
            if (props.myPads.some(obj => obj.code === e.code)) {
                props.setCurrentPad(prevPad => ({
                    ...prevPad,
                    ...props.myPads.filter(obj => obj.code === e.code)
                }))
                const sample = document.getElementById(`sample-${e.code}`)
                sample.currentTime = 0
                sample.play()
            } else return
        }

        document.addEventListener('keydown', handleKeys)

        return function () {
            console.log("Clean up after YO SELF")
            document.removeEventListener('keydown', handleKeys)
        }
    }, [])


    function triggerSample(e) {
        props.setCurrentPad(prevPad => ({
            ...prevPad,
            ...props.myPads.filter(obj => obj.code === e.target.innerText.toUpperCase())
        }))
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