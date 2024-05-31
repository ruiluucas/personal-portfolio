/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { a, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import {
  Trail,
} from '@react-three/drei'
import { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalContext'

export default function Electron({ radius = 7, speed = 0.1, ...props }) {
    const { state } = useContext(GlobalContext)
    const [spring, setSpring] = useSpring(() => ({
      position: [-60, -20, -10],
    }))
  
    useFrame((state) => {
      const t = state.clock.getElapsedTime() * speed
  
      setSpring({
        position: [
          Math.sin(t) * radius,
          (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 0.5,
          0,
        ],
      })
    })
  
    return (
      <group {...props}>
        <Trail
          width={5}
          length={5}
          color={new THREE.Color(0, 1, 0)}
          attenuation={(t) => t * t}
        >
          <a.mesh position={spring.position}>
            <sphereGeometry args={[0.25]} />
            <meshBasicMaterial color={[0, 10, 0]} toneMapped={false} />
          </a.mesh>
        </Trail>
      </group>
    )
  }