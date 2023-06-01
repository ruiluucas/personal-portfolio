import { useState } from 'react'
import { motion } from 'framer-motion'
import { Route, useLocation } from 'wouter'
import { easings, useTrail } from '@react-spring/core'
import { animated } from '@react-spring/web'
import TrailLength from '../assets/animations/TrailLength'

export default function About() {
  const [location] = useLocation()
  const characters = [
    {
      name: 'Jordan',
      nick: '@nix',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxBIU-TaDsEYaLMa1Bf_uXisAA8ugqqbNuQ&usqp=CAU',
    },
    {
      name: 'Renan',
      nick: '@Bigodin',
      link: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Rui',
      nick: '@Elemental',
      link: 'https://steamuserimages-a.akamaihd.net/ugc/2070009049391932686/99CD300F9B195165D83560A2436659C00699970F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    },
  ]

  const trailAnchor = useTrail(characters.length, {
    from: { opacity: 0, y: -5 },
    to: { opacity: location === '/about' ? 1 : 0, y: 0 },
    config: {
      duration: 1500,
      mass: 5,
      tension: 2000,
      friction: 200,
      easing: easings.easeOutBack,
    },
    delay: 2000,
  })

  return (
    <div className="absolute z-20 flex h-screen w-screen items-center justify-center transition">
      <nav
        className="mx-auto flex max-w-7xl flex-1 items-center justify-center p-6 font-semibold text-white"
        aria-label="Global"
      >
        <ul className="flex gap-x-12">
          {trailAnchor.map((props, index) => (
            <animated.span
              style={props}
              key={index}
              className="flex flex-col items-center justify-center text-sm leading-6"
            >
              <img
                className="mb-2 h-32 w-32 rounded-full border-2 border-solid border-white object-cover"
                src={characters[index].link}
                alt=""
              />
              <p className="text-base">{characters[index].name}</p>
              <p className="text-xs text-gray-300">{characters[index].nick}</p>
            </animated.span>
          ))}
        </ul>
      </nav>
    </div>
  )
}
