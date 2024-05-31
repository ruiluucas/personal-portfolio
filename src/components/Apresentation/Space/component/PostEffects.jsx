/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { extend, useLoader } from '@react-three/fiber'
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader } from 'three-stdlib'
import {
  Effects,
} from '@react-three/drei'

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

export default function PostEffects() {
  const data = useLoader(LUTCubeLoader, '/cubicle.CUBE')

  return (
    <Effects disableGamma>
      <unrealBloomPass args={[undefined, 0.5, 1.25, 0]} />
      <filmPass args={[0.2, 1, 15, false]} />
      <lUTPass lut={data.texture} intensity={0.75} />
    </Effects>
  )
}