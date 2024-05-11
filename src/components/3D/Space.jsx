/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  Float,
  Stars
} from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Notebook from './Notebook'
import Electron from './Electron'

export default function Space({ activeCanvas, delayChangeLocation }) {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />
      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        position={[5, 0, 0]}
      >
      <Stars delayChangeLocation={delayChangeLocation} />
      </Float>
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={1}
        position={[5, 0, 0]}
      >
        <Notebook delayChangeLocation={delayChangeLocation} />
        {activeCanvas && (
          <>
            <Electron
              position={[0, 0, 0.5]}
              rotation={[3.14 / 1.5 - 0.2, 0, 0]}
              speed={1.8}
            />
            <Electron position={[0, 0, 0.5]} rotation={[0, 2, -3]} speed={2} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0]} speed={1.6} />
          </>
        )}
      </Float>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </Canvas>
  )
}
