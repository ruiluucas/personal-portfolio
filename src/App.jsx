import GlobalContextProvider from "./context/GlobalContext";
import Header from "./components/Header/Header";
import Apresentation from "./components/Apresentation/Apresentation";
import Content from "./components/Content/Content";
import { useFollowPointer } from "./hooks/useFollowPointer";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <GlobalContextProvider>
      <motion.div
        ref={ref}
        id="cursor"
        className="hidden md:flex opacity-5 fixed rounded-full blur-3xl pointer-events-none w-96 h-96 bg-white"
        style={{ x, y }}
      ></motion.div>
      <Header />
      <Apresentation />
      <Content />
    </GlobalContextProvider>
  );
}
