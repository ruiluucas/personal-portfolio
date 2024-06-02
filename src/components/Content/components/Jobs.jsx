import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const jobsData = [
    {
        img: "./gtavsetup.png",
        title: "GTA 5 Setup",
        text: "Ao recriar a inicialização e o menu do jogo, esta aplicação oferece uma plataforma interativa para explorar conceitos como respeito, responsabilidade e inclusão. Os usuários são convidados a mergulhar em seções educacionais, onde podem encontrar informações, histórias inspiradoras e recursos para promover uma sociedade mais justa e engajada.",
        link: "https://gtav-setup.vercel.app"
    },
    {
        img: "./hackerbet.png",
        title: "Plataforma de Apostas",
        text: "A interface oferece uma experiência de apostas online com uma interface elegante e fácil de usar. Destacando-se por seu design moderno e navegação intuitiva, a plataforma permite apostas rápidas e seguras, com destaque para a seção ‘Double’, onde os usuários podem escolher números e símbolos da sorte para realizar suas apostas.",
        link: "https://gtav-setup.vercel.app"
    }
]

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Jobs() {
    const [[job, direction], setJob] = useState([0, 0])

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 100 : -100,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
          };
        }
    };

    return (
        <div id="jobs" className="flex overflow-hidden w-screen flex-col justify-center pt-20">
            <div className="flex h-96 mt-16 mb-8 w-screen max-w-screen-lg mx-auto overflow-hidden justify-center items-center">
                <div className="absolute select-none w-screen max-w-screen-sm flex justify-between">
                    <motion.span 
                    onClick={() => { setJob([job === 0 ? jobsData.length - 1 : job - 1, -1]) }}
                    style={{ backdropFilter: "blur(5px)" }} 
                    className="text-xl z-50 left-0 p-3 m-2 rounded-full cursor-pointer"
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{
                        textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                        transition: {
                        duration: 0.2,
                        ease: "linear"
                        }
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1 }
                    }}
                    >
                        {'<'}
                    </motion.span>
                    <motion.span 
                    onClick={() => { setJob([job === (jobsData.length - 1) ? 0 : job + 1, 1]) }}
                    style={{ backdropFilter: "blur(5px)" }} 
                    className="text-xl z-50 right-0 p-3 m-2 rounded-full cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{
                        textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
                        transition: {
                        duration: 0.2,
                        ease: "linear"
                        }
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1 }
                    }}
                    >
                        {'>'}
                    </motion.span>
                </div>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                    key={job}
                    variants={variants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
            
                        if (swipe < -swipeConfidenceThreshold) {
                            setJob([job === 0 ? jobsData.length - 1 : job - 1, 1]);
                        } else if (swipe > swipeConfidenceThreshold) {
                            setJob([job === (jobsData.length - 1) ? 0 : job + 1, -1])
                        }
                    }}
                    style={{ background: `url(${jobsData[job].img})` }} 
                    className="flex bg-center mx-auto justify-center flex-wrap gap-5 absolute rounded-xl">
                        <div 
                        style={{ backdropFilter: "blur(5px)" }} 
                        className="w-80 p-5 transition-all text-white"
                        >
                            <motion.img 
                            className="rounded-lg object-contain transition-all" 
                            src={jobsData[job].img}
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                transition: { duration: 1 }
                            }}
                            />
                            <motion.h3
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, ease: 'circInOut' }
                            }}
                            className="font-bold my-2 text-xl"
                            >
                                {jobsData[job].title}
                            </motion.h3>
                            <motion.p 
                            className="leading-5 text-sm font-extralight"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1.2, ease: 'circInOut' }
                            }}
                            >
                                {jobsData[job].text}
                            </motion.p>
                            <motion.a 
                            target="_blank" 
                            className="text-green-500 text-sm cursor-pointer" 
                            href={jobsData[job].link}
                            >
                                <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1.4, ease: 'circInOut' }
                                }}
                                className="mt-2"
                                >
                                    Clique aqui
                                </motion.p>
                            </motion.a>
                        </div>
                    </motion.div>  
                </AnimatePresence>
            </div>
            <div style={{ zIndex: 100 }} className="flex select-none justify-center items-center mx-auto">
                {jobsData.map((i, key) => {
                    return (
                        <motion.button
                        key={key}
                        className="text-5xl"
                        onClick={() => { setJob([key, key > job ? 1 : -1]) }}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: key / 2
                            }
                        }}
                        animate={{ 
                            textShadow: job === key ? "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF" : "none",
                         }}
                        transition={{ duration: 0.5 }}
                        >
                            .
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}