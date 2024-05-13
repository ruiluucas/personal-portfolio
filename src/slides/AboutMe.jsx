import { animated, easings, useTrail } from '@react-spring/web'
import members from '../assets/members'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'

export default function AboutMe() {
  return (
    <div 
    style={{ fontFamily: '"Instrument Serif", sans-serif' }} 
    className="flex flex-col h-screen w-screen"
    >
        <AnimatePresence>
          <div className='flex mt-10 mx-20'>
            <MotionConfig transition={{ duration: 5 }}>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ 
                  transition: "linear",
                  transitionDuration: 3000
                }} 
                className="text-white z-10 justify-end items-end text-7xl m-5 mb-1"
                >About me</motion.p>
              </MotionConfig>
            <MotionConfig transition={{ duration: 2 }}>
              <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src='/profile.jpg'
              style={{ 
                transition: "linear",
                transitionDuration: 3000
              }} 
              className="h-80 z-0 w-full object-cover"
              />
            </MotionConfig>
          </div>
          <MotionConfig transition={{ duration: 5 }}>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              transition: "linear",
              transitionDuration: 3000,
              fontFamily: '"Instrument Serif", sans-serif'
            }} 
            className="text-white w-fit px-16 m-10 mx-10 text-xl"
            >
            Minhas competências são derivadas de longos períodos de estudo, 
            por meio de cursos, tutoriais e leitura, além de projetos pessoais. 
            Tendo isso em vista, tenho experiência em React, React Native, PHP, 
            JavaScript, Python (Pandas, sklearn, e análise de dados em geral). 
            Também possuo uma maior facilidade em atendimento, conversas e 
            apresentações, por meio de práticas passadas. Tenho uma boa 
            autoconfiança, e gosto disso pois me dá mais possibilidades 
            de crescer, pois mostra que sei o que estou falando e que posso 
            me garantir para os outros.
            </motion.p>
          </MotionConfig>
        </AnimatePresence>
      
    </div>
  )
}
