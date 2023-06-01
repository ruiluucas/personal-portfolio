import { easings, useSpring, animated } from '@react-spring/web'
import React from 'react'
import { motion } from 'framer-motion'

export default function Programmer() {
  const [props] = useSpring(() => ({
    from: { x: 20, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: {
      duration: 3000,
      tension: 170,
      friction: 26,
      easing: easings.easeOutExpo,
    },
  }))

  return (
    <main className="absolute left-0 right-0 z-20 flex w-screen items-center justify-center overflow-hidden">
      <motion.img
        className="transparent absolute z-10 object-center opacity-30"
        src="/scriptcode.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      />
      <animated.div
        style={props}
        className="z-20 flex h-screen flex-1 items-center justify-center gap-6"
      >
        <img
          className="w-5/4 h-80 rounded-xl object-cover"
          src="https://preview.redd.it/llco6ox2nxnz.jpg?auto=webp&s=c88eaaba3fd4a5c9044c9f32c286cc1326e5670b"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-bold flex-1 font-mono text-5xl">
            O que um profissional de TI faz
          </h1>
          <div className="flex max-w-3xl flex-1 flex-row gap-6 text-justify text-xl">
            <p>
              Um profissional de TI é responsável por uma ampla gama de
              atividades relacionadas à tecnologia da informação. Eles podem
              estar envolvidos no desenvolvimento de software, manutenção de
              redes e sistemas, suporte técnico aos usuários, gerenciamento de
              banco de dados, segurança da informação e muito mais.
            </p>
            <p>
              Esses profissionais são especialistas em solucionar problemas
              tecnológicos e garantir que os sistemas e infraestruturas de uma
              organização estejam funcionando de forma eficiente. Eles podem
              trabalhar em empresas de diversos setores, desde startups de
              tecnologia até grandes corporações, desempenhando um papel
              fundamental no suporte e no avanço das operações comerciais.
            </p>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
