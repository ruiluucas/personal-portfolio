import { motion } from "framer-motion";

const highlights = [
  { label: "Web", value: "React · Next.js · Vite" },
  { label: "Back-end", value: "Node · Bun · Python · PHP" },
  { label: "Dados & IA", value: "TensorFlow · YOLO · B3" },
  { label: "Infra", value: "Docker · Linux · CI/CD" },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 2, delay: 1 } }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 2, delay: 2 } }}
      className="pt-16 sm:pt-24 md:h-min flex items-start"
      id="about"
    >
      <div className="mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circInOut" }}
          className="mb-3 pointer-events-none"
        >
          <h1 className="text-3xl text-green-500 font-bold">
            Engenheiro de Software
          </h1>
          <p className="text-lg font-light text-white/70">
            Web · IA aplicada · Dados · Infraestrutura
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circInOut" }}
          className="font-light max-w-md pointer-events-none [&>span]:pointer-events-auto [&>span]:cursor-default [&>span]:transition-all [&>span]:font-semibold"
        >
          Construo software de ponta a ponta: da interface em{" "}
          <span className="text-green-500">React</span> e{" "}
          <span className="text-green-500">Next.js</span> às APIs em{" "}
          <span className="text-green-500">Node</span>,{" "}
          <span className="text-green-500">Bun</span>,{" "}
          <span className="text-green-500">Python</span> e{" "}
          <span className="text-green-500">PHP</span>, com bancos relacionais,
          Redis e <span className="text-green-500">Docker</span> no meio. Aplico{" "}
          <span className="text-green-500">machine learning</span> em problemas
          reais — visão computacional com{" "}
          <span className="text-green-500">YOLO</span> e{" "}
          <span className="text-green-500">TensorFlow</span>, modelos rodando em
          ESP32 e no navegador — e também em dados de mercado, com backtesting e
          modelagem sobre a <span className="text-green-500">B3</span>. Publico{" "}
          <span className="text-green-500">bibliotecas open source</span> para
          React Native e escrevo sobre engenharia, infraestrutura e inteligência
          artificial.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "circInOut" }}
          className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md pointer-events-none"
        >
          {highlights.map((item) => (
            <li key={item.label} className="flex flex-col">
              <span className="text-[11px] uppercase tracking-widest text-green-500/80">
                {item.label}
              </span>
              <span className="text-sm font-light">{item.value}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
