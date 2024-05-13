import members from "../assets/members"
import Space from "../components/3D/Space"
import Header from "../components/Header"
import Title from "../components/Title"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"

export default function Apresentation({ delayChangeLocation }) {
    const activeApresentation = true

    return (
        <>
        <MotionConfig transition={{ duration: 2 }}>
            <AnimatePresence>
                {delayChangeLocation && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                style={{ 
                    transition: "linear",
                    transitionDuration: 3000
                }} 
                className="absolute z-50 bg-black h-full w-full"
                />
                )}
            </AnimatePresence>
        </MotionConfig>
        <div className="absolute z-0 h-full w-full">
            <Space activeCanvas={activeApresentation} delayChangeLocation={delayChangeLocation} />
        </div>
        <div className="absolute z-20 flex h-full w-full flex-col text-white">
            <Header members={members} delayChangeLocation={delayChangeLocation} />
            <Title members={members} delayChangeLocation={delayChangeLocation} />
        </div>
        </>
    )
}