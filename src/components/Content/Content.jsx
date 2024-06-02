import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { useContext, useRef, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import Contact from "./components/Contact"
import About from "./components/About"
import Jobs from "./components/Jobs"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import { useFollowPointer } from "../../hooks/useFollowPointer"

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
                    className="w-screen h-screen absolute">
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        className="h-screen bg-cover bg-bottom bg-no-repeat"
                        >
                            <img 
                            style={{ WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 100%)" }} 
                            src="./profile.jpg" 
                            className="h-screen pointer-events-none select-none w-screen object-cover absolute opacity-40"
                            />
                            <div className="absolute overflow-visible bg-black bg-opacity-40 w-screen">
                                <div id="content" style={{ zIndex: 70, fontFamily: '"Platypi"' }} className="transition-all items-center flex flex-col overflow-y-visible text-white w-full">
                                    <div className="flex sm:gap-32 sm:h-screen mx-10 sm:mx-16 flex-col sm:gap-14 md:gap-28 md:flex-row-reverse">
                                        <Contact />
                                        <About />
                                    </div>
                                    <Jobs />
                                    <Benefits />
                                    <Footer />
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