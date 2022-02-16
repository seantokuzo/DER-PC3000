import React, { useEffect, useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import stupidBank from "./data/stupid-bank.js"
import crackerjap from "./images/thecrackerjaps-anim-nobck.png"

function App() {
  const [currentPad, setCurrentPad] = useState({})
  console.log(currentPad)

  const [myPads, setmyPads] = useState([
    {
      key: 'Q',
      code: 'KeyQ',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[0].name,
      src: stupidBank[0].samples[0].src
    },
    {
      key: 'W',
      code: 'KeyW',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[1].name,
      src: stupidBank[0].samples[1].src
    },
    {
      key: 'E',
      code: 'KeyE',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[2].name,
      src: stupidBank[0].samples[2].src
    },
    {
      key: 'A',
      code: 'KeyA',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[3].name,
      src: stupidBank[0].samples[3].src
    },
    {
      key: 'S',
      code: 'KeyS',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[4].name,
      src: stupidBank[0].samples[4].src
    },
    {
      key: 'D',
      code: 'KeyD',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[5].name,
      src: stupidBank[0].samples[5].src
    },
    {
      key: 'Z',
      code: 'KeyZ',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[6].name,
      src: stupidBank[0].samples[6].src
    },
    {
      key: 'X',
      code: 'KeyX',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[7].name,
      src: stupidBank[0].samples[7].src
    },
    {
      key: 'C',
      code: 'KeyC',
      type: stupidBank[0].type,
      sample: stupidBank[0].samples[8].name,
      src: stupidBank[0].samples[8].src
    }
  ])

  
  function handleKeys(e) {
    if (myPads.some(obj => obj.code === e.code)) {
      setCurrentPad(myPads.filter(obj => obj.code === e.code)[0])
      // console.log(currentPad)
      const sample = document.getElementById(e.code)
      sample.currentTime = 0
      sample.play()
        .then(() => console.log('x'))
        .catch(() => console.log('y'))
    } else return
  }
  useEffect(() => {

    document.addEventListener('keydown', handleKeys)

    return function () {
      console.log("Clean up after YO SELF")
      document.removeEventListener('keydown', handleKeys)
    }
  }, [currentPad])

  function triggerSample(e) {
    setCurrentPad(...myPads.filter(obj => obj.key === e.target.innerText.toUpperCase()))
    console.log(currentPad)
    const mySample = document.getElementById(e.target.innerText.toUpperCase())
    mySample.currentTime = 0;
    mySample.play()
      .then(() => console.log('x'))
      .catch(() => console.log("y"))
  }

  return (
    <main>
      <div id="drum-machine">
        <div className="drum-machine-top">
          <h2 id="dm-name">DER-PC3000</h2>
          <img id="crackerjap" src={crackerjap} />
        </div>
        <DrumPads myPads={myPads} triggerSample={triggerSample} currentPad={currentPad} />
        <Controls currentPad={currentPad} myPads={myPads} />
      </div>
    </main>
  )
}

export default App