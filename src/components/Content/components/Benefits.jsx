import { Computer, Light, MobileFriendly, Timelapse } from "@mui/icons-material"
import { motion, AnimatePresence, MotionConfig, delay, easeIn } from "framer-motion"

const benefitsItens = [
    [
        {
            icon: <Light fontSize="large" className="text-green-500" />,
            title: "Alinhamento sólido",
            text: "Trabalho em estreita colaboração com você para entender suas necessidades e objetivos, garantindo que cada projeto reflete fielmente suas ideias e expectativas. A comunicação constante e clara é a chave para o sucesso do nosso trabalho conjunto."
        },
        {
            icon: <MobileFriendly fontSize="large" className="text-green-500" />,
            title: "Aplicações adequadas",
            text: "Crio aplicações que oferecem uma experiência de usuário excepcional em qualquer dispositivo, desde desktops até smartphones. A responsividade é um componente crucial, garantindo que seu projeto seja acessível e visualmente atraente em todas as plataformas."
        },
    ],
    [
        {
            icon: <Computer fontSize="large" className="text-green-500" />,
            title: "Engenharia de software",
            text: "Desenvolvo soluções robustas e escaláveis utilizando as melhores práticas de engenharia de software, garantindo um código limpo, eficiente e fácil de manter. Cada projeto é cuidadosamente planejado e executado para assegurar a máxima qualidade e desempenho."
        },
        {
            icon: <Timelapse fontSize="large" className="text-green-500" />,
            title: "Entrega e suporte",
            text: "Comprometo-me com prazos rigorosos e entregas pontuais, garantindo que seu projeto seja concluído no tempo acordado. Além disso, ofereço suporte contínuo após a entrega para resolver quaisquer problemas e implementar melhorias conforme necessário."
        }
    ]
]

const benefitsItensVariants = {
    span: {
        hidden: { opacity: 0, y: -10, transition: { duration: 1 } },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } }
    },
    h4: {
        hidden: { opacity: 0,  y: -10, transition: { duration: 1 } },
        visible: { opacity: 1,  y: 0, transition: { duration: 2, delay: 0.2 } }
    },
    p: {
        hidden: { opacity: 0,  y: -10, transition: { duration: 1 } },
        visible: { opacity: 1,  y: 0, transition: { duration: 2, delay: 0.4 } }
    }
}

export default function Benefits() {
    return (
        <AnimatePresence>
            <div 
            className=" flex flex-col py-20 items-center"
            id="benefits"
            >
                <div 
                className="gap-5 rounded-md flex flex-col md:flex-row text-whit [&>div>div]:mx-5 [&>div>div]:my-5 [&>div>div>h4]:font-semibold [&>div>div>h4]:text-xl [&>div>div>h4]:text-green-500"
                >
                    <div className="flex flex-col gap-3 md:gap-10 [&>div>p]:text-center [&>div>h4]:text-center [&>div]:flex [&>div]:flex-col [&>div]:items-center">
                        {
                            benefitsItens[0].map((item) => {
                                return (
                                    <div className="gap-3 flex flex-col items-center max-w-80 h-min md:h-48" key={item.title}>
                                        <motion.span 
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={benefitsItensVariants.span}
                                        className="text-base h-full"
                                        >{item.icon}</motion.span>
                                        <motion.h4 
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={benefitsItensVariants.h4}
                                        className="text-center"
                                        >{item.title}</motion.h4>
                                        <motion.p
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={benefitsItensVariants.p}
                                        className="text-center font-extralight text-sm"
                                        >{item.text}</motion.p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-10">
                        {
                            benefitsItens[1].map((item) => {
                                return (
                                    <div className="gap-3 flex flex-col items-center max-w-80 h-min md:h-48" key={item.title}>
                                        <motion.span 
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={benefitsItensVariants.span}
                                        className="text-base h-full"
                                        >{item.icon}</motion.span>
                                        <motion.h4 
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={benefitsItensVariants.h4}
                                        className="text-center"
                                        >{item.title}</motion.h4>
                                        <motion.p
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={benefitsItensVariants.p}
                                        className="text-center font-extralight text-sm"
                                        >{item.text}</motion.p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

/*
<div className="gap-3">
                            <motion.span 
                            initial="hidden"
                            whileInView="visible"
                            variants={benefitsItens.span}
                            >
                                <Light fontSize="large" className="text-green-500" />
                            </motion.span>
                            <motion.h4 
                            initial="hidden"
                            whileInView="visible"
                            variants={benefitsItens.h4}
                            >
                                Alinhamento sólido
                            </motion.h4>
                            <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={benefitsItens.p}
                            >
                                Trabalho em estreita colaboração com você para 
                                entender suas necessidades e objetivos, garantindo 
                                que cada projeto reflete fielmente suas ideias e 
                                expectativas. A comunicação constante e clara é a 
                                chave para o sucesso do nosso trabalho conjunto.
                            </motion.p>
                        </div>
                        */