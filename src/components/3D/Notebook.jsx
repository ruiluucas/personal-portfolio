/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { easings } from '@react-spring/core'
import { a, useSpring } from '@react-spring/three'
import {
  useGLTF,
  MeshReflectorMaterial,
  Html,
} from '@react-three/drei'
import useScreenSize from '../../hooks/useScreenSize'
import { useEffect } from 'react'

export default function Notebook({delayChangeLocation}) {
    const { nodes, materials } = useGLTF('./notebook.glb')

    const { position, rotation } = useSpring({
      from: {
        position: [0, -20, -10],
        rotation: [1, 0.3, -3],
      },
      to: {
        position: !delayChangeLocation ? [0, -1.5, -1.8] : [-7.6, -2.8, 17],
        rotation: !delayChangeLocation ? [0.3, -0.3, 0] : [0.4, 0, 0],
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