import { Popover } from '@headlessui/react'
import { useTrail, animated } from '@react-spring/web'
import { useEffect, useState } from 'react';

export default function Header() {

  return (
    <header className="absolute left-0 right-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <WordAnimation>Bruno</WordAnimation>
          <WordAnimation>Jordan</WordAnimation>
          <WordAnimation>Renan</WordAnimation>
          <WordAnimation>Rui</WordAnimation>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

function WordAnimation({ children }) {
  const characters = children.split('');

  const [visible, setVisible] = useState(false);
  const config = { mass: 5, tension: 2000, friction: 200 };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const trail = useTrail(characters.length, {
    config,
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 20,
    from: { opacity: 0, y: 20 },
    delay: 200,
  });

  return (
    <a className='text-sm font-semibold leading-6 text-white'>
      {trail.map((props, index) => (
        <animated.span key={index} style={props}>
          {characters[index]}
        </animated.span>
      ))}
    </a>
  );
}
