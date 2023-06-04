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
          <h1 className="mb-2 px-16 font-mono text-3xl font-bold">
            Prós e contras de trabalhar na área de TI
          </h1>

          <div className="mb-3 px-16 text-sm">
            <h2 className="mb-2 text-sm font-bold">Prós:</h2>
            <ul className="ml-6 flex list-disc flex-col gap-2 text-justify text-base">
              <li>
                <strong>Oportunidades de carreira:</strong> A área de TI oferece
                um vasto leque de oportunidades de carreira. Desde
                desenvolvimento de software, segurança cibernética, análise de
                dados, até gerenciamento de projetos, há diversas áreas em que
                os profissionais de TI podem se especializar e crescer
                profissionalmente.
              </li>
              <li>
                <strong>Remuneração atrativa:</strong> Geralmente, os
                profissionais de TI têm salários competitivos. Devido à alta
                demanda por habilidades técnicas e ao constante avanço da
                tecnologia, muitas empresas estão dispostas a oferecer salários
                atrativos para atrair e reter talentos na área.
              </li>
              <li>
                <strong>Inovação e aprendizado contínuo:</strong> A TI é um
                campo dinâmico e em constante evolução. Trabalhar nessa área
                significa estar envolvido com novas tecnologias, tendências e
                inovações. Isso proporciona um ambiente de aprendizado contínuo,
                onde os profissionais têm a oportunidade de se manter
                atualizados e adquirir novas habilidades.
              </li>
              <li>
                <strong>Flexibilidade e opções de trabalho remoto:</strong> Com
                as tecnologias e ferramentas disponíveis atualmente, muitos
                profissionais de TI desfrutam de flexibilidade no local de
                trabalho. O trabalho remoto ou horários flexíveis são cada vez
                mais comuns, o que pode trazer mais equilíbrio entre trabalho e
                vida pessoal.
              </li>
            </ul>
          </div>

          <div className="mb-3 px-16">
            <h2 className="mb-2 text-sm font-bold">Contras:</h2>
            <ul className="ml-6 flex list-disc flex-col gap-2 text-justify text-base">
              <li>
                <strong>Pressão e prazos apertados:</strong> A natureza da TI
                frequentemente envolve prazos apertados e pressão para entregar
                resultados. A necessidade de lidar com problemas técnicos
                complexos e cumprir cronogramas rigorosos pode causar estresse e
                exigir habilidades de gerenciamento de tempo e resiliência.
              </li>
              <li>
                <strong>Manter-se atualizado:</strong> Como mencionado
                anteriormente, a TI está em constante evolução, o que significa
                que os profissionais da área devem se manter atualizados com as
                últimas tecnologias e tendências. Isso requer um compromisso
                contínuo de aprendizado e aquisição de novas habilidades, o que
                pode ser desafiador para alguns.
              </li>
              <li>
                <strong>Ritmo acelerado:</strong> A TI é conhecida por seu ritmo
                acelerado, especialmente em empresas de tecnologia e startups. A
                necessidade de se adaptar rapidamente a mudanças, lidar com
                demandas urgentes e trabalhar em projetos simultâneos pode
                resultar em longas horas de trabalho e pressão constante.
              </li>
              <li>
                <strong>Dependência de tecnologia:</strong> Como profissional de
                TI, você estará lidando com sistemas e infraestrutura
                tecnológica, o que pode levar a situações de dependência e
                urgência. Problemas técnicos inesperados, falhas de sistemas ou
                interrupções no trabalho podem ocorrer e exigir resolução
                rápida, mesmo fora do horário de trabalho.
              </li>
            </ul>
          </div>
        </div>
      </animated.div>
    </main>
  )
}
