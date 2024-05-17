import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function Header() {
  const { state, dispatch } = useContext(GlobalContext)

    return (
      <header style={{ fontFamily: '"Instrument Serif", sans-serif' }} className="absolute flex w-full justify-center overflow-hidden font-semibold">
        <ul className="m-6 flex gap-x-12">
            <motion.a onClick={() => { dispatch({ type: 'HANDLE_DELAY_CHANGE_LOCATION' }) }} className="text-sm cursor-pointer">
              About
            </motion.a>
            <motion.a className="text-sm cursor-pointer">
              Work
            </motion.a>
            <motion.a className="text-sm cursor-pointer">
              Process
            </motion.a>
            <motion.a className="text-sm cursor-pointer">
              Benefits
            </motion.a>
        </ul>
      </header>
    )
}