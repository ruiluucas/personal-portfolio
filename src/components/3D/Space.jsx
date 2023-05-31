import * as THREE from 'three'
import { easings, useTransition } from '@react-spring/core'
import { a, useSpring } from '@react-spring/three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  Float,
  Stars as InnerStars,
  Box,
  useGLTF,
  MeshReflectorMaterial,
  Html,
  Trail,
} from '@react-three/drei'
import { Route, useLocation, Switch } from 'wouter'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function Space() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={0.8}
        position={[5, 0, 0]}
      >
        <Notebook />

        <Electron
          position={[0, 0, 0.5]}
          rotation={[3.14 / 1.5 - 0.2, 0, 0]}
          speed={1.8}
        />
        <Electron position={[0, 0, 0.5]} rotation={[0, 2, -3]} speed={2} />
        <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0]} speed={1.6} />
      </Float>
      <Stars />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </Canvas>
  )
}

function Stars() {
  const [location] = useLocation()

  const { position, opacity, ...props } = useSpring({
    from: {
      position: [500, 500, -20],
      rotation: [0, Math.PI, 0],
      scale: 16,
      opacity: 0,
    },
    to: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: location === '/' ? 1 : 5,
      opacity: location === '/' ? 1 : 0,
    },
    config: {
      duration: 3000,
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

function Notebook() {
  const { nodes, materials } = useGLTF('./notebook.glb')
  const [location] = useLocation()
  const { position, rotation } = useSpring({
    from: {
      position: [0, -20, -10],
      rotation: [1, 0.3, -3],
    },
    to: {
      position: location === '/' ? [0, -1.5, -1.8] : [-4.6, -2.8, 17],
      rotation: location === '/' ? [0.3, -0.3, 0] : [0.4, 0, 0],
    },
    config: {
      duration: 3000,
      tension: 170,
      friction: 26,
      easing: easings.easeOutExpo,
    },
  })

  return (
    <a.group position={position} rotation={rotation}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes.Cube008.geometry}
          />
          <mesh
            material={materials['matte.001']}
            geometry={nodes.Cube008_1.geometry}
          />
          <mesh geometry={nodes.Cube008_2.geometry}>
            <MeshReflectorMaterial color="black" />
            <Html
              portal={a}
              scale={0.275}
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              zIndexRange={[0, 0]}
              transform
              occlude
            >
              <div
                className="wrapper"
                style={{
                  width: '1250px',
                  height: '100%',
                  background: 'black',
                }}
                onPointerDown={(e) => e.stopPropagation()}
              ></div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes.Cube002.geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes.Cube002_1.geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </a.group>
  )
}

function Electron({ radius = 7, speed = 0.1, ...props }) {
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
/* 
<pointLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={0.8}
        position={[5, 0, 0]}
      >
        
        <Electron
          position={[0, 0, 0.5]}
          rotation={[3.14 / 1.5 - 0.2, 0, 0]}
          speed={1.8}
        />
        <Electron position={[0, 0, 0.5]} rotation={[0, 2, -3]} speed={2} />
        <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0]} speed={1.6} />
      </Float> 

      
      */
