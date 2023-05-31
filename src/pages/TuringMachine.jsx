import { easings, useSpring, useTrail, animated } from '@react-spring/web'
import TrailLength from '../assets/animations/TrailLength'
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

export default function TuringMachine() {
  const characters = ['Bruno', 'Jordan', 'Renan', 'Rui']
  const trailAnchor = useTrail(characters.length, {
    from: { opacity: 0, y: -5 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 1500,
      mass: 5,
      tension: 2000,
      friction: 200,
      easing: easings.easeOutBack,
    },
  })
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
        className="flex h-screen w-1/2 flex-1 flex-col items-center justify-center gap-2 text-justify"
      >
        <img
          className="my-5 h-64 w-96 rounded-xl object-cover"
          src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/Turing_machines_06-1.gif"
          alt=""
        />
        <h1 className="w-4/5 text-3xl">Máquina de Turing</h1>
        <div className="flex w-4/5 gap-10">
          <p>
            A maior contribuição de Turing para a ciência da computação foi o
            conceito da Máquina de Turing. A Máquina de Turing é uma máquina
            teórica inventada por Turing para explorar os limites da computação.
            Ela consiste em uma fita infinita dividida em células, onde cada
            célula pode conter um símbolo. A máquina possui um cabeçote que pode
            ler, escrever e mover-se pela fita. Ela também possui um conjunto de
            regras que determinam seu comportamento.
          </p>
          <p>
            A ideia principal por trás da Máquina de Turing é que ela pode
            simular qualquer algoritmo computacional. Isso significa que, se
            algo puder ser computado, uma Máquina de Turing será capaz de fazer
            isso. Turing usou esse conceito para provar que certos problemas
            matemáticos não podem ser resolvidos por um algoritmo.
          </p>
          <p>
            A Máquina de Turing foi um marco fundamental no desenvolvimento da
            ciência da computação e é considerada o modelo teórico básico para
            todos os computadores modernos. A partir desse conceito, os
            computadores foram projetados e construídos para realizar cálculos e
            resolver problemas complexos.
          </p>
        </div>
      </animated.div>
    </main>
  )
}
