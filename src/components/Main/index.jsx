import { useState, Children } from 'react'
import { useTrail, a } from '@react-spring/web'
import { Canvas } from '@react-three/fiber'
import { Box } from "@react-three/drei"

const Trail = ({ open, children }) => {
  const items = Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 7, tension: 300, friction: 100 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="text-black text-7xl md:text-8xl tracking-tight font-extrabold leading-10 h-14 md:h-20" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

function TextMain() {
  const [open, set] = useState(true)
  return (
    <div className="flex items-center justify-center md:justify-start md:m-40 md:mt-0 sm:m-0 sm:justify-center h-full">
      <Trail open={open}>
        <span>Let's</span>
        <span>Program!</span>
      </Trail>
    </div>
  )
}

export default function Main() {
    return (
        <main className='pb-60 flex-1'>
            <TextMain />
            <div className="absolute h-screen w-full top-0">
              <Canvas>
                <Box />
              </Canvas>
            </div>
        </main>
    )
}