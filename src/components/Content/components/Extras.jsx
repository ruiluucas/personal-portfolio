import { motion } from "framer-motion";

const courses = [
  {
    period: "2026",
    title: 'Oficina "Enxergando sem Câmeras" · UNIPAR',
    img: "./posts/oficina-csi.jpg",
    text: "Do sinal de rádio à rede neural: captura de CSI com ESP32, tratamento e rotulagem dos dados e treino do modelo, com demonstração ao vivo do FlashView. Wi-Fi sensing — enxergar sem câmera onde ela não pode entrar.",
    tags: ["Wi-Fi sensing", "CSI", "ESP32", "TensorFlow"],
    href: "https://www.linkedin.com/posts/rui-lucas-a-gomes_wifisensing-csi-esp32-activity-7507788220311535616-pVqC",
  },
  {
    period: "2025",
    title: "Minicurso de Redes Neurais · BRINFU",
    img: "./posts/brinfu.jpg",
    text: "MLP, CNN, RNN e transformers explicados do zero, com aplicações reais (previsão de preços, imagens, séries temporais) e fechamento em serviços de nuvem para aplicações de IA.",
    tags: ["Machine Learning", "Docência"],
    href: "https://www.linkedin.com/posts/rui-lucas-a-gomes_no-dia-19-de-agosto-de-2025-tive-a-honra-activity-7364349738000728064-k1Rs",
  },
];

const achievements = [
  "1º lugar — CTF Universitário da BRINFU (2025)",
  "2º lugar — Hackathon Kawslab",
];

const articles = [
  {
    title: "Regressão Linear — Introdução",
    text: "Artigo escrito em 2024 e migrado para o LinkedIn: regressão linear explicada do zero.",
    href: "https://www.linkedin.com/posts/rui-lucas-a-gomes_esse-artigo-foi-escrito-por-mim-em-2024-no-activity-7450249405133201408-Ubrx",
  },
  {
    title: "Módulos Nativos no Expo: Overview — React Native",
    img: "./posts/expo-android.jpg",
    text: "Além do Expo Go: como criar módulos nativos customizados para processamento de mídia.",
    href: "https://www.linkedin.com/posts/rui-lucas-a-gomes_reactnative-expo-android-activity-7452816288504029184-3qB8",
  },
  {
    title: "Comparação de teste de carga: Container Isolado VS Docker Swarm",
    text: "Benchmark de MySQL comparando um container isolado com um serviço orquestrado no Docker Swarm.",
    href: "https://www.linkedin.com/posts/rui-lucas-a-gomes_teste-de-carga-do-mysql-container-isolado-activity-7265481985307889666-6_hu",
  },
];

const posts = [
  {
    title: "Docker Swarm, NFS e teste de carga com JMeter na Inovatech",
    img: "./posts/docker-swarm.jpg",
    text: "Subindo um MySQL em Docker Swarm na Inovatech, com NFS compartilhando os dados entre dois servidores — base do teste de carga com Apache JMeter.",
    href: "https://www.linkedin.com/posts/rui-lucas-a-gomes_atualmente-dentro-do-inovatech-estou-trabalhando-activity-7254218441526571010-gYpM",
  },
];

function WritingList({ items }) {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {items.map((item, key) => (
        <motion.li
          key={item.href}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 + key * 0.08, ease: "circInOut" }}
        >
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex gap-4 items-start group border border-green-500/20 rounded-lg p-3 hover:border-green-500/50 transition-colors"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-28 h-20 object-cover rounded shrink-0"
              />
            )}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-white group-hover:text-green-500 transition-colors">
                {item.title}
              </span>
              <span className="text-xs font-light text-white/70">{item.text}</span>
            </div>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const hardware = [
  {
    title: "Robôs autônomos Zumo",
    text: "Firmware para Zumo Shield (Arduino Uno/Leonardo) e ESP32-S3, com modos de controle por Bluetooth, joystick e joystick BLE.",
    tags: ["Arduino", "ESP32", "C++"],
  },
  {
    title: "Robô de truco embarcado",
    text: "Versão física do robô de truco: rede neural em C++ sobre Arduino, com visão e comunicação Bluetooth.",
    tags: ["C++", "Arduino", "Bluetooth"],
  },
];

export default function Extras() {
  return (
    <motion.div
      id="extras"
      className="flex flex-col w-screen max-w-screen-lg mx-auto px-6 py-24 items-start"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-3xl text-green-500 font-bold mb-8"
      >
        Além do código
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-xs uppercase tracking-widest text-green-500/80 mb-4"
      >
        Cursos e palestras
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {courses.map((item, key) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + key * 0.1, ease: "circInOut" }}
            className="border border-green-500/30 rounded-lg p-5 flex flex-col"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}
            <span className="text-xs uppercase tracking-widest text-green-500/80">
              {item.period}
            </span>
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
            <p className="text-sm font-light text-white/80">{item.text}</p>
            <ul className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[11px] font-light px-2 py-1 rounded-full border border-green-500/60 text-green-500"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-green-500 text-sm mt-3 inline-block hover:underline"
              >
                Ver post ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-xs uppercase tracking-widest text-green-500/80 mt-16 mb-4"
      >
        Conquistas
      </motion.h3>
      <ul className="flex flex-col gap-2">
        {achievements.map((item, key) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + key * 0.1, ease: "circInOut" }}
            className="flex items-center gap-3 text-sm font-light text-white/90"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            {item}
          </motion.li>
        ))}
      </ul>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-xs uppercase tracking-widest text-green-500/80 mt-16 mb-4"
      >
        Artigos publicados
      </motion.h3>
      <WritingList items={articles} />

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-xs uppercase tracking-widest text-green-500/80 mt-12 mb-4"
      >
        Posts no LinkedIn
      </motion.h3>
      <WritingList items={posts} />

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="text-xs uppercase tracking-widest text-green-500/80 mt-16 mb-4"
      >
        Hardware e robótica
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {hardware.map((item, key) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + key * 0.1, ease: "circInOut" }}
            className="border border-green-500/30 rounded-lg p-5"
          >
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
            <p className="text-sm font-light text-white/80">{item.text}</p>
            <ul className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[11px] font-light px-2 py-1 rounded-full border border-green-500/60 text-green-500"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
