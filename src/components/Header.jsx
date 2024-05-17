import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { ArrowBack } from '@mui/icons-material'

export default function Header() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <div style={{ zIndex: 105 }} className="absolute z-50 flex h-full w-full flex-col text-white">
      <header style={{ zIndex: 105, fontFamily: '"Instrument Serif", sans-serif' }} className="absolute flex w-full justify-around items-center overflow-hidden font-semibold">
        <AnimatePresence>
          <MotionConfig transition={{ duration: 1.4, ease: 'circInOut', delay: 1 }}>
              <div className='w-full h-full flex justify-start'>
                {
                  state.notebookZoomIn &&
                  <motion.a
                  onClick={() => { dispatch({ type: 'DESACTIVE_ZOOM_IN'}) }}
                  className='cursor-pointer mx-5 text-2xl p-1 px-2 rounded-md border-x-2 hover:border-white border-black'
                  key="about"
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  >
                    { '<' }
                  </motion.a>
                }
              </div>
          </MotionConfig>
        </AnimatePresence>
        <AnimatePresence>
          <ul className="m-6 flex gap-x-12">
            <MotionConfig transition={{ duration: 1.4, ease: 'circOut' }}>
              <motion.a
              onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
              className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-black'
              key="about"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              >About</motion.a>
            </MotionConfig>
            <MotionConfig transition={{ duration: 1.6, ease: 'circOut' }}>
              <motion.a
              onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
              className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-black'
              key="work"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              >Work</motion.a>
            </MotionConfig>
            <MotionConfig transition={{ duration: 1.8, ease: 'circOut' }}>
              <motion.a
              onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
              className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-black'
              key="process"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              >Process</motion.a>
            </MotionConfig>
            <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
              <motion.a
              onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
              className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-black'
              key="benefits"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              >Benefits</motion.a>
            </MotionConfig>
          </ul>
        </AnimatePresence>
        <AnimatePresence>
          <MotionConfig transition={{ duration: 1.6, ease: 'circInOut', delay: 1 }}>
            <div className='w-full h-full flex justify-end'>
              {
                state.notebookZoomIn &&
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer border-x-2 hover:border-white border-black rounded-md mx-5'
                key="about"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >
                  <p className='m-1 my-2 rounded-md'>
                    <span className='bg-white text-black p-1 px-2 rounded-md'>Contact</span>
                  </p>
                </motion.a>
              }
            </div>
          </MotionConfig>
        </AnimatePresence>
      </header>
    </div>
  )
}