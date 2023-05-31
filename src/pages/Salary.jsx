import { easings, useSpring, animated } from '@react-spring/web'
import React from 'react'

export default function Salary() {
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
          src="https://example.com/image4.jpg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-bold flex-1 font-mono text-5xl">
            Salário de um profissional de TI
          </h1>
          <div className="flex max-w-3xl flex-1 flex-row gap-2 gap-6 text-justify text-xl">
            <p>
              Nesta página, você pode abordar a faixa salarial de profissionais
              de TI, levando em consideração fatores como experiência,
              especialização, localização geográfica e porte da empresa.
            </p>
            <p>
              Fale sobre as perspectivas de crescimento salarial na área, bem
              como os fatores que podem influenciar os ganhos de um profissional
              de TI, como certificações adicionais, pós-graduação e experiência
              internacional.
            </p>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
