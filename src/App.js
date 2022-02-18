import React, { useEffect, useState } from "react"
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import MainMenu from './components/MainMenu'
import ClapsMenu from "./components/submenu-components/ClapsMenu"
import FunMenu from './components/submenu-components/FunMenu'
import HatsMenu from "./components/submenu-components/HatsMenu"
import KicksMenu from "./components/submenu-components/KicksMenu"
import PercsMenu from "./components/submenu-components/PercsMenu"
import SnaresMenu from "./components/submenu-components/SnaresMenu"
import TomsMenu from "./components/submenu-components/TomsMenu"
import TracksMenu from "./components/submenu-components/TracksMenu"
import VfxMenu from "./components/submenu-components/VfxMenu"
import sounds from './data/sounds.js'
import defaultBank from './data/banks.js'
// import stupidBank from "./data/stupid-bank.js"

function App() {
  // const defaultBank = [
  //   {
  //     key: 'Q',
  //     code: 'KeyQ',
  //     type: sounds[4].type,
  //     name: sounds[4].samples[0].name,
  //     src: sounds[4].samples[0].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'W',
  //     code: 'KeyW',
  //     type: sounds[4].type,
  //     name: sounds[4].samples[1].name,
  //     src: sounds[4].samples[1].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'E',
  //     code: 'KeyE',
  //     type: sounds[1].type,
  //     name: sounds[1].samples[1].name,
  //     src: sounds[1].samples[1].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'A',
  //     code: 'KeyA',
  //     type: sounds[0].type,
  //     name: sounds[0].samples[0].name,
  //     src: sounds[0].samples[0].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'S',
  //     code: 'KeyS',
  //     type: sounds[0].type,
  //     name: sounds[0].samples[2].name,
  //     src: sounds[0].samples[2].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'D',
  //     code: 'KeyD',
  //     type: sounds[2].type,
  //     name: sounds[2].samples[2].name,
  //     src: sounds[2].samples[2].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'Z',
  //     code: 'KeyZ',
  //     type: sounds[5].type,
  //     name: sounds[5].samples[4].name,
  //     src: sounds[5].samples[4].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'X',
  //     code: 'KeyX',
  //     type: sounds[7].type,
  //     name: sounds[7].samples[3].name,
  //     src: sounds[7].samples[3].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   },
  //   {
  //     key: 'C',
  //     code: 'KeyC',
  //     type: sounds[3].type,
  //     name: sounds[3].samples[2].name,
  //     src: sounds[3].samples[2].src,
  //     volume: 0.5,
  //     hiPass: 0,
  //     loPass: 1
  //   }
  // ]
  const [playable, setPlayable] = useState(true)
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
  const [currentPad, setCurrentPad] = useState({
    key: '',
    code: '',
    type: '',
    name: '',
    src: '',
    volume: 0.5,
    hiPass: 0,
    loPass: 1
  })
  const [myPads, setMyPads] = useState(defaultBank)

  //IF THERE ARE PADS STORED IN LOCAL STORAGE GET THEM AND SET MYPADS TO THEM
  useEffect(() => {
    const localPads = JSON.parse(localStorage.getItem('myPads'))
    console.log(localPads)
    console.log('retrieving local pads')
    if (localPads[0].key) {
      setMyPads(localPads)
    } else return
  }, [])

  //UPDATE LOCALLY STORED MYPADS OBJECT ANYTIME UPDATED IN APP
  useEffect(() => {
    localStorage.setItem('myPads', JSON.stringify(myPads))
    console.log("Am I setting local or WHAT?")
    const checker = localStorage.getItem('myPads')
    console.log(checker)
  }, [myPads])

  //HANDLE KEYBOARD TRIGGER
  useEffect(() => {
    function handleKeys(e) {
      if ((myPads.some(obj => obj.code === e.code)) && playable) {
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
  }, [currentPad])

  //HANDLE MOUSE CLICK TRIGGER
  function triggerSample(e) {
    if (playable) {
      setCurrentPad(...myPads.filter(obj => obj.key === e.target.innerText.toUpperCase()))
      const mySample = document.getElementById(e.target.innerText.toUpperCase())
      mySample.currentTime = 0;
      mySample.play()
        .then(() => console.log('x'))
        .catch(() => console.log("y"))
    }
  }

  function exitMainMenu() {
    setMainMenu(false)
    setPlayable(true)
  }

  function showMainMenu() {
    if (currentPad.key) {
      setMainMenu(true)
      setPlayable(false)
    } else return
  }

  function handleTypeClick(e) {
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
      setSnaresMenu(true)
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
    setSnaresMenu(false)
    setTomsMenu(false)
    setTracksMenu(false)
    setVfxMenu(false)
    setPlayable(true)
    //GATHER CLICKED ON SAMPLE OBJECT FROM SOUNDS ARRAY
    let mySample = sounds
      .filter(obj => obj.type === str)[0].samples
      .filter(obj => obj.name === e.target.innerText)[0]
    let sliceIndex = myPads.map((pad, ind) => {
      if (pad.key === currentPad.key) {
        return ind
      } else return false
    }).filter(item => item !== false)[0]
    //UPDATE CURRENT PAD'S TYPE, NAME, AND SRC FROM SELECTED SAMPLE OBJECT
    setCurrentPad(prevCurrentPad => ({
      ...prevCurrentPad,
      ...mySample
    }))
    //UPDATE MYPADS WITH NEW SOUNDS AT CURRENTLY SELECTED PAD
    setMyPads(prevMyPads => ([
      ...prevMyPads.slice(0, sliceIndex),
      {
        ...currentPad,
        ...mySample
      },
      ...(prevMyPads.slice(sliceIndex + 1))
    ]))
  }

  function subMenuBack() {
    setMainMenu(true)
    setClapsMenu(false)
    setFunMenu(false)
    setHatsMenu(false)
    setKicksMenu(false)
    setPercsMenu(false)
    setSnaresMenu(false)
    setTomsMenu(false)
    setTracksMenu(false)
    setVfxMenu(false)
  }

  function subMenuExit() {
    setClapsMenu(false)
    setFunMenu(false)
    setHatsMenu(false)
    setKicksMenu(false)
    setPercsMenu(false)
    setSnaresMenu(false)
    setTomsMenu(false)
    setTracksMenu(false)
    setVfxMenu(false)
    setPlayable(true)
  }

  function adjustVolume(e) {
    if (currentPad.code) {
      let sliceIndex = myPads.map((pad, ind) => {
        if (pad.key === currentPad.key) {
          return ind
        } else return false
      }).filter(item => item !== false)[0]
      setCurrentPad(prevCurrentPad => ({
        ...prevCurrentPad,
        volume: e.target.value
      }))
      setMyPads(prevMyPads => ([
        ...prevMyPads.slice(0, sliceIndex),
        {
          ...currentPad,
          volume: e.target.value
        },
        ...(prevMyPads.slice(sliceIndex + 1))
      ]))
      const currentSound = document.getElementById(currentPad.key)
      currentSound.volume = e.target.value
    }
  }

  function resetVolume() {
    if (currentPad.code) {
      let sliceIndex = myPads.map((pad, ind) => {
        if (pad.key === currentPad.key) {
          return ind
        } else return false
      }).filter(item => item !== false)[0]
      setCurrentPad(prevCurrentPad => ({
        ...prevCurrentPad,
        volume: 0.5
      }))
      setMyPads(prevMyPads => ([
        ...prevMyPads.slice(0, sliceIndex),
        {
          ...currentPad,
          volume: 0.5
        },
        ...(prevMyPads.slice(sliceIndex + 1))
      ]))
      const currentSound = document.getElementById(currentPad.key)
      currentSound.volume = 0.5
    }
  }

  function adjustHiPass(e) {
    if (currentPad.code) {
      let sliceIndex = myPads.map((pad, ind) => {
        if (pad.key === currentPad.key) {
          return ind
        } else return false
      }).filter(item => item !== false)[0]
      setCurrentPad(prevCurrentPad => ({
        ...prevCurrentPad,
        hiPass: e.target.value
      }))
      setMyPads(prevMyPads => ([
        ...prevMyPads.slice(0, sliceIndex),
        {
          ...currentPad,
          hiPass: e.target.value
        },
        ...(prevMyPads.slice(sliceIndex + 1))
      ]))
      // const currentSound = document.getElementById(currentPad.key)
      // ADJUST THE ACTUAL FILTER ON THE SOUNDS HERE
    }
  }

  function resetHiPass() {
    if (currentPad.code) {
      let sliceIndex = myPads.map((pad, ind) => {
        if (pad.key === currentPad.key) {
          return ind
        } else return false
      }).filter(item => item !== false)[0]
      setCurrentPad(prevCurrentPad => ({
        ...prevCurrentPad,
        hiPass: 0
      }))
      setMyPads(prevMyPads => ([
        ...prevMyPads.slice(0, sliceIndex),
        {
          ...currentPad,
          hiPass: 0
        },
        ...(prevMyPads.slice(sliceIndex + 1))
      ]))
      // const currentSound = document.getElementById(currentPad.key)
      // RESET ACTUAL FILTER ON SOUND HERE
    }
  }

  function adjustLoPass(e) {
    if (currentPad.code) {
      let sliceIndex = myPads.map((pad, ind) => {
        if (pad.key === currentPad.key) {
          return ind
        } else return false
      }).filter(item => item !== false)[0]
      setCurrentPad(prevCurrentPad => ({
        ...prevCurrentPad,
        loPass: e.target.value
      }))
      setMyPads(prevMyPads => ([
        ...prevMyPads.slice(0, sliceIndex),
        {
          ...currentPad,
          loPass: e.target.value
        },
        ...(prevMyPads.slice(sliceIndex + 1))
      ]))
      // const currentSound = document.getElementById(currentPad.key)
      // ADJUST THE ACTUAL FILTER ON THE SOUNDS HERE
    }
  }

  function resetLoPass() {
    if (currentPad.code) {
      let sliceIndex = myPads.map((pad, ind) => {
        if (pad.key === currentPad.key) {
          return ind
        } else return false
      }).filter(item => item !== false)[0]
      setCurrentPad(prevCurrentPad => ({
        ...prevCurrentPad,
        loPass: 1
      }))
      setMyPads(prevMyPads => ([
        ...prevMyPads.slice(0, sliceIndex),
        {
          ...currentPad,
          loPass: 1
        },
        ...(prevMyPads.slice(sliceIndex + 1))
      ]))
      // const currentSound = document.getElementById(currentPad.key)
      // RESET ACTUAL FILTER ON SOUND HERE
    }
  }

  // console.log(myPads)
  // console.log(currentPad)
  // console.log(`claps: ${clapsMenu}`)
  // console.log(`fun: ${funMenu}`)
  // console.log(`hats: ${hatsMenu}`)
  // console.log(`kicks: ${kicksMenu}`)
  // console.log(`percs: ${percsMenu}`)
  // console.log(`snares: ${snaresMenu}`)
  // console.log(`toms: ${tomsMenu}`)
  // console.log(`tracks: ${tracksMenu}`)
  // console.log(`vfx: ${vfxMenu}`)

  const menusDisplay = (
    <div>
      {mainMenu && <MainMenu
        sounds={sounds}
        exitMainMenu={exitMainMenu}
        handleTypeClick={handleTypeClick}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {clapsMenu && <ClapsMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {funMenu && <FunMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {hatsMenu && <HatsMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {kicksMenu && <KicksMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {percsMenu && <PercsMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {snaresMenu && <SnaresMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }

      {tomsMenu && <TomsMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {tracksMenu && <TracksMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
      />
      }
      {vfxMenu && <VfxMenu
        sounds={sounds}
        handleSampleSelection={handleSampleSelection}
        subMenuBack={subMenuBack}
        subMenuExit={subMenuExit}
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
          <img
            id="crackerjap"
            src="https://docs.google.com/uc?export=download&id=1KvBVSFp49yPd3qJcWKLBFad3M0N2rs2h"
            alt="crackerjaps logo"
          />
        </div>
        <DrumPads
          myPads={myPads}
          triggerSample={triggerSample}
          currentPad={currentPad}
        />
        <Controls
          currentPad={currentPad}
          showMainMenu={showMainMenu}
          adjustVolume={adjustVolume}
          resetVolume={resetVolume}
          adjustHiPass={adjustHiPass}
          resetHiPass={resetHiPass}
          adjustLoPass={adjustLoPass}
          resetLoPass={resetLoPass}
        />
      </div>
    </main>
  )
}

export default App