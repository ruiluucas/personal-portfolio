import { useState, Children, Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useTrail, animated, useSpring, easings, useSpringRef } from '@react-spring/web'
import Space from '../3D/Space'
import { useSelector } from 'react-redux'

const TrailText = ({ children }) => {
  const items = Children.toArray(children)
  const activeCanvas = useSelector((state) => state.style.activeCanvas)
  const trail = useTrail(items.length, {
    config: { mass: 7, tension: 300, friction: 100 },
    from: { opacity: 0, x: 80, height: activeCanvas ? 0 : 110 },
    to: { opacity: !activeCanvas ? 1 : 0, x: !activeCanvas ? 20 : 80, height: !activeCanvas ? 110 : 0 },
  });
    
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} className="text-black text-7xl md:text-8xl tracking-tight font-extrabold leading-10 h-14 md:h-20" style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

function TextMain() {
  return (
    <div className="flex items-center justify-center md:justify-start md:m-40 md:mt-0 sm:m-0 sm:justify-center h-full">
      <TrailText>
        <span className='text-white'>Let's</span>
        <span className='text-white'>Program!</span>
      </TrailText>
    </div>
  )
}

export default function Main() {
  const activeCanvas = useSelector((state) => state.style.activeCanvas)

  return (
    <main className='pb-60 bg-black flex-1'>
      <div className="h-full z-10"><TextMain /></div>
      { 
        activeCanvas ? 
        <div style={{ zIndex: 1 }} className="absolute h-screen w-full top-0"><Space /></div> :
        <div></div>
      }
    </main>
  )
}