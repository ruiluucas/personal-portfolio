import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Nav from './components/Nav'

export default function Header() {
  const { state, dispatch } = useContext(GlobalContext)
  const [isScrolled, setIsScrolled] = useState(false)

  addEventListener("scroll", () => {
    if(window.scrollY > 0 && state.notebookZoomIn) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  return (
    <header
    style={{
      backdropFilter: !isScrolled ? "blur(0px)" : "blur(10px)",
      transition: "1s"
    }}
    className='fixed z-50 w-full h-20'
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
    </header>
  )
}

/*
<header
    style={{
      backdropFilter: !isScrolled ? "blur(0px)" : "blur(10px)",
      transition: "1s"
    }}
    className='fixed z-50 w-full h-20'
    >
      <div 
      style={{ 
        fontFamily: '"Platypi"', 
        fontWeight: 100, color: 'white',
      }} 
      className="z-50 flex h-20 text-lg text-white absolute sm:text-3xl w-full justify-between items-center overflow-hidden"
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
        <ul className="m-6 sm:flex hidden text-base gap-x-12">
          {
            state.notebookZoomIn &&
            <AnimatePresence>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium hover:font-bold p-1 px-2 rounded-md border-x-2 border-transparent'
                key="contact"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'circOut' }}
                href='#contact'
                >Contact</motion.a>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium hover:font-bold p-1 px-2 rounded-md border-x-2 border-transparent'
                key="about"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: 'circOut' }}
                href='#about'
                >About</motion.a>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium hover:font-bold p-1 px-2 rounded-md border-x-2 border-transparent'
                key="jobs"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: 'circOut' }}
                href='#jobs'
                >Jobs</motion.a>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium hover:font-bold p-1 px-2 rounded-md border-x-2 border-transparent'
                key="benefits"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: 'circOut' }}
                href='#benefits'
                >Benefits</motion.a>
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
      </div>
    </header>
*/