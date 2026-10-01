# Portfólio — Rui Lucas

Site pessoal: apresentação em 3D (React Three Fiber) que dá zoom num notebook e abre o
conteúdo — sobre, trabalhos, trajetória, benefícios e contato.

No ar em **https://ruiluucas.vercel.app** (`/#jobs`, `/#experience` etc. abrem direto na seção).

## Stack

- **React 19** + **Vite 7**
- **Three.js** + **@react-three/fiber** + **drei** + **postprocessing** (cena 3D da abertura)
- **framer-motion** e **react-spring** (animações 2D e 3D)
- **MUI 9** (menu e ícones) + **Tailwind CSS 4**
- **ESLint 9** (flat config)
- **Bun** como gerenciador de pacotes e runner de build

## Como rodar

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # gera dist/
bun run preview  # serve o build
bun run lint
```

### Por que o `dev` roda com Node e não com o Bun

O script `dev` chama o Vite pelo Node (`node ./node_modules/vite/bin/vite.js`).
Executando o Vite com o **runtime** do Bun, o dev server quebra com
`ReferenceError: __WS_TOKEN__ is not defined` e a página fica em branco — bug do Vite 7
sob o runtime do Bun, não do projeto. `bun install`, `bun run build` e `bun run lint`
rodam normalmente no Bun (`dev:bun` fica registrado só para reproduzir o problema).

## Estrutura

```
src/
  components/
    Apresentation/    tela inicial (cena 3D + nome/cargo)
    Header/           barra fixa + menu (MUI)
    Content/          seções: About, Jobs, Experience, Benefits, Contact, Footer
  context/GlobalContext.jsx   estado do zoom (true quando a URL tem âncora)
  data/myWorks.js             lista dos projetos exibidos em "Trabalhos"
  hooks/                      useFollowPointer, useScreenSize
public/
  3d-assets/          cubo LUT e modelo do notebook (.glb)
  my-works/images/    capas dos projetos
```

## Conteúdo

Os dados exibidos (experiência, projetos, stacks) saem do dossiê de carreira em
`~/Projetos/curriculo/` — **nada entra sem evidência** (repositório, publicação ou site no ar).
Para adicionar um trabalho, edite `src/data/myWorks.js` e coloque a imagem em
`public/my-works/images/`.
