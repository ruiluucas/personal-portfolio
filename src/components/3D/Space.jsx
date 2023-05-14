import * as THREE from 'three'
import { useSpring, easings, Trail } from '@react-spring/web'
import { a } from "@react-spring/three"
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, ContactShadows, Environment, Float, Stars } from "@react-three/drei"
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Electron from './Electron'
import Notebook from './Notebook'

export default function Space() {
  const [{ scale }] = useSpring(() => ({
    from: { scale: 12 },
    to: { scale: 2 },
    config: {
      duration: 5000,
      tension: 170, 
      friction: 26,
      easing: easings.easeOutExpo	
    }
  }))
  
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <Environment preset="city" />
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.8} position={[5, 0, 0]}>
        <Notebook />
        <Electron position={[0, 0, 0.5]} rotation={[3.14 / 1.5 - 0.2, 0, 0]} speed={1.8} />
        <Electron position={[0, 0, 0.5]} rotation={[0, 2, -3]} speed={2} />
        <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0]} speed={1.6} /> 
      </Float>
      <a.group scale={scale}>
        <Stars saturation={0} count={400} speed={0.5} />
      </a.group>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </Canvas>
  )
}