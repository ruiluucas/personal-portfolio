import {
  useTransition as Transition,
  animated,
  easings,
  useTrail,
} from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import { Route, Switch, useLocation } from 'wouter'
import Space from './components/Space'

// Imports for get handpose
import Webcam from 'react-webcam'
import { GestureEstimator } from 'fingerpose'
import { PaperGesture, ScissorsGesture, LGesture } from './assets/gestures'
import * as handpose from '@tensorflow-models/handpose'
import '@tensorflow/tfjs-backend-webgl'

// Importing pages
import Members from './pages/Members'
import AlanTuring from './pages/AlanTuring'
import TuringMachine from './pages/TuringMachine'
import VonNeumann from './pages/VonNeumann'
import BinaryToLetters from './pages/BinaryToLetters'
import Programmer from './pages/Programmer'
import ProsCons from './pages/ProsCons'
import Market from './pages/Market'
import Salary from './pages/Salary'

export default function App() {
  // Getting current location
  const [location, setLocation] = useLocation()
  const [activeApresentation, setActiveApresentation] = useState(true)
  const webCam = useRef()
  const [wait, setWait] = useState(true)
  const intervalRef = useRef(null)
  const [pageId, setPageId] = useState(0)

  const pages = [
    '/',
    '/members',
    '/alan-turing',
    '/turing-machine',
    '/von-neumann',
    '/binary-to-letters',
    '/programmer',
    '/pros-cons',
    '/market',
    '/salary',
  ]
  const members = [
    {
      name: 'Bruno',
      link: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-dark-souls-knights-of-olden-armor-on-fire-wallpaper-image_2928064.jpg',
    },
    {
      name: 'Jordan',
      link: 'https://lh3.googleusercontent.com/proxy/OVLjxRyyV8ZmgImY6rLihqhVHOrwwcRHjGy5m6smFAINfsqvgl57cXEqWvJYRXhIcJ7EdEOYbL_9kiB1VDdpsrK76aolczw-ie9A2lyEvHJb-Dlv6-Fkqt438m8JYxCLpfWXAyaHB5fRZFJkRX559aCaC3bZxVnulw',
    },
    {
      name: 'Kaue',
      link: 'https://assetsio.reedpopcdn.com/games-of-the-decade-dark-souls-is-the-cold-at-the-heart-of-everything-1574524113563.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
    },
    {
      name: 'Renan',
      link: 'https://steamuserimages-a.akamaihd.net/ugc/84848956726428708/FCC6AA1A31A604014E4A4EDD417B5CBBC8326152/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    },
    {
      name: 'Rui',
      link: 'https://assetsio.reedpopcdn.com/dark_souls_3_main_art_1.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
    },
  ]
  const transitions = Transition(location, {
    from: {
      opacity: 0,
      transform: 'translate3d(5%,0,0)',
      position: 'absolute',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      position: 'relative',
    },
    config: {
      duration: 1000,
      mass: 5,
      tension: 1000,
      friction: 100,
      easing: easings.easeOutSine,
    },
  })

  // Change pages in keyboard
  useEffect(() => {
    setPageId(pages.indexOf(location))

    document.addEventListener('keydown', ({ key }) => {
      // Set logic by pressing keys
      switch (key) {
        case '1': {
          setLocation('/')
          break
        }
        case '2': {
          setLocation('/members')
          break
        }
        case '3': {
          setLocation('/alan-turing')
          break
        }
        case '4': {
          setLocation('/turing-machine')
          break
        }
        case '5': {
          setLocation('/von-neumann')
          break
        }
        case '6': {
          setLocation('/binary-to-letters')
          break
        }
        case '7': {
          setLocation('/programmer')
          break
        }
        case '8': {
          setLocation('/pros-cons')
          break
        }
        case '9': {
          setLocation('/market')
          break
        }
        case '0': {
          setLocation('/salary')
          break
        }
      }
    })
  }, [location])

  // Sensor of components in "/"
  useEffect(() => {
    location !== '/' &&
      setTimeout(() => {
        setActiveApresentation(false)
      }, 2000)

    location === '/' && setActiveApresentation(true)
  }, [location])

  // Get handpose
  useEffect(() => {
    const gestureEstimator = new GestureEstimator([
      PaperGesture,
      ScissorsGesture,
      LGesture,
    ])

    setLocation(pages[pageId])

    const setCommand = async () => {
      const data = await handpose.load({
        detectionConfidence: 0.9,
      })

      intervalRef.current = setInterval(async () => {
        const hands = await data.estimateHands(webCam.current.video, true)

        setWait(false)
        if (hands.length !== 0) {
          const estimatedGestures = await gestureEstimator.estimate(
            hands[0].landmarks,
            8.5,
          )
          if (estimatedGestures.gestures[0]) {
            switch (estimatedGestures.gestures[0].name) {
              case 'paper':
                pageId !== pages.length - 1 && setPageId(pageId + 1)
                break
            }
          }
        }
      }, 1000)
    }

    setCommand()

    return clearInterval(intervalRef.current)
  }, [pageId])

  return (
    <main className="h-screen w-screen bg-black">
      {wait ? (
        <article className="absolute flex h-screen w-screen flex-col items-center justify-center  text-white">
          <h2 className="text-center text-xl font-extrabold">
            For a better experience,
          </h2>
          <h1 className="text-center text-3xl font-extrabold text-green-600">
            Enable camera access
          </h1>
          <p className="font-semibold">
            Show your palm to the camera or change pages using the numbers on
            the keyboard!
          </p>
        </article>
      ) : (
        <>
          {activeApresentation && (
            <div className="absolute z-20 flex h-full w-full flex-col text-white">
              <Header members={members} location={location} />
              <Title members={members} location={location} />
            </div>
          )}
          <div className="absolute z-10 flex h-full w-full overflow-hidden text-white">
            {transitions((style) => (
              <Switch location={location}>
                <Route path="/members">
                  <animated.section style={{ ...style }}>
                    <Members members={members} />
                  </animated.section>
                </Route>
                <Route path="/members">
                  <animated.section style={{ ...style }}>
                    <Members members={members} />
                  </animated.section>
                </Route>
                <Route path="/alan-turing">
                  <animated.section style={{ ...style }}>
                    <AlanTuring />
                  </animated.section>
                </Route>
                <Route path="/turing-machine">
                  <animated.section style={{ ...style }}>
                    <TuringMachine />
                  </animated.section>
                </Route>
                <Route path="/turing-machine">
                  <animated.section style={{ ...style }}>
                    <TuringMachine />
                  </animated.section>
                </Route>
                <Route path="/von-neumann">
                  <animated.section style={{ ...style }}>
                    <VonNeumann />
                  </animated.section>
                </Route>
                <Route path="/binary-to-letters">
                  <animated.section style={{ ...style }}>
                    <BinaryToLetters />
                  </animated.section>
                </Route>
                <Route path="/programmer">
                  <animated.section style={{ ...style }}>
                    <Programmer />
                  </animated.section>
                </Route>
                <Route path="/pros-cons">
                  <animated.section style={{ ...style }}>
                    <ProsCons />
                  </animated.section>
                </Route>
                <Route path="/market">
                  <animated.section style={{ ...style }}>
                    <Market />
                  </animated.section>
                </Route>
                <Route path="/salary">
                  <animated.section style={{ ...style }}>
                    <Salary />
                  </animated.section>
                </Route>
              </Switch>
            ))}
          </div>
          <div className="absolute z-0 h-full w-full">
            <Space activeCanvas={activeApresentation} />
          </div>
        </>
      )}
      <Webcam
        ref={webCam}
        videoConstraints={{ frameRate: { max: 4 } }}
        width={500}
        height={500}
        style={{
          height: '50px',
          width: '50px',
          position: 'absolute',
          zIndex: -1,
        }}
      />
    </main>
  )
}

function Header({ members, location }) {
  const trailAnchor = useTrail(members.length, {
    from: { opacity: 0, y: -5 },
    to: { opacity: location === '/' ? 1 : 0, y: 0 },
    config: {
      duration: 900,
      mass: 5,
      tension: 2000,
      friction: 200,
      easing: easings.easeOutBack,
    },
  })

  return (
    <header className="absolute flex w-full justify-center overflow-hidden  font-semibold">
      <ul className="m-6 flex gap-x-12">
        {trailAnchor.map((props, index) => (
          <animated.p style={props} key={index} className="text-sm">
            {members[index].name}
          </animated.p>
        ))}
      </ul>
    </header>
  )
}

function Title({ location }) {
  const lines = ['Let be', 'a Programmer!']
  const trailAnchor = useTrail(lines.length, {
    from: { opacity: 0, x: 80 },
    to: { opacity: location === '/' ? 1 : 0, x: 20 },
    config: {
      duration: 1500,
      mass: 5,
      tension: 2000,
      friction: 200,
      easing: easings.easeOutBack,
    },
  })

  return (
    <main className="flex flex-1 items-center font-extrabold">
      <div className="m-32 flex flex-col">
        {trailAnchor.map((props, index) => (
          <div key={index} className="flex">
            <animated.p style={props} className="text-7xl tracking-tight">
              {lines[index]}
            </animated.p>
          </div>
        ))}
      </div>
    </main>
  )
}
