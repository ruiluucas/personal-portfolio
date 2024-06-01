import { Email, GitHub, Phone, Telegram, WhatsApp } from "@mui/icons-material";
import { motion, AnimatePresence, MotionConfig } from "framer-motion"

export default function Contact() {
    return (
        <motion.div 
        initial={{ opacity: 0, transition: { duration: 2, delay: 1 }}}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
        className="flex pt-32 flex-col sm:h-min"
        id="contact"
        >
            <span style={{ textShadow: "0 0 5px #FFF, 0 0 100px #FFF" }} className="text-2xl">Entre em contato e faça um</span>
            <span style={{ textShadow: "0 0 5px #FFF, 0 0 100px #FFF" }} className="text-3xl font-bold">orçamento!</span>
            <div className="flex font-extralight gap-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 flex-col mt-5">
                <span>
                    <GitHub />
                    { ' ' }
                    Github
                </span>
                <span>
                    <Phone />
                    { ' ' }
                    Telefone
                </span>
                <span>
                    <WhatsApp />
                    { ' ' }
                    WhatsApp
                </span>
                <span>
                    <Email />
                    { ' ' }
                    Email
                </span>
                <span>
                    <Telegram />
                    { ' ' }
                    Telegram
                </span>
            </div>
        </motion.div>
    )
}