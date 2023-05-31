import { Route, useLocation } from 'wouter'
import Space from './components/3D/Space'
import { easeInOut, motion } from 'framer-motion'
import { easings, useSpring, useTrail } from '@react-spring/core'
import { animated } from '@react-spring/web'
import TrailLength from './assets/animations/TrailLength'
import About from './pages/About'
import Turing from './pages/Turing'
import TuringMachine from './pages/TuringMachine'
import BinaryToLetters from './pages/BinaryToLetters'
import Salary from './pages/Salary'
import Market from './pages/Market'
import ProsCons from './pages/ProsCons'
import Programmer from './pages/Programmer'

export default function App() {
  return (
    <main className="flex h-screen w-screen flex-col bg-black text-white ">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <Space />
      </div>
      <div className="absolute z-10 h-screen w-screen">
        <Header />
        <Text />
        <Route path="/about">
          <div className="absolute top-0 z-30">
            <About />
          </div>
        </Route>
        <Route path="/turing">
          <div className="absolute top-0 z-30">
            <Turing />
          </div>
        </Route>
        <Route path="/turing-machine">
          <div className="absolute top-0 z-30">
            <TuringMachine />
          </div>
        </Route>
        <Route path="/binary-to-letters">
          <div className="absolute top-0 z-30">
            <BinaryToLetters />
          </div>
        </Route>
        <Route path="/programmer">
          <div className="absolute top-0 z-30">
            <Programmer />
          </div>
        </Route>
        <Route path="/pros-cons">
          <div className="absolute top-0 z-30">
            <ProsCons />
          </div>
        </Route>
        <Route path="/market">
          <div className="absolute top-0 z-30">
            <Market />
          </div>
        </Route>
        <Route path="/salary">
          <div className="absolute top-0 z-30">
            <Salary />
          </div>
        </Route>
      </div>
    </main>
  )
}

function Header() {
  const [location] = useLocation()
  const characters = [
    { name: 'Bruno', nick: '@MarginalSlash' },
    { name: 'Jordan', nick: '@nix' },
    { name: 'Renan', nick: '@Bigodin' },
    { name: 'Rui', nick: '@Elemental' },
  ]

  const trailAnchor = useTrail(characters.length, {
    from: { opacity: 0, y: -5 },
    to: { opacity: location === '/' ? 1 : 0, y: 0 },
    config: {
      duration: 1500,
      mass: 5,
      tension: 2000,
      friction: 200,
      easing: easings.easeOutBack,
    },
  })

  return (
    <header className="absolute left-0 right-0 z-20 flex items-center transition">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 font-semibold text-white"
        aria-label="Global"
      >
        <ul className="flex gap-x-12">
          {trailAnchor.map((props, index) => (
            <animated.p style={props} key={index} className="text-sm leading-6">
              <TrailLength>{characters[index].name}</TrailLength>
            </animated.p>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Text() {
  const [location] = useLocation()
  const animation = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: location === '/' ? 1 : 0, x: 20 },
    transition: { duration: 2, mass: 7, ease: easeInOut },
  }

  return (
    <div className="z-10 flex h-full w-full flex-col items-start justify-center text-7xl font-extrabold text-white">
      <div className="pl-32">
        <motion.div {...animation} className="h-20 leading-8 tracking-tight">
          <motion.span
            initial={{ height: 110 }}
            animate={{ height: 0 }}
            transition={{ ...animation.transition }}
          >
            Trabalho
          </motion.span>
        </motion.div>
        <motion.div
          {...animation}
          transition={{ ...animation.transition, delay: 0.3 }}
          className="h-20 leading-8 tracking-tight"
        >
          <motion.span
            initial={{ height: 110 }}
            animate={{ height: 0 }}
            transition={{ ...animation.transition, delay: 0.3 }}
          >
            de Cidadania
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
