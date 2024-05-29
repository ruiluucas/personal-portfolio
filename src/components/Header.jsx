import { motion, AnimatePresence, MotionConfig, useScroll } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import useScreenSize from '../hooks/useScreenSize'
import Nav from './Nav'

export default function Header() {
  const { state, dispatch } = useContext(GlobalContext)
  const { scrollY } = useScroll()

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY])

  return (
    <header 
    style={{ 
      fontFamily: '"Platypi"', 
      fontWeight: 100, color: 'white',
      backdropFilter: "blur(10px)"
    }} 
    className="z-50 flex text-lg text-white sm:text-3xl fixed w-full justify-between overflow-hidden"
    >
      <div
      style={{ position: !state.notebookZoomIn ? "absolute" : "relative" }}
      className='w-full h-full flex justify-start'
      >
        <AnimatePresence>
          {
            state.notebookZoomIn &&
            <motion.a
            onClick={() => { dispatch({ type: 'DESACTIVE_ZOOM_IN'}) }}
            className='cursor-pointer mx-5 m-6 text-2xl p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
            key="about"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4, ease: 'circInOut' }}
            >{ '<' }</motion.a>
          }
        </AnimatePresence>
      </div>
      <ul className="m-6 sm:flex font-black text-base hidden gap-x-12">
        {
        state.notebookZoomIn &&
        <AnimatePresence>
          <MotionConfig transition={{ duration: 1.4, ease: 'circOut' }}>
            <motion.a
            onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
            className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
            key="contact"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            href='#contact'
            >Contact</motion.a>
          </MotionConfig>
          <MotionConfig transition={{ duration: 1.6, ease: 'circOut' }}>
            <motion.a
            onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
            className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
            key="about"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            href='#about'
            >About</motion.a>
          </MotionConfig>
          <MotionConfig transition={{ duration: 1.8, ease: 'circOut' }}>
            <motion.a
            onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
            className='cursor-pointe p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
            key="jobs"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            href='#jobs'
            >Jobs</motion.a>
          </MotionConfig>
          <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
            <motion.a
            onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
            className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
            key="benefits"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            href='#benefits'
            >Benefits</motion.a>
          </MotionConfig>
        </AnimatePresence>
        }
      </ul>
      <div 
      style={{ position: !state.notebookZoomIn ? "absolute" : "relative" }} 
      className='w-full flex justify-end'>
        <AnimatePresence>
          {
            state.notebookZoomIn &&
            <motion.div
            key="nav"
            className='mx-5 m-6'
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.8, ease: 'circInOut'}}
            >
              <Nav />
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </header>
  )
}

/*
<div style={{ zIndex: 105 }} className="absolute z-50 flex h-full w-full flex-col text-white">
        <AnimatePresence>
          <MotionConfig transition={{ duration: 1.4, ease: 'circInOut', delay: 1 }}>
              <div className='w-full h-full flex justify-start'>
                {
                  state.notebookZoomIn &&
                  <motion.a
                  onClick={() => { dispatch({ type: 'DESACTIVE_ZOOM_IN'}) }}
                  className='cursor-pointer mx-5 m-6 text-2xl p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
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
          {
            <ul className="m-6 sm:flex hidden gap-x-12">
              <MotionConfig transition={{ duration: 1.4, ease: 'circOut' }}>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
                key="about"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >About</motion.a>
              </MotionConfig>
              <MotionConfig transition={{ duration: 1.6, ease: 'circOut' }}>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
                key="work"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >Work</motion.a>
              </MotionConfig>
              <MotionConfig transition={{ duration: 1.8, ease: 'circOut' }}>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointe p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
                key="process"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >Process</motion.a>
              </MotionConfig>
              <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer p-1 px-2 rounded-md border-x-2 hover:border-white border-transparent'
                key="benefits"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >Benefits</motion.a>
              </MotionConfig>
            </ul>
          }
        </AnimatePresence>
        <AnimatePresence>
          <MotionConfig transition={{ duration: 1.8, ease: 'circInOut', delay: 1 }}>
            <div className='w-full sm:flex h-full hidden justify-end'>
              {
                state.notebookZoomIn &&
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer border-x-2 hover:border-white border-transparent rounded-md mx-5'
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
        <AnimatePresence>
          <MotionConfig transition={{ duration: 1.8, ease: 'circInOut', delay: 1 }}>
            <div className='w-full h-full sm:hidden flex justify-end'>
              {
                <motion.div
                key="nav"
                className='mx-5 m-6'
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                >
                  <Nav />
                </motion.div>
              }
            </div>
          </MotionConfig>
        </AnimatePresence>
      </header>
    </div>
*/