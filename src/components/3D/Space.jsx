/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader } from 'three-stdlib'
import {
  Environment,
  Float,
  Stars,
  Effects,
} from '@react-three/drei'
import Notebook from './Notebook'
import Electron from './Electron'
import useScreenSize from '../../hooks/useScreenSize'
import { useMemo, useRef } from 'react'

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

function Swarm({ count, dummy = new THREE.Object3D() }) {
  const mesh = useRef()
  const light = useRef()
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])
  useFrame((state) => {
    light.current.position.set((-state.mouse.x * state.viewport.width) / 5, (-state.mouse.y * state.viewport.height) / 5, 0)
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01
      particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.setScalar(s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue">
        <mesh scale={[1, 1, 6]}>
          <dodecahedronGeometry args={[4, 0]} />
        </mesh>
      </pointLight>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#020000" roughness={0.5} />
      </instancedMesh>
    </>
  )
}

function Postpro() {
  const data = useLoader(LUTCubeLoader, '/cubicle.CUBE')

  return (
    <Effects disableGamma>
      <unrealBloomPass args={[undefined, 0.5, 1.25, 0]} />
      <filmPass args={[0.2, 1, 15, false]} />
      <lUTPass lut={data.texture} intensity={0.75} />
    </Effects>
  )
}

export default function Space() {
  const { width, height } = useScreenSize();

  return (
    <Canvas flat legacy dpr={1} camera={{ position: [0, 0, 20], fov: 50 }}>
      <ambientLight intensity={0.01} />
      <Environment preset="city" />
      <Postpro />
      
      <Swarm count={100} />
      
      <Float
        speed={1}
        rotationIntensity={5}
        floatIntensity={6}
        position={[5, 0, 0]}
      >
        <pointLight distance={60} intensity={4} color="lightblue" />
        <spotLight intensity={1.5} position={[0, 0, 2000]} penumbra={1} color="green" />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
      </Float>

      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        position={[8, 0, 0]}
      >
        <Stars />
      </Float>

      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={1}
        position={(width / height) < 1.3 ? [1, 0, -10] : [7, 0, 0]}
      >
        <Notebook />
        <>
          <Electron position={[0, 0, 0.5]} rotation={[3.14 / 1.5 - 0.2, 0, 0]} speed={1.8} />
          <Electron position={[0, 0, 0.5]} rotation={[0, 2, -3]} speed={2} />
          <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0]} speed={1.6} />
        </>
      </Float>
    </Canvas>
  )
}
