import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function Content() {
    const { state } = useContext(GlobalContext)

    return (
        <AnimatePresence>
            {
                state.notebookZoomIn &&
                <MotionConfig transition={{ duration: 2, ease: 'circInOut' }}>
                    <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ zIndex: 40 }}
                    className="w-screen h-screen absolute bg-black">
                        
                    </motion.main>
                </MotionConfig>
            }
        </AnimatePresence>
    )
}