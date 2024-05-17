import { easings, useSpring, useTrail, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react'

export default function Process() {
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
          src="https://teachyourkidscode.com/wp-content/uploads/2018/09/slide_3-e1536284908144.jpg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-bold flex-1 font-mono text-5xl">
            Sistema binário para decimal
          </h1>
          <div className="flex max-w-3xl flex-1 flex-row gap-2 gap-6 text-justify text-xl">
            <p>
              A conversão de números binários para números decimais é baseada no
              sistema posicional, onde cada dígito binário representa uma
              potência de 2. Para converter um número binário em decimal, você
              precisa multiplicar cada dígito binário pelo valor correspondente
              da posição e, em seguida, somar esses valores. Por exemplo, para
              converter o binário "1010" em decimal, você multiplicaria o
              primeiro dígito (1) por 2 elevado à quarta potência, o segundo
              dígito (0) por 2 elevado à terceira potência, o terceiro dígito
              (1) por 2 elevado à segunda potência e o quarto dígito (0) por 2
              elevado à primeira potência. Em seguida, você soma esses valores
              para obter o resultado decimal.
            </p>
            <p>
              A conversão de números binários para letras envolve o uso de um
              código de caractere, como o ASCII ou o Unicode. Esses códigos
              atribuem um número único a cada caractere. Por exemplo, no código
              ASCII, a letra "A" corresponde ao número decimal 65. Para
              converter um número binário em uma letra, você precisa primeiro
              converter o binário em decimal, usando o método descrito acima. Em
              seguida, você pode usar a tabela de códigos de caracteres para
              encontrar o caractere correspondente ao número decimal obtido. Por
              exemplo, se você converteu o binário "01000001" em decimal e
              obteve o número 65, pode consultar a tabela ASCII para descobrir
              que o número 65 corresponde à letra "A". Dessa forma, você pode
              converter números binários em letras utilizando um código de
              caractere específico.
            </p>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
