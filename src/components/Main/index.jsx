import { useState, Children, Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useTrail, animated, useSpring, easings } from '@react-spring/web'
import { a } from "@react-spring/three"
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, ContactShadows, Environment, Float, Html, MeshReflectorMaterial, OrbitControls, Sky, Stars, Trail, useGLTF } from "@react-three/drei"
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import MatrixScreen from './MatrixScreen'

const TrailText = ({ open, children }) => {
  const items = Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 7, tension: 300, friction: 100 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 80, height: 0 },
  })
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
  const [open, set] = useState(true)
  return (
    <div className="flex items-center justify-center md:justify-start md:m-40 md:mt-0 sm:m-0 sm:justify-center h-full">
      <TrailText open={open}>
        <span className='text-white'>Let's</span>
        <span className='text-white'>Program!</span>
      </TrailText>
    </div>
  )
}

function NotebookContent() {
  const { nodes, materials } = useGLTF("./notebook.glb")
  const [{ position, rotation }] = useSpring(() => ({
    from: { position: [0, -20, -10], rotation: [1, 0.3, -3] },
    to: { position: [0, -1.5, -1.8], rotation: [0.3, -0.3, 0] },
    config: {
      duration: 3000,
      tension: 170, 
      friction: 26,
      easing: easings.easeOutExpo	
    }
  }))

  return (
    <a.group position={position} rotation={rotation}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <Suspense fallback={null}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <MeshReflectorMaterial color="black" />
            <Html portal={a} scale={0.275} className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} zIndexRange={[0, 0]} transform occlude >
              <div className="wrapper" style={{ width: "1250px",  height: "100%", background: "black" }} onPointerDown={(e) => e.stopPropagation()}>
              </div>
            </Html>
          </mesh>
        </group>
        </Suspense>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </a.group>
  )
}

export default function Main() {
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
    <main className='pb-60 bg-black flex-1'>
      <div className="h-full">
        <TextMain />
      </div>
      <div style={{ zIndex: 1 }} className="absolute h-screen w-full top-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
          <Environment preset="city" />
          <Float speed={1} rotationIntensity={1} floatIntensity={5} position={[5, 0, 0]}>
            <NotebookContent />
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
      </div>
    </main>
  )
}

function Electron({ radius = 7, speed = 0.1, ...props }) {
  const [spring, setSpring] = useSpring(() => ({
    position: [-60, -20, -10]
  }))

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed

    setSpring({
      position: [Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 0.5, 0]
    })
  })

  return (
    <group {...props}>
      <Trail width={5} length={5} color={new THREE.Color(0, 1, 0)} attenuation={(t) => t * t}>
        <a.mesh position={spring.position}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[0, 10, 0]} toneMapped={false} />
        </a.mesh>
      </Trail>
    </group>
  )
}







