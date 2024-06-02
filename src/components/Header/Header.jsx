import { motion, AnimatePresence, MotionConfig, LayoutGroup } from 'framer-motion'
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
    <>
      <AnimatePresence>
        {
          state.notebookZoomIn &&
          <motion.div
          layout
          animate={{ backdropFilter: !isScrolled ? "blur(0px)" : "blur(5px)", transition: { duration: 1, ease: "backOut" } }}
          exit={{ backdropFilter: "blur(0px)", transition: { delay: 1, duration: 2 } }}
          style={{ zIndex: 80 }}
          className='fixed z-60 w-screen h-20'
          />
        }
      </AnimatePresence>
      <motion.header
      style={{ zIndex: 90 }}
      className='fixed bg-black bg-opacity-15 w-screen h-20'
      >
        <div 
        style={{ 
          fontFamily: '"Platypi"', 
          fontWeight: 100, color: 'white',
        }} 
        className="z-50 flex h-20 text-lg text-white sm:text-3xl w-full justify-between items-center overflow-hidden"
        >
          <div
          style={{ position: !state.notebookZoomIn ? "absolute" : "relative" }}
          className='w-full h-full flex justify-start'
          >
            <AnimatePresence>
              {
                state.notebookZoomIn &&
                <motion.a
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{
                  textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                  transition: {
                    duration: 0.2,
                    ease: "linear"
                  }
                }}
                transition={{ duration: 2.4, ease: 'circInOut' }}
                onClick={() => { dispatch({ type: 'DESACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer mx-5 m-6 text-2xl flex items-center p-1 font-black px-2 rounded-md'
                key="about"
                >{ '<' }</motion.a>
              }
            </AnimatePresence>
          </div>
          <ul className="m-6 sm:flex w-full justify-center hidden text-base gap-x-12">
            <AnimatePresence>
              {
                state.notebookZoomIn &&
                <>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium p-1 px-2 rounded-md border-x-2 border-transparent'
                key="contact"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                whileHover={{
                  textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 1.4, ease: 'circOut' }}
                href='#contact'
                >Contato</motion.a>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium p-1 px-2 rounded-md border-x-2 border-transparent'
                key="about"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 1.2 } }}
                whileHover={{
                  textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 1.6, ease: 'circOut' }}
                href='#about'
                >Sobre</motion.a>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium p-1 px-2 rounded-md border-x-2 border-transparent'
                key="jobs"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 1.4 } }}
                whileHover={{
                  textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 1.8, ease: 'circOut' }}
                href='#jobs'
                >Trabalhos</motion.a>
                <motion.a
                onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
                className='cursor-pointer font-medium p-1 px-2 rounded-md border-x-2 border-transparent'
                key="benefits"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 1.6 } }}
                whileHover={{
                  textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 2, ease: 'circOut' }}
                href='#benefits'
                >Benefícios</motion.a>
                </>
              }
            </AnimatePresence>
          </ul>
          <div 
          style={{ position: !state.notebookZoomIn ? "absolute" : "relative" }} 
          className='w-full flex justify-end'>
            <AnimatePresence>
              {
                state.notebookZoomIn &&
                <motion.div
                key="nav"
                className='mx-5 m-6 sm:hidden'
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
      </motion.header>
    </>
  )
}