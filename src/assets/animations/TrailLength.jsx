import { motion } from 'framer-motion'

export default function TrailLength({ children, delay }) {
  const characters = children.split('')

  return (
    <>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: index * 0.2,
            type: 'spring',
            mass: 1,
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
