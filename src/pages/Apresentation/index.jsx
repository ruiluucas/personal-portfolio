import Space from './components/3D/Space'
import { easeInOut, motion } from 'framer-motion'
import { useTrail, animated, easings, useSpring } from '@react-spring/web'
import TrailLength from './assets/animations/TrailLength'

export default function Apresentation() {
  return (
    <>
      <Header />
      <Text />
      <div className="absolute top-0 z-0 h-screen w-full">
        <Space />
      </div>
    </>
  )
}
