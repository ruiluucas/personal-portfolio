import { useTrail, animated, easings, useSpring } from '@react-spring/web'

export default function Header() {
  const characters = ["Bruno", "Jordan", "Renan", "Rui"]
  const trailAnchor = useTrail(characters.length, {
    from: { opacity: 0, y: -5 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 1500,
      mass: 5, 
      tension: 2000, 
      friction: 200,
      easing: easings.easeOutBack
    }
  })
  const [props] = useSpring(() => ({
    from: { x: 20, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: {
      duration: 3000,
      tension: 170, 
      friction: 26,
      easing: easings.easeOutExpo	
    }
  }))

  return (
    <header className="absolute left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 text-white font-semibold" aria-label="Global">
        <ul className="flex gap-x-12">
          { trailAnchor.map((props, index) => (
            <animated.a style={props} href="#" key={index} className='text-sm leading-6 '>
              <WordAnimation>{characters[index]}</WordAnimation>
            </animated.a>
          )) }
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <animated.a style={props} href="#" className="text-sm leading-6">
            Tutorial <span aria-hidden="true">&rarr;</span>
          </animated.a>
        </div>
      </nav>
    </header>
  )
}

function WordAnimation({ children }) {
  const characters = children.split('');
  const trailCharacter = useTrail(characters.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 1000,
      mass: 5, 
      tension: 2000, 
      friction: 200,
      easing: easings.easeOutBack
    }
  });

  return (
    <>
      {trailCharacter.map((props, index) => (
        <animated.span key={index} style={props}>
          {characters[index]}
        </animated.span>
      ))}
    </>
  );
}
