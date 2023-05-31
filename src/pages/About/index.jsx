import { useState } from 'react'
import { motion } from 'framer-motion'
import { Route, useLocation } from 'wouter'
import { easings, useTrail } from '@react-spring/core'
import { animated } from '@react-spring/web'
import TrailLength from '../../assets/animations/TrailLength'

export default function About() {
  const [location] = useLocation()
  const characters = [
    { name: 'Bruno', nick: '@MarginalSlash' },
    { name: 'Jordan', nick: '@nix' },
    { name: 'Renan', nick: '@Bigodin' },
    { name: 'Rui', nick: '@Elemental' },
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
                src="https://assetsio.reedpopcdn.com/digitalfoundry-2016-why-you-should-install-dark-souls-patch-103-1460484409787.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
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
