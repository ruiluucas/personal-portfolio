import Space from "./Space/Space";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  LayoutGroup,
} from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useProgress } from "@react-three/drei";
import ErrorBoundary from "../ErrorBoundary";

export default function Apresentation() {
  const { state, dispatch } = useContext(GlobalContext);
  const { progress, errors } = useProgress();
  const [loadingTimedOut, setLoadingTimedOut] = useState(false);

  // A tela de loading nao pode segurar o site para sempre: se os assets nao
  // chegarem (rede, CDN, WebGL indisponivel), libera o conteudo mesmo assim.
  useEffect(() => {
    const timer = setTimeout(() => setLoadingTimedOut(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading =
    progress !== 100 && errors.length === 0 && !loadingTimedOut;

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <>
      <div className="fixed z-0 h-full w-full">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
              style={{ fontFamily: '"Platypi"', fontWeight: 900, zIndex: 500 }}
              className="flex fixed top-0 left-0 justify-center items-center text-green-500 font-extralight text-4xl h-screen w-screen bg-black"
            >
              <p>Loading...</p>
            </motion.div>
          )}
        </AnimatePresence>
        <ErrorBoundary fallback={<div className="fixed inset-0 -z-10 bg-black" />}>
          <Space />
        </ErrorBoundary>
      </div>
      <div
        style={{ fontFamily: '"Platypi"', fontWeight: 900 }}
        className="fixed cursor-pointer z-30 flex h-full w-full text-white"
        onClick={() => {
          dispatch({ type: "ACTIVE_ZOOM_IN" });
        }}
      >
        <div
          className="flex justify-center items-end"
          onClick={() => {
            dispatch({ type: "ACTIVE_ZOOM_IN" });
          }}
        >
          <div className="flex flex-col leading-3 m-10 mb-20 sm:m-20">
            <AnimatePresence>
              {!state.notebookZoomIn && progress == 100 && (
                <LayoutGroup>
                  <MotionConfig>
                    <motion.p
                      key="name"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 2,
                          ease: "circOut",
                          delay: 0.6,
                        },
                      }}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                      className="tracking-tight sm:text-5xl text-4xl cursor-pointer"
                    >
                      Rui Lucas
                    </motion.p>
                  </MotionConfig>
                  <MotionConfig>
                    <motion.p
                      key="title"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 2.4,
                          ease: "circOut",
                          delay: 1,
                        },
                      }}
                      exit={{ opacity: 0, transition: { duration: 0.6 } }}
                      className="tracking-tight sm:text-3xl text-xl cursor-pointer"
                    >
                      Engenheiro de Software
                    </motion.p>
                  </MotionConfig>
                  <MotionConfig>
                    <motion.button
                      key="title"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 2.8,
                          ease: "circOut",
                          delay: 1.4,
                        },
                      }}
                      exit={{ opacity: 0, transition: { duration: 0.6 } }}
                      className="tracking-tight text-sm text-green-500 cursor-pointer"
                    >
                      Clique na tela!
                    </motion.button>
                  </MotionConfig>
                </LayoutGroup>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
