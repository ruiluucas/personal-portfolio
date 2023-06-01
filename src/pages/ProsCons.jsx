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
          <div className="flex max-w-3xl flex-1 flex-row gap-6 text-justify text-xl">
            <p>
              Existem vários benefícios em trabalhar na área de TI. Os
              profissionais de TI geralmente desfrutam de uma demanda constante
              por seus serviços, o que significa uma maior estabilidade no
              mercado de trabalho. Além disso, a tecnologia está sempre
              evoluindo, o que oferece oportunidades contínuas de aprendizado e
              crescimento profissional.
            </p>
            <p>
              No entanto, é importante estar ciente dos desafios que vêm com
              essa área. Os profissionais de TI muitas vezes enfrentam prazos
              apertados, pressão por resultados e a necessidade de se manter
              atualizados com as últimas tendências e tecnologias. Além disso, a
              natureza da profissão pode exigir longas horas de trabalho e
              equilíbrio entre vida pessoal e profissional.
            </p>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
