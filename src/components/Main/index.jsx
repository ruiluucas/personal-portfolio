import Space from '../3D/Space'
import { useSelector } from 'react-redux'
import { easeInOut, easeOut, motion } from "framer-motion"
import Header from '../Header';

function TextMain() {
  const animation = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1 , x: 20 },
    transition: { duration: 1.5, mass: 7, ease: easeInOut },
  };

  return (
    <div className="flex flex-col items-start justify-center md:justify-center md:m-40 md:mt-0 sm:m-0 sm:justify-center h-full">
      <motion.div {...animation} className="text-black text-7xl md:text-8xl tracking-tight font-extrabold leading-10 h-10 md:h-20">
        <motion.span initial={{ height: 110 }} animate={{ height: 0 }} transition={{ ...animation.transition }} className='text-white'>
          Let's
        </motion.span>
      </motion.div>
      <motion.div {...animation} transition={{ ...animation.transition, delay: 0.3 }} className="text-black text-7xl md:text-8xl tracking-tight font-extrabold leading-10 h-10 md:h-20">
        <motion.span initial={{ height: 110 }} animate={{ height: 0 }} transition={{ ...animation.transition, delay: 0.3 }} className='text-white'>
          Program!
        </motion.span>
      </motion.div>
    </div>
  )
}

export default function Main() {
  const activeCanvas = useSelector((state) => state.style.activeCanvas)

  return (
    <main className='pb-60 bg-black flex-1'>
      <Header />
      <div className="h-full z-10"><TextMain /></div>
      { activeCanvas && <div style={{ zIndex: 1 }} className="absolute h-screen w-full top-0"><Space /></div> }
    </main>
  )
}