import Space from "./Space/Space";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  LayoutGroup,
} from "framer-motion";
import React, { Suspense, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useProgress } from "@react-three/drei";

export default function Apresentation() {
  const { state, dispatch } = useContext(GlobalContext);
  const { progress } = useProgress();

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return (
    <>
      <div className="fixed z-0 h-full w-full">
        <AnimatePresence>
          {progress != 100 && (
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
        <Space />
      </div>
      <div
        style={{ fontFamily: '"Platypi"', fontWeight: 900 }}
        className="fixed z-30 flex h-full w-full text-white"
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
                      className="tracking-tight sm:text-3xl text-1xl cursor-pointer"
                    >
                      Software Developer
                    </motion.p>
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
