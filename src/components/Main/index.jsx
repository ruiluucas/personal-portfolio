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
    <div className="flex flex-col z-10 h-full w-full items-start justify-center text-8xl text-white font-extrabold">
      <div className='pl-32'>
        <motion.div {...animation} className="tracking-tight leading-10 h-20">
          <motion.span initial={{ height: 110 }} animate={{ height: 0 }} transition={{ ...animation.transition }}>
            Let's
          </motion.span>
        </motion.div>
        <motion.div {...animation} transition={{ ...animation.transition, delay: 0.3 }} className="tracking-tight leading-10 h-20">
          <motion.span initial={{ height: 110 }} animate={{ height: 0 }} transition={{ ...animation.transition, delay: 0.3 }}>
            Program!
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}

export default function Main() {
  const activeCanvas = useSelector((state) => state.style.activeCanvas)

  return (
    <>
      <Header />
      <TextMain />
      { activeCanvas && <div className="absolute h-screen w-full top-0 z-0"><Space /></div> }
    </>
  )
}