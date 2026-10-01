import {
  Computer,
  Light,
  MobileFriendly,
  Timelapse,
} from "@mui/icons-material";
import { motion, AnimatePresence } from 'framer-motion'

const benefitsItens = [
  [
    {
      icon: <Light fontSize="large" className="text-green-500" />,
      title: "Produto de ponta a ponta",
      text: "Do layout ao deploy: interface, API, banco e infraestrutura na mesma mão. Isso encurta o caminho entre a ideia e algo funcionando em produção, sem repassar problema de uma equipe para outra.",
    },
    {
      icon: <MobileFriendly fontSize="large" className="text-green-500" />,
      title: "Experiência em qualquer tela",
      text: "Interfaces responsivas e acessíveis, testadas de verdade em desktop e celular — incluindo apps mobile em React Native e painéis em React com dados em tempo real.",
    },
  ],
  [
    {
      icon: <Computer fontSize="large" className="text-green-500" />,
      title: "IA que roda de verdade",
      text: "Modelos de visão computacional e machine learning aplicados a problemas concretos: inferência local, no navegador e em hardware embarcado, com pipeline de dados versionado e reprodutível.",
    },
    {
      icon: <Timelapse fontSize="large" className="text-green-500" />,
      title: "Código e prazo combinados",
      text: "Escopo e entregas alinhados antes de começar, repositório versionado, documentação junto do código e suporte após a entrega para ajustar o que aparecer no uso real.",
    },
  ],
];

const benefitsItensVariants = {
  span: {
    hidden: { opacity: 0, y: -10, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  },
  h4: {
    hidden: { opacity: 0, y: -10, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.2 } },
  },
  p: {
    hidden: { opacity: 0, y: -10, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.4 } },
  },
};

export default function Benefits() {
  return (
    <AnimatePresence>
      <div
        className=" flex flex-col py-20 mt-5 items-center cursor-default"
        id="benefits"
      >
        <div className="gap-5 rounded-md flex flex-col md:flex-row text-white [&>div>div]:mx-5 [&>div>div]:my-5 [&>div>div>h4]:font-semibold [&>div>div>h4]:text-xl [&>div>div>h4]:text-green-500">
          <div className="flex flex-col gap-3 md:gap-10 [&>div>p]:text-center [&>div>h4]:text-center [&>div]:flex [&>div]:flex-col [&>div]:items-center">
            {benefitsItens[0].map((item) => {
              return (
                <div
                  className="gap-3 flex flex-col items-center max-w-80 h-min md:h-48"
                  key={item.title}
                >
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={benefitsItensVariants.span}
                    className="text-base h-full"
                  >
                    {item.icon}
                  </motion.span>
                  <motion.h4
                    initial="hidden"
                    whileInView="visible"
                    variants={benefitsItensVariants.h4}
                    className="text-center"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={benefitsItensVariants.p}
                    className="text-center font-extralight text-sm"
                  >
                    {item.text}
                  </motion.p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-10">
            {benefitsItens[1].map((item) => {
              return (
                <div
                  className="gap-3 flex flex-col items-center max-w-80 h-min md:h-48"
                  key={item.title}
                >
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={benefitsItensVariants.span}
                    className="text-base h-full"
                  >
                    {item.icon}
                  </motion.span>
                  <motion.h4
                    initial="hidden"
                    whileInView="visible"
                    variants={benefitsItensVariants.h4}
                    className="text-center"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={benefitsItensVariants.p}
                    className="text-center font-extralight text-sm"
                  >
                    {item.text}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
