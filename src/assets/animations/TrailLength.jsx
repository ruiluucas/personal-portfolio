import { motion } from 'framer-motion'

export default function TrailLength({ children }) {
  const characters = children.split('')

  return (
    <>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            type: 'spring',
            mass: 5,
            stiffness: 2000,
            damping: 200,
            ease: 'easeOut',
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
