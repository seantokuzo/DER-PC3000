import React, { useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import sounds from "./audio/sounds.js"

function App() {
  const soundTypes = Object.keys(sounds)
  console.log(soundTypes)
  console.log(soundTypes.length)

  const [currentBank, setCurrentBank] = useState([
    {
      key: 'w',
      sample: `${sounds.percs[0]}`,
      src: `./audio/percs/${sounds.percs[0]}.wav`
    },
    {
      key: 'e',
      sample: `${sounds.vfx[0]}`,
      src: `./audio/vfx/${sounds.vfx[0]}.wav`
    },
    {
      key: 'r',
      sample: `${sounds.fun[0]}`,
      src: `./audio/fun/${sounds.fun[0]}.wav`
    },
    {
      key: 's',
      sample: `${sounds.claps[0]}`,
      src: `./audio/claps/${sounds.claps[0]}.wav`
    },
    {
      key: 'd',
      sample: `${sounds.hats[0]}`,
      src: `./audio/hats/${sounds.hats[0]}.wav`
    },
    {
      key: 'f',
      sample: `${sounds.hats[1]}`,
      src: `./audio/hats/${sounds.hats[1]}.wav`
    },
    {
      key: 'x',
      sample: `${sounds.snares[0]}`,
      src: `./audio/snares/${sounds.snares[0]}.wav`
    },
    {
      key: 'c',
      sample: `${sounds.snares[1]}`,
      src: `./audio/snares/${sounds.snares[1]}.wav`
    },
    {
      key: 'v',
      sample: `${sounds.kicks[0]}`,
      src: `./audio/kicks/${sounds.kicks[0]}.wav`
    }
  ])


  return (
    <div id="drum-machine">
      <div className="drum-machine-top">
        <h2>LamePC3000</h2>
        <i className="fa-brands fa-free-code-camp"></i>
      </div>
      <DrumPads currentBank={currentBank} />
      <Controls />
    </div>
  )
}

export default App