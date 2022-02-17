import React, { useEffect, useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import MainMenu from './components/MainMenu'
import ClapsMenu from "./components/submenu-components/ClapsMenu"
import FunMenu from './components/submenu-components/FunMenu'
import sounds from './data/sounds.js'
import crackerjap from "./images/thecrackerjaps-anim-nobck.png"
// import stupidBank from "./data/stupid-bank.js"

function App() {
  const [mainMenu, setMainMenu] = useState(false)
  const [clapsMenu, setClapsMenu] = useState(false)
  const [funMenu, setFunMenu] = useState(false)
  const [hatsMenu, setHatsMenu] = useState(false)
  const [kicksMenu, setKicksMenu] = useState(false)
  const [percsMenu, setPercsMenu] = useState(false)
  const [snaresMenu, setSnaresMenu] = useState(false)
  const [tomsMenu, setTomsMenu] = useState(false)
  const [tracksMenu, setTracksMenu] = useState(false)
  const [vfxMenu, setVfxMenu] = useState(false)
  const [currentPad, setCurrentPad] = useState({})
  const [myPads, setMyPads] = useState([
    {
      key: 'Q',
      code: 'KeyQ',
      type: sounds[4].type,
      name: sounds[4].samples[0].name,
      src: sounds[4].samples[0].src
    },
    {
      key: 'W',
      code: 'KeyW',
      type: sounds[4].type,
      name: sounds[4].samples[1].name,
      src: sounds[4].samples[1].src
    },
    {
      key: 'E',
      code: 'KeyE',
      type: sounds[1].type,
      name: sounds[1].samples[1].name,
      src: sounds[1].samples[1].src
    },
    {
      key: 'A',
      code: 'KeyA',
      type: sounds[0].type,
      name: sounds[0].samples[0].name,
      src: sounds[0].samples[0].src
    },
    {
      key: 'S',
      code: 'KeyS',
      type: sounds[0].type,
      name: sounds[0].samples[2].name,
      src: sounds[0].samples[2].src
    },
    {
      key: 'D',
      code: 'KeyD',
      type: sounds[2].type,
      name: sounds[2].samples[2].name,
      src: sounds[2].samples[2].src
    },
    {
      key: 'Z',
      code: 'KeyZ',
      type: sounds[5].type,
      name: sounds[5].samples[4].name,
      src: sounds[5].samples[4].src
    },
    {
      key: 'X',
      code: 'KeyX',
      type: sounds[7].type,
      name: sounds[7].samples[3].name,
      src: sounds[7].samples[3].src
    },
    {
      key: 'C',
      code: 'KeyC',
      type: sounds[3].type,
      name: sounds[3].samples[2].name,
      src: sounds[3].samples[2].src
    }
  ])

  //HANDLE KEYBOARD TRIGGER
  useEffect(() => {
    function handleKeys(e) {
      if (myPads.some(obj => obj.code === e.code)) {
        setCurrentPad(myPads.filter(obj => obj.code === e.code)[0])
        const sample = document.getElementById(e.code.slice(3))
        sample.currentTime = 0
        sample.play()
          .then(() => console.log('x'))
          .catch(() => console.log('y'))
      } else return
    }

    document.addEventListener('keydown', handleKeys)

    return function () {
      // console.log("Clean up after YO SELF")
      document.removeEventListener('keydown', handleKeys)
    }
  }, [])

  //HANDLE MOUSE CLICK TRIGGER
  function triggerSample(e) {
    setCurrentPad(...myPads.filter(obj => obj.key === e.target.innerText.toUpperCase()))
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
  
  function handleSampleSelection(e, str) {
    //EXIT MENUS WHEN SAMPLE SELECTED
    setClapsMenu(false)
    setFunMenu(false)
    setHatsMenu(false)
    setKicksMenu(false)
    setPercsMenu(false)
    setKicksMenu(false)
    setTomsMenu(false)
    setTracksMenu(false)
    setVfxMenu(false)
    //GATHER CLICKED ON SAMPLE OBJECT FROM SOUNDS ARRAY
    console.log(sounds.filter(obj => obj.type === str)[0].samples)
    let mySample = sounds
    .filter(obj => obj.type === str)[0].samples
    .filter(obj => obj.name === e.target.innerText)[0]
    console.log(mySample)
    let sliceIndex = myPads.map((pad, ind) => {
      if (pad.key === currentPad.key) {
        return ind
      } else return false
    }).filter(item => item !== false)[0]
    console.log(sliceIndex)
    //UPDATE CURRENT PAD'S TYPE, NAME, AND SRC FROM SELECTED SAMPLE OBJECT
    setCurrentPad(prevCurrentPad => ({
      ...prevCurrentPad,
      ...mySample
    }))
    //TRRYING TO UPDATE MYPADS TO INCLUDE UPDATED CURRENT PAD
    setMyPads(prevMyPads => ([
      ...prevMyPads.slice(0, sliceIndex),
      {
        ...currentPad,
        ...mySample
      },
      ...(prevMyPads.slice(sliceIndex + 1))
    ]))
  }
  // console.log(myPads)
  
  // console.log(`claps: ${clapsMenu}`)
  // console.log(`fun: ${funMenu}`)
  // console.log(`hats: ${hatsMenu}`)
  // console.log(`kicks: ${kicksMenu}`)
  // console.log(`percs: ${percsMenu}`)
  // console.log(`snares: ${snaresMenu}`)
  // console.log(`toms: ${tomsMenu}`)
  // console.log(`tracks: ${tracksMenu}`)
  // console.log(`vfx: ${vfxMenu}`)
  // console.log(currentPad)

  const menusDisplay = (
    <div>
      {mainMenu && <MainMenu
        sounds={sounds}
        exitMainMenu={exitMainMenu}
        handleTypeClick={handleTypeClick}
      />
      }
      {clapsMenu && <ClapsMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
      />
      }
      {funMenu && <FunMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
      />
      }
    </div>
  )

  return (
    <main>
      {menusDisplay}
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
          showMainMenu={showMainMenu}
        // myPads={myPads}
        />
      </div>
    </main>
  )
}

export default App