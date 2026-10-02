import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import myWorks from "../../../data/myWorks";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Jobs() {
  const [[job, direction], setJob] = useState([0, 0]);
  const work = myWorks[job];

  const go = (index) => {
    const total = myWorks.length;
    const next = ((index % total) + total) % total;
    setJob([next, next > job ? 1 : -1]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      };
    },
  };

  return (
    <div
      id="jobs"
      className="flex overflow-hidden w-screen flex-col justify-center pt-4"
    >
      <div className="flex h-96 mt-2 mb-6 w-screen max-w-screen-lg mx-auto overflow-hidden justify-center items-center">
        <div className="absolute select-none w-screen max-w-screen-sm flex justify-between">
          <motion.button
            type="button"
            aria-label="Trabalho anterior"
            onClick={() => go(job - 1)}
            style={{ backdropFilter: "blur(5px)" }}
            className="text-xl z-50 left-0 p-3 m-2 rounded-full cursor-pointer"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{
              textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
              transition: {
                duration: 0.2,
                ease: "linear",
              },
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
          >
            {"<"}
          </motion.button>
          <motion.button
            type="button"
            aria-label="Próximo trabalho"
            onClick={() => go(job + 1)}
            style={{ backdropFilter: "blur(5px)" }}
            className="text-xl z-50 right-0 p-3 m-2 rounded-full cursor-pointer"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{
              textShadow: "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF",
              transition: {
                duration: 0.2,
                ease: "linear",
              },
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
          >
            {">"}
          </motion.button>
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
                go(job + 1);
              } else if (swipe > swipeConfidenceThreshold) {
                go(job - 1);
              }
            }}
            style={{ background: `url(${work.img})` }}
            className="flex bg-center mx-auto justify-center flex-wrap gap-5 absolute rounded-xl"
          >
            <div
              style={{ backdropFilter: "blur(5px)" }}
              className="w-80 p-5 bg-black/60 transition-all text-white"
            >
              <motion.img
                className="rounded-lg object-contain transition-all"
                src={work.img}
                alt={work.title}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
              />
              <motion.h3
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "circInOut" },
                }}
                className="font-bold my-2 text-xl"
              >
                {work.title}
              </motion.h3>
              <motion.p
                className="leading-5 text-sm font-extralight"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, ease: "circInOut" },
                }}
              >
                {work.text}
              </motion.p>
              {work.tags?.length > 0 && (
                <motion.ul
                  className="flex flex-wrap gap-2 mt-3"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1.3, ease: "circInOut" },
                  }}
                >
                  {work.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[11px] font-light px-2 py-1 rounded-full border border-green-500/60 text-green-500"
                    >
                      {tag}
                    </li>
                  ))}
                </motion.ul>
              )}
              {work.link && (
                <motion.a
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 text-sm cursor-pointer inline-block"
                  href={work.link}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.4, ease: "circInOut" },
                  }}
                >
                  <motion.p className="mt-3">Ver mais</motion.p>
                </motion.a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        style={{ zIndex: 100 }}
        className="flex select-none justify-center items-center mx-auto"
      >
        {myWorks.map((item, key) => {
          return (
            <motion.button
              type="button"
              key={item.title}
              aria-label={`Ver trabalho: ${item.title}`}
              className="text-5xl pb-5"
              onClick={() => setJob([key, key > job ? 1 : -1])}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: key / 2,
                },
              }}
              animate={{
                textShadow:
                  job === key
                    ? "0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF"
                    : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              .
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
