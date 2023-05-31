import { Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { useSpring, easings } from '@react-spring/web'
import { a } from '@react-spring/three'
import { Html, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Notebook() {
  const { nodes, materials } = useGLTF('./notebook.glb')
  const [{ position, rotation }, setProps] = useSpring(() => ({
    from: { position: [0, -20, -10], rotation: [1, 0.3, -3] },
    to: { position: [0, -1.5, -1.8], rotation: [0.3, -0.3, 0] },
    config: {
      duration: 3000,
      tension: 170,
      friction: 26,
      easing: easings.easeOutExpo,
    },
  }))
  const computer = useSelector((state) => state.home.computer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const animate = async () => {
      const props = { position: computer.position, rotation: computer.rotation }
      setProps({
        ...props,
        onRest: () => {
          navigate('/turing')
        },
      })
    }
    animate()
  }, [computer, dispatch, setProps])

  return (
    <a.group position={position} rotation={rotation}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <Suspense fallback={null}>
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
        </Suspense>
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

useGLTF.preload('./notebook.glb')
