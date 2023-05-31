import { easings, useSpring, animated } from '@react-spring/web'
import React from 'react'

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
      <animated.div
        style={props}
        className="flex h-screen flex-1 items-center justify-center gap-6"
      >
        <img
          className="w-5/4 h-80 rounded-xl object-cover"
          src="https://example.com/image2.jpg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-bold flex-1 font-mono text-5xl">
            O que um profissional de TI faz
          </h1>
          <div className="flex max-w-3xl flex-1 flex-row gap-2 gap-6 text-justify text-xl">
            <p>
              Aqui você pode descrever as atividades e responsabilidades de um
              profissional de TI. Por exemplo, desenvolvimento de software,
              administração de redes e sistemas, suporte técnico, gerenciamento
              de banco de dados, segurança da informação, entre outros aspectos
              relevantes da área.
            </p>
            <p>
              Sinta-se à vontade para adicionar mais detalhes sobre as tarefas
              comuns de um profissional de TI e como essas atividades contribuem
              para o funcionamento eficiente dos sistemas de informação de uma
              organização.
            </p>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
