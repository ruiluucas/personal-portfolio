import Space from "./3D/Space"
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import React from "react"

export default function Apresentation() {
    return (
        <>
        <div className="absolute z-0 h-full w-full">
            <Space />
        </div>
        <div className="absolute z-20 flex h-full w-full flex-col text-white">
            <main style={{ fontFamily: '"Instrument Serif", sans-serif' }} className="flex flex-1 items-center font-extrabold">
                <div className="md:m-12 m-4 flex flex-col">
                    <div className="flex flex-col">
                        <AnimatePresence>
                        <div>
                            <MotionConfig transition={{ duration: 1.6, ease: 'circOut' }}>
                            <motion.p 
                                key="name" 
                                initial={{ opacity: 0, x: 80 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                exit={{ opacity: 0 }} 
                                className="md:text-7xl tracking-tight text-5xl">
                                Rui Lucas
                            </motion.p>
                            </MotionConfig>
                            <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
                            <motion.p 
                                key="title" 
                                initial={{ opacity: 0, x: 80 }} 
                                animate={{ opacity: 1, x: 0, }} 
                                exit={{ opacity: 0 }} 
                                className="md:text-5xl tracking-tight text-5xl">
                                Software Developer
                            </motion.p>
                            </MotionConfig>
                        </div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}