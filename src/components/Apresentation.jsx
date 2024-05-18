import Space from "./3D/Space"
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import React from "react"

export default function Apresentation() {
    return (
        <>
        <div className="absolute z-0 h-full w-full">
            <Space />
        </div>
        <AnimatePresence>
            <div 
            style={{ fontFamily: '"Instrument Serif", sans-serif' }} 
            className="absolute z-30 flex h-full w-full text-white">
                <div className="flex justify-center items-end sm:items-center">
                    <div className="flex flex-col leading-3 m-10 mb-20 sm:m-20">
                        <MotionConfig transition={{ duration: 1.6, ease: 'circOut' }}>
                            <motion.p 
                            key="name" 
                            initial={{ opacity: 0, x: 80 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            exit={{ opacity: 0 }} 
                            className="tracking-tight sm:text-7xl text-4xl">
                            @rui_luucas
                            </motion.p>
                        </MotionConfig>
                        <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
                            <motion.p 
                            key="title" 
                            initial={{ opacity: 0, x: 80 }} 
                            animate={{ opacity: 1, x: 0, }} 
                            exit={{ opacity: 0 }} 
                            className="tracking-tight sm:text-7xl text-4xl">
                            software developer
                            </motion.p>
                        </MotionConfig>
                    </div>
                </div>
            </div>
        </AnimatePresence>
        </>
    )
}

/*
<main  className="flex flex-1 justify-center items-center font-extrabold">
                <div className="md:m-12 m-4 flex flex-col  justify-center items-center">
                    <div className="flex flex-col items-center">
                        <AnimatePresence>
                        <div className="flex items-center flex-col">
                            <MotionConfig transition={{ duration: 1.6, ease: 'circOut' }}>
                            <motion.p 
                                key="name" 
                                initial={{ opacity: 0, x: 80 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                exit={{ opacity: 0 }} 
                                className="md:text-8xl tracking-tight text-6xl">
                                @rui_luucas
                            </motion.p>
                            </MotionConfig>
                            <MotionConfig transition={{ duration: 2, ease: 'circOut' }}>
                            <motion.p 
                                key="title" 
                                initial={{ opacity: 0, x: 80 }} 
                                animate={{ opacity: 1, x: 0, }} 
                                exit={{ opacity: 0 }} 
                                className="md:text-5xl tracking-tight text-5xl">
                                software developer
                            </motion.p>
                            </MotionConfig>
                        </div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
*/