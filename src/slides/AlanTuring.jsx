export default function AlanTuring() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex gap-6">
        <img
          className="h-80 w-80 rounded-xl object-cover"
          src="https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/04/alan-turing-inventor-informatica-espia-codigo-enigma-segunda-guerra-mundial.jpg"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-mono text-3xl">Alan Turing</h1>
          <div className="flex w-96 flex-col gap-2 text-justify">
            <p>
              Alan Turing foi um matemático, cientista da computação e
              criptoanalista britânico. Ele é amplamente conhecido por seu
              trabalho durante a Segunda Guerra Mundial, onde ajudou a quebrar o
              código secreto alemão chamado Enigma, usado pela Marinha alemã
              para enviar mensagens criptografadas. Sua contribuição nessa área
              foi crucial para o esforço de guerra dos Aliados.
            </p>
            <p>
              Infelizmente, apesar de suas contribuições significativas, Turing
              foi perseguido devido a sua homossexualidade. Ele foi condenado
              criminalmente por &quot;indecência grave&quot; em 1952 e foi
              submetido a tratamentos de castração química. Turing morreu em
              1954, mas seu legado e suas contribuições para a ciência da
              computação são amplamente reconhecidos atualmente. Em 2013, Turing
              recebeu um perdão real póstumo da Rainha Elizabeth II.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
