import { motion, AnimatePresence, MotionConfig } from 'framer-motion'

export default function Title({ delayChangeLocation }) {
    return (
      <main style={{ fontFamily: '"Poetsen One", sans-serif' }} className="flex flex-1 items-center font-extrabold">
        <div className="md:m-12 m-4 flex flex-col">
          <div className="flex flex-col">
          <AnimatePresence>
            <MotionConfig transition={{ duration: 2, ease: 'easeOut' }}>
              <motion.p 
              initial={{ opacity: 0, x: 80 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0 }} 
              className="md:text-7xl tracking-tight text-5xl">
                Rui Lucas
              </motion.p>
            </MotionConfig>
            <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
              <motion.p 
              initial={{ opacity: 0, x: 80 }} 
              animate={{ opacity: 1, x: 0, }} 
              exit={{ opacity: 0 }} 
              className="md:text-5xl tracking-tight text-5xl">
                Software Developer
              </motion.p>
            </MotionConfig>
            </AnimatePresence>
          </div>
        </div>
      </main>
    )
  }