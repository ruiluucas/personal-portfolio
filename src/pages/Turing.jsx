import { easings, useSpring, useTrail, animated } from '@react-spring/web'
import TrailLength from '../assets/animations/TrailLength'
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

export default function Turing() {
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
        className="flex h-screen flex-1 flex-col items-center justify-center"
      >
        <img
          className="h-52 w-80 rounded-xl object-cover"
          src="https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/04/alan-turing-inventor-informatica-espia-codigo-enigma-segunda-guerra-mundial.jpg"
          alt=""
        />
        <h1 className="text-3xl">Alan Turing</h1>
        <div className="flex w-1/2 flex-col gap-2 text-center text-justify text-xl">
          <p>
            Alan Turing foi um matemático, cientista da computação e
            criptoanalista britânico. Ele é amplamente conhecido por seu
            trabalho durante a Segunda Guerra Mundial, onde ajudou a quebrar o
            código secreto alemão chamado Enigma, usado pela Marinha alemã para
            enviar mensagens criptografadas. Sua contribuição nessa área foi
            crucial para o esforço de guerra dos Aliados.
          </p>
          <p>
            Infelizmente, apesar de suas contribuições significativas, Turing
            foi perseguido devido a sua homossexualidade. Ele foi condenado
            criminalmente por &quot;indecência grave&quot; em 1952 e foi
            submetido a tratamentos de castração química. Turing morreu em 1954,
            mas seu legado e suas contribuições para a ciência da computação são
            amplamente reconhecidos atualmente. Em 2013, Turing recebeu um
            perdão real póstumo da Rainha Elizabeth II.
          </p>
        </div>
      </animated.div>
    </main>
  )
}
