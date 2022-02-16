import React, { useEffect, useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import sounds from "./data/sounds.js"
import crackerjap from "./images/thecrackerjaps-anim-nobck.png"

function App() {
  const [currentPad, setCurrentPad] = useState({})
  // console.log(currentPad)

  const [myPads, setmyPads] = useState([
    {
      key: 'Q',
      code: 'KeyQ',
      type: sounds[4].type,
      sample: sounds[4].samples[0].name,
      src: sounds[4].samples[0].src
    },
    {
      key: 'W',
      code: 'KeyW',
      type: sounds[8].type,
      sample: sounds[8].samples[0].name,
      src: sounds[8].samples[0].src
    },
    {
      key: 'E',
      code: 'KeyE',
      type: sounds[1].type,
      sample: sounds[1].samples[0].name,
      src: sounds[1].samples[0].src
    },
    {
      key: 'A',
      code: 'KeyA',
      type: sounds[0].type,
      sample: sounds[0].samples[0].name,
      src: sounds[0].samples[0].src
    },
    {
      key: 'S',
      code: 'KeyS',
      type: sounds[2].type,
      sample: sounds[2].samples[0].name,
      src: sounds[2].samples[0].src
    },
    {
      key: 'D',
      code: 'KeyD',
      type: sounds[2].type,
      sample: sounds[2].samples[1].name,
      src: sounds[2].samples[1].src
    },
    {
      key: 'Z',
      code: 'KeyZ',
      type: sounds[5].type,
      sample: sounds[5].samples[3].name,
      src: sounds[5].samples[3].src
    },
    {
      key: 'X',
      code: 'KeyX',
      type: sounds[5].type,
      sample: sounds[5].samples[0].name,
      src: sounds[5].samples[0].src
    },
    {
      key: 'C',
      code: 'KeyC',
      type: sounds[3].type,
      sample: sounds[3].samples[1].name,
      src: sounds[3].samples[1].src
    }
  ])

  return (
    <main>
      <div id="drum-machine">
        <div className="drum-machine-top" id="display">
          <h2 id="dm-name">DER-PC3000</h2>
          <img id="crackerjap" src={crackerjap} />
        </div>
        <DrumPads myPads={myPads} setCurrentPad={setCurrentPad} />
        <Controls currentPad={currentPad} myPads={myPads} />
      </div>
    </main>
  )
}

export default App