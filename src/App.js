import React, { useEffect, useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import SoundsMenu from './components/SoundsMenu'
import sounds from './data/sounds.js'
import crackerjap from "./images/thecrackerjaps-anim-nobck.png"
// import stupidBank from "./data/stupid-bank.js"

function App() {
  const [soundsMenu, setSoundsMenu] = useState(true)
  console.log(showSoundsMenu)
  const [currentPad, setCurrentPad] = useState({})
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
      type: sounds[4].type,
      sample: sounds[4].samples[1].name,
      src: sounds[4].samples[1].src
    },
    {
      key: 'E',
      code: 'KeyE',
      type: sounds[1].type,
      sample: sounds[1].samples[1].name,
      src: sounds[1].samples[1].src
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
      type: sounds[0].type,
      sample: sounds[0].samples[2].name,
      src: sounds[0].samples[2].src
    },
    {
      key: 'D',
      code: 'KeyD',
      type: sounds[2].type,
      sample: sounds[2].samples[2].name,
      src: sounds[2].samples[2].src
    },
    {
      key: 'Z',
      code: 'KeyZ',
      type: sounds[5].type,
      sample: sounds[5].samples[4].name,
      src: sounds[5].samples[4].src
    },
    {
      key: 'X',
      code: 'KeyX',
      type: sounds[7].type,
      sample: sounds[7].samples[3].name,
      src: sounds[7].samples[3].src
    },
    {
      key: 'C',
      code: 'KeyC',
      type: sounds[3].type,
      sample: sounds[3].samples[2].name,
      src: sounds[3].samples[2].src
    }
  ])


  React.useEffect(() => {
    function handleKeys(e) {
      if (myPads.some(obj => obj.code === e.code)) {
        setCurrentPad(myPads.filter(obj => obj.code === e.code)[0])
        console.log(e.code)
        const sample = document.getElementById(e.code.slice(3))
        sample.currentTime = 0
        sample.play()
          .then(() => console.log('x'))
          .catch(() => console.log('y'))
      } else return
    }

    document.addEventListener('keydown', handleKeys)

    return function () {
      console.log("Clean up after YO SELF")
      document.removeEventListener('keydown', handleKeys)
    }
  }, [])

  function triggerSample(e) {
    setCurrentPad(...myPads.filter(obj => obj.key === e.target.innerText.toUpperCase()))
    console.log(currentPad)
    const mySample = document.getElementById(e.target.innerText.toUpperCase())
    mySample.currentTime = 0;
    mySample.play()
      .then(() => console.log('x'))
      .catch(() => console.log("y"))
  }

  function updatePadSample() {
    console.log('please update')
  }

  function exitSoundsMenu() {
    setSoundsMenu(false)
  }

  function showSoundsMenu() {
    if (currentPad.key) {
      setSoundsMenu(true)
    } else return
  }

  return (
    <main>
      {soundsMenu && <SoundsMenu sounds={sounds} updatePadSample={updatePadSample} exitSoundsMenu={exitSoundsMenu} />}
      <div id="drum-machine">
        <div className="drum-machine-top">
          <h2 id="dm-name">DER-PC3000</h2>
          <img id="crackerjap" src="https://docs.google.com/uc?export=download&id=1KvBVSFp49yPd3qJcWKLBFad3M0N2rs2h" />
        </div>
        <DrumPads
          myPads={myPads}
          triggerSample={triggerSample}
          currentPad={currentPad}
        />
        <Controls
          currentPad={currentPad}
          myPads={myPads}
          showSoundsMenu={showSoundsMenu}
        />
      </div>
    </main>
  )
}

export default App