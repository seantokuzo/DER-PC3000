import React, { useEffect, useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import MainMenu from './components/MainMenu'
import ClapsMenu from "./components/submenu-components/ClapsMenu"
import sounds from './data/sounds.js'
import crackerjap from "./images/thecrackerjaps-anim-nobck.png"
// import stupidBank from "./data/stupid-bank.js"

function App() {
  const [mainMenu, setMainMenu] = useState(false)
  const [clapsMenu, setClapsMenu] = useState(true)
  const [funMenu, setFunMenu] = useState(false)
  const [hatsMenu, setHatsMenu] = useState(false)
  const [kicksMenu, setKicksMenu] = useState(false)
  const [percsMenu, setPercsMenu] = useState(false)
  const [snaresMenu, setSnaresMenu] = useState(false)
  const [tomsMenu, setTomsMenu] = useState(false)
  const [tracksMenu, setTracksMenu] = useState(false)
  const [vfxMenu, setVfxMenu] = useState(false)
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

  //HANDLE KEYBOARD TRIGGER
  useEffect(() => {
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

  //HANDLE MOUSE CLICK TRIGGER
  function triggerSample(e) {
    setCurrentPad(...myPads.filter(obj => obj.key === e.target.innerText.toUpperCase()))
    console.log(currentPad)
    const mySample = document.getElementById(e.target.innerText.toUpperCase())
    mySample.currentTime = 0;
    mySample.play()
      .then(() => console.log('x'))
      .catch(() => console.log("y"))
  }

  function exitMainMenu() {
    setMainMenu(false)
  }

  function showMainMenu() {
    if (currentPad.key) {
      setMainMenu(true)
    } else return
  }

  function handleTypeClick(e) {
    console.log("Show that submenu")
    setMainMenu(false)
    if (e.target.innerText === 'claps') {
      setClapsMenu(true)
    } else if (e.target.innerText === 'fun') {
      setFunMenu(true)
    } else if (e.target.innerText === 'hats') {
      setHatsMenu(true)
    } else if (e.target.innerText === 'kicks') {
      setKicksMenu(true)
    } else if (e.target.innerText === 'percs') {
      setPercsMenu(true)
    } else if (e.target.innerText === 'snares') {
      setKicksMenu(true)
    } else if (e.target.innerText === 'toms') {
      setTomsMenu(true)
    } else if (e.target.innerText === 'tracks') {
      setTracksMenu(true)
    } else if (e.target.innerText === 'vfx') {
      setVfxMenu(true)
    } else return
  }

  console.log(`claps: ${clapsMenu}`)
  console.log(`fun: ${funMenu}`)
  console.log(`hats: ${hatsMenu}`)
  console.log(`kicks: ${kicksMenu}`)
  console.log(`percs: ${percsMenu}`)
  console.log(`snares: ${snaresMenu}`)
  console.log(`toms: ${tomsMenu}`)
  console.log(`tracks: ${tracksMenu}`)
  console.log(`vfx: ${vfxMenu}`)

  return (
    <main>
      {mainMenu && <MainMenu
          sounds={sounds}
          exitMainMenu={exitMainMenu}
          handleTypeClick={handleTypeClick}
        />
      }
      {clapsMenu && <ClapsMenu
        sounds={sounds}
      />
      }
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
          showMainMenu={showMainMenu}
        />
      </div>
    </main>
  )
}

export default App