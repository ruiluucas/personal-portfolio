import { motion } from "framer-motion";

const timeline = [
  {
    period: "2025 — atual",
    title: "Estágio em TI · Prefeitura Municipal de Cruzeiro do Oeste",
    text: "Suporte à supervisão dos computadores e aos projetos de software municipais. Responsável também pela automação da divulgação institucional do Polo UAB de Cruzeiro do Oeste, publicando posts na Página do Facebook e no Instagram via API.",
    tags: ["Infraestrutura", "Automação", "Meta Graph API"],
  },
  {
    period: "2024 — atual",
    title: "Desenvolvedor de software · Autônomo",
    text: "Projetos web, mobile e APIs para clientes e uso próprio: landing pages, sistemas full stack, aplicativos em React Native/Expo e integrações. É dessa frente que saem o Aurah, as bibliotecas open source e as ferramentas de dados.",
    tags: ["React", "React Native", "Laravel", "Python"],
  },
  {
    period: "2024",
    title: "Estágio em Sistemas de Informação · InovaTech / Unipar",
    text: "Desenvolvimento de inovações tecnológicas e estudo de programação, redes e sistemas operacionais. Saíram desse período o robô de truco com visão computacional (YOLOv8), o ChromeCluster (Chromebooks reativados como nós de Docker Swarm) e a documentação de infraestrutura enterprise do GigaClusterLab.",
    tags: ["YOLOv8", "Docker Swarm", "Redes"],
  },
  {
    period: "2025",
    title: "Minicurso de redes neurais · BRINFU",
    text: "MLP, CNN, RNN e transformers, fechando com serviços de nuvem para aplicações de IA. No mesmo período, 1º lugar no CTF Universitário da BRINFU.",
    tags: ["Machine Learning", "Docência", "CTF"],
  },
  {
    period: "2026",
    title: "Oficina \"Enxergando sem Câmeras\" · UNIPAR",
    text: "Do sinal de rádio à rede neural: extração de CSI de um ESP32, tratamento e rotulagem de dados e treino do modelo, com demonstração ao vivo do FlashView.",
    tags: ["ESP32", "CSI", "TensorFlow"],
  },
  {
    period: "2024 — 2027",
    title: "Bacharelado em Gestão de Sistemas de Informação · Unipar",
    text: "Formação em andamento, com foco em desenvolvimento, banco de dados, redes e gestão de projetos de software.",
    tags: ["Graduação"],
  },
];

export default function Experience() {
  return (
    <motion.div
      id="experience"
      className="flex flex-col w-screen max-w-screen-lg mx-auto px-6 py-24 items-start"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-3xl text-green-500 font-bold mb-8"
      >
        Trajetória
      </motion.h2>
      <ol className="relative border-l border-green-500/30 flex flex-col gap-8 w-full">
        {timeline.map((item, key) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + key * 0.1, ease: "circInOut" }}
            className="ml-5 pl-4"
          >
            <span className="absolute -left-[5px] mt-2 w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-xs uppercase tracking-widest text-green-500/80">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm font-light text-white/80 max-w-2xl">
              {item.text}
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[11px] font-light px-2 py-1 rounded-full border border-green-500/60 text-green-500"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
