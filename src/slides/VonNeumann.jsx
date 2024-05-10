export default function VonNeumann() {
  return (
    <main className="flex h-screen w-screen justify-center">
      <div className="flex gap-6 pt-8">
        <div className="flex flex-col items-center gap-3">
          <img
            className="h-80 w-80 rounded-xl object-cover"
            src="https://cdn.economy-pedia.com/2058188/john_von_neumann_-_biografa-_quin_es_y_qu_hizo_2021_economy-wikicom.jpg.webp"
            alt=""
          />
          <img
            className="h-60 w-60 rounded-xl bg-gray-600 object-cover"
            src="https://cecead.com/wp-content/uploads/2019/02/Arquitetura_de_von_Neumann.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-mono text-3xl">Von Neumann</h1>
          <div className="flex w-full gap-6 text-justify">
            <div className="flex w-96 flex-col gap-3">
              <p>
                A Máquina de Turing era uma construção teórica e não se traduzia
                diretamente em uma máquina física. Foi John von Neumann que
                levou a teoria de Turing e a aplicou na prática, desenvolvendo a
                arquitetura de von Neumann. Essa arquitetura, também conhecida
                como arquitetura de armazenamento de programa, introduziu a
                ideia de armazenar instruções e dados na memória principal de um
                computador.
              </p>
              <p>
                A arquitetura de von Neumann era composta por quatro componentes
                principais: unidade central de processamento (CPU), memória
                principal, entrada e saída de dados e unidade de controle. A CPU
                era responsável por buscar instruções da memória e executá-las,
                realizando operações aritméticas e lógicas. A memória principal
                armazenava tanto as instruções do programa quanto os dados de
                entrada e saída. A entrada e saída de dados permitiam que o
                computador se comunicasse com o mundo exterior. A unidade de
                controle coordenava todas as operações e instruções, garantindo
                a execução correta e sequencial do programa.
              </p>
            </div>
            <div className="flex w-96 flex-col gap-3">
              <p>
                Essa arquitetura permitiu uma maior flexibilidade e eficiência
                na execução de programas, em comparação com as máquinas
                anteriores, que eram construídas para realizar tarefas
                específicas. Com a arquitetura de von Neumann, os computadores
                se tornaram mais versáteis e puderam ser programados para
                executar uma variedade de tarefas, desde cálculos científicos
                até tarefas comerciais e administrativas.
              </p>
              <p>
                Em suma, a transição da Máquina de Turing para a arquitetura de
                von Neumann foi um marco importante na história da computação,
                tornando possível a construção de computadores programáveis e
                flexíveis. As contribuições de John von Neumann nesse processo
                foram cruciais, transformando a teoria abstrata em uma
                arquitetura prática e estabelecendo as bases para o
                desenvolvimento dos computadores modernos que utilizamos hoje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
