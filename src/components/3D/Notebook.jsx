/* eslint-disable react/no-unknown-property */
import { easings } from '@react-spring/core'
import { a, useSpring } from '@react-spring/three'
import {
  useGLTF,
  MeshReflectorMaterial,
} from '@react-three/drei'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export default function Notebook() {
    const { nodes, materials } = useGLTF('./notebook.glb')
    const { state } = useContext(GlobalContext)

    useEffect(() => { console.log(state) }, [state])

    const { position, rotation } = useSpring({
      from: {
        position: [0, -20, -10],
        rotation: [1, 0.3, -3],
      },
      to: {
        position: state.notebookZoomIn ? [-8, -3, 20] : [0, -1.5, -1.8],
        rotation: state.notebookZoomIn ? [0, 0, 0] : [0.3, -0.3, 0],
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
              <MeshReflectorMaterial color="black" roughness={0.5} />
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