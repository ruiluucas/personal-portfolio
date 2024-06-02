import Space from "./Space/Space"
import { motion, AnimatePresence, MotionConfig, LayoutGroup } from 'framer-motion'
import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export default function Apresentation() {
    const { state, dispatch } = useContext(GlobalContext)

    return (
        <>
        <div className="fixed z-0 h-full w-full">
            <Space />
        </div>
        <div 
        style={{ fontFamily: '"Platypi"', fontWeight: 900 }} 
        className="fixed z-30 flex h-full w-full text-white"
        onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
        >
            <div 
            className="flex justify-center items-end"
            onClick={() => { dispatch({ type: 'ACTIVE_ZOOM_IN'}) }}
            >
                <div className="flex flex-col leading-3 m-10 mb-20 sm:m-20">
                    <AnimatePresence>
                        {
                            !state.notebookZoomIn &&
                            <LayoutGroup>
                                <MotionConfig>
                                    <motion.p 
                                    key="name" 
                                    initial={{ opacity: 0, x: 80 }} 
                                    animate={{ opacity: 1, x: 0, transition: { duration: 2, ease: 'circOut', delay: 0.6 } }} 
                                    exit={{ opacity: 0, transition: { duration: 1 } }} 
                                    className="tracking-tight sm:text-5xl text-4xl cursor-pointer"
                                    >
                                    Rui Lucas
                                    </motion.p>
                                </MotionConfig>
                                <MotionConfig>
                                    <motion.p 
                                    key="title" 
                                    initial={{ opacity: 0, x: 80 }} 
                                    animate={{ opacity: 1, x: 0, transition: { duration: 2.4, ease: 'circOut', delay: 1 } }} 
                                    exit={{ opacity: 0, transition: { duration: 0.6 } }}
                                    className="tracking-tight sm:text-3xl text-1xl cursor-pointer"
                                    >
                                    Software Developer
                                    </motion.p>
                                </MotionConfig>
                            </LayoutGroup>
                        }
                    </AnimatePresence>

                </div>
            </div>
        </div>
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