import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Contact from "./Contact"
import About from "./About"
import Jobs from "./Jobs"
import Benefits from "./Benefits"

export default function Content() {
    const { state } = useContext(GlobalContext)
    const [scrolled, setScrolled] = useState(false)

    addEventListener('scroll', () => {
        if (state.notebookZoomIn) {
            setScrolled(true)
        }
    })

    return (
        <>
        <AnimatePresence>
            {
                state.notebookZoomIn &&
                <MotionConfig>
                    <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    style={{ zIndex: 40 }}
                    className="w-screen h-screen absolute bg-black">
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        className="h-screen bg-cover bg-bottom bg-no-repeat"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgb(0 0 0 / 70%), rgb(0 0 0 / 100%)), url("./profile.jpg")' }}
                        >
                            <>
                                <img 
                                style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 25%, black 100%)" }} 
                                src="./space.jpg" 
                                className="h-screen w-screen object-cover absolute opacity-15"
                                />
                                <img 
                                style={{ top: '100vh' }} 
                                src="./space.jpg" 
                                className="h-screen w-screen object-right-bottom rotate-180 object-cover absolute opacity-15"
                                />
                                <img 
                                style={{ top: '200vh' }} 
                                src="./space.jpg" 
                                className="h-screen w-screen object-right-bottom object-cover absolute opacity-15"
                                />
                                <img 
                                style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 25%, black 100%)", top: '300vh' }} 
                                src="./space.jpg" 
                                className="h-screen w-screen rotate-180 object-right-bottom object-cover absolute opacity-15"
                                />
                            </>
                            <div className="absolute overflow-visible w-screen">
                                <div id="content" style={{ zIndex: 70, fontFamily: '"Platypi"' }} className="transition-all items-center flex flex-col overflow-y-visible text-white w-full">
                                    <div className="flex sm:mb-52 gap-32 mt-28 mx-10 sm:mx-16 flex-col sm:gap-14 md:gap-28 md:flex-row-reverse">
                                        <Contact />
                                        <About />
                                    </div>
                                    <Jobs />
                                    <Benefits />
                                </div>
                            </div>
                        </motion.div>
                    </motion.main>
                </MotionConfig>
            }
        </AnimatePresence>
        <AnimatePresence>
            {
                (state.notebookZoomIn && !scrolled) &&
                <MotionConfig transition={{ duration: 3 }}>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    
                    style={{ zIndex: 300}}
                    className="fixed border-t-2 border-green-500 font-black m-3 p-3 rounded-md bottom-0 left-0 text-white bg-black"
                    >
                        Scroll!
                    </motion.div>
                </MotionConfig>
            }
        </AnimatePresence>
        </>
    )
}