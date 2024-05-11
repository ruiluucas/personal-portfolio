/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { easings } from '@react-spring/core'
import { a, useSpring } from '@react-spring/three'
import {
  Stars as InnerStars,
} from '@react-three/drei'

export default function Stars({ delayChangeLocation }) {
  
    const { position, opacity, ...props } = useSpring({
      from: {
        position: [500, 500, -10],
        rotation: [0, Math.PI, 0],
        scale: 0,
        opacity: 0,
      },
      to: {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: 5,
        opacity: 0,
      },
      config: {
        duration: 5000,
        tension: 170,
        friction: 26,
        easing: easings.easeOutExpo,
      },
    })
  
    return (
      <a.group opacity={opacity} position={position} {...props}>
        <InnerStars count={200} />
      </a.group>
    )
  }