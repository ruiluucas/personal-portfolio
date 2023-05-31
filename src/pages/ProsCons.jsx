import { easings, useSpring, animated } from '@react-spring/web'
import React from 'react'

export default function ProsCons() {
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
      <animated.div
        style={props}
        className="flex h-screen flex-1 items-center justify-center gap-6"
      >
        <img
          className="w-5/4 h-80 rounded-xl object-cover"
          src="https://example.com/image5.jpg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-bold flex-1 font-mono text-5xl">
            Prós e contras de trabalhar na área de TI
          </h1>
          <div className="flex max-w-3xl flex-1 flex-row gap-2 gap-6 text-justify text-xl">
            <p>
              Nesta página, você pode destacar os benefícios de se trabalhar na
              área de TI, como a alta demanda por profissionais, as
              oportunidades de aprendizado contínuo, a possibilidade de
              trabalhar em projetos desafiadores e inovadores, e a remuneração
              competitiva.
            </p>
            <p>
              Ao mesmo tempo, você pode abordar os desafios da profissão, como a
              necessidade de se manter atualizado com as constantes mudanças
              tecnológicas, os prazos apertados, a pressão por resultados e o
              equilíbrio entre vida pessoal e profissional.
            </p>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
