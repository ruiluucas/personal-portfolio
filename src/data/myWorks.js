// Projetos exibidos na seção "Trabalhos".
// Regra: só entra o que tem evidência (repositório, publicação ou site no ar).
const myWorks = [
  {
    img: "./my-works/images/aurah.png",
    title: "Aurah — plataforma de profissionais",
    year: "2026",
    text: "Plataforma com recomendação por IA para conectar profissionais e clientes. Monorepo com API em Laravel 12 (PHP 8.4 + PostgreSQL 17), serviço de recomendação em FastAPI + Qdrant, chat e mídia em Node, e app mobile em Expo/React Native — tudo em Docker.",
    tags: ["Laravel", "FastAPI", "Qdrant", "Expo", "Docker"],
    link: "https://useaurah.com",
  },
  {
    img: "./my-works/images/flashview.png",
    title: "FlashView — visão sem câmera (CSI)",
    year: "2026",
    text: "Sistema que usa sinais de rádio (CSI de ESP32) para detectar presença e queda onde câmera não pode entrar. Captura ao vivo, rotulagem de dataset, treino e inferência local. Base da oficina \"Enxergando sem Câmeras\" na UNIPAR.",
    tags: ["ESP32", "TensorFlow", "Bun/Elysia", "PostgreSQL", "Redis"],
    link: "",
  },
  {
    img: "./my-works/images/sticky-tab.png",
    title: "react-native-profile-sticky-tab",
    year: "2026",
    text: "Biblioteca open source publicada no npm: cabeçalho sticky com perfil colapsável e scroll sincronizado entre FlatList, FlashList e ScrollView, sobre Reanimated. TypeScript, com pipeline de build e publicação automatizados.",
    tags: ["React Native", "Reanimated", "TypeScript", "CI/CD"],
    link: "https://www.npmjs.com/package/react-native-profile-sticky-tab",
  },
  {
    img: "./my-works/images/quant.png",
    title: "Análise quantitativa de mercado",
    year: "2026",
    text: "Modelagem e backtesting em Python sobre dados da B3: superfície de volatilidade, proventos, open interest e séries macro. Ponte própria levando MetaTrader 5 (rodando em Wine) para Python via RPC, com relatórios do Strategy Tester.",
    tags: ["Python", "pandas", "Polars", "B3", "MetaTrader 5"],
    link: "",
  },
  {
    img: "./my-works/images/civic-pulse.png",
    title: "Civic Pulse",
    year: "2025",
    text: "Aplicação cívica para acompanhar e publicar informações de interesse público, com front-end em TypeScript e deploy contínuo na Vercel.",
    tags: ["TypeScript", "React", "Vercel"],
    link: "https://falapovo.vercel.app",
  },
  {
    img: "./my-works/images/truco-ia-machine.png",
    title: "Robô de truco com visão computacional",
    year: "2024",
    text: "Robô capaz de jogar truco 1v1: detecta as cartas pela webcam em tempo real com YOLOv8 e gerencia o estado do jogo sozinho. Versão anterior rodava em C++ com Arduino.",
    tags: ["Python", "YOLOv8", "OpenCV", "Arduino"],
    link: "https://github.com/ruiluucas/truco-ia-machine",
  },
  {
    img: "./my-works/images/chromecluster.png",
    title: "ChromeCluster",
    year: "2024",
    text: "Reaproveitamento de Chromebooks descartados como nós de um cluster Docker Swarm para laboratório e ensino — incluindo scripts de provisionamento e a base de conhecimento do projeto.",
    tags: ["Docker Swarm", "Linux", "Infraestrutura"],
    link: "https://github.com/Inovatech-LTDA/ChromeCluster",
  },
  {
    img: "./my-works/images/meta-publisher.png",
    title: "Publicação automática de posts",
    year: "2026",
    text: "Automação que publica os posts institucionais do Polo UAB de Cruzeiro do Oeste na Página do Facebook e no Instagram profissional via Graph API, a partir de um repositório de conteúdo versionado.",
    tags: ["Node.js", "Meta Graph API", "Automação"],
    link: "",
  },
  {
    img: "./my-works/images/ecommerce.png",
    title: "E-commerce",
    year: "2024",
    text: "Loja completa e responsiva construída em Angular, com componentes Material e Tailwind, cobrindo catálogo, carrinho e checkout.",
    tags: ["Angular", "Material", "Tailwind"],
    link: "https://github.com/ruiluucas/ecommerce",
  },
];

export default myWorks;
