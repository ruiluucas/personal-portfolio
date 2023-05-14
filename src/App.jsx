import Fingerspose from "./components/Fingerspose";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'

export default function App() {
  return (
    <header className="h-screen flex flex-col">
      <A />
      <Fingerspose />
    </header>
  )
}

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

function A() {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  useEffect(() => {
    transRef.start()

    setTimeout(() => {
      onClick()
    }, 3000)
  }, [index])
  return (
    <div onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}