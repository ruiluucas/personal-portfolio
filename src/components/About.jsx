import { motion, AnimatePresence, MotionConfig } from "framer-motion"

export default function About() {
    return (
        <motion.div
        initial={{ opacity: 0, transition: { duration: 2, delay: 1 }}}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
        className="h-screen md:h-min flex items-start">
            <div className="mx-auto flex flex-col">
                <div className="mb-3">
                    <h1 className="text-3xl text-green-500 font-semibold">Full Stack Developer </h1>
                    <h1 className="text-3xl text-green-500 font-semibold">e Data Analist</h1>
                </div>
                <p className="font-light max-w-72 [&>span]:transition-all [&>span]:font-semibold">
                    Tenho mais de <span className="hover:text-green-500">3 anos</span> de experiência no desenvolvimento 
                    <span className="hover:text-green-500"> Full-Stack</span>, utilizando 
                    <span className="hover:text-green-500"> JavaScript</span>, 
                    <span className="hover:text-green-500"> Python </span> e 
                    <span className="hover:text-green-500"> PHP</span>. 
                    Meu foco está na aplicação de boas práticas e paradigmas que garantem a criação de sistemas 
                    <span className="hover:text-green-500"> robustos </span>, 
                    <span className="hover:text-green-500"> escaláveis </span> e facilmente 
                    <span className="hover:text-green-500"> manuteníveis </span> ao longo do tempo. 
                    Além disso, possuo experiência significativa em 
                    <span className="hover:text-green-500"> análise de dados </span> e 
                    <span className="hover:text-green-500"> web scraping</span>, onde desenvolvo análises quantitativas e soluções de 
                    <span className="hover:text-green-500"> inteligência artificial </span> para prever resultados futuros e gerar conhecimento sobre dados importantes. 
                </p>
            </div>
        </motion.div>
    )
}