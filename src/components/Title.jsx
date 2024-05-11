import {
    useTransition as Transition,
    animated,
    easings,
    useTrail,
  } from '@react-spring/web'

export default function Title({ delayChangeLocation }) {
    const lines = ['Let be', 'a Programmer!']
    const trailAnchor = useTrail(lines.length, {
      from: { opacity: 0, x: 80 },
      to: { opacity: !delayChangeLocation ? 1 : 0, x: 20 },
      config: {
        duration: 1500,
        mass: 5,
        tension: 2000,
        friction: 200,
        easing: easings.easeOutBack,
      },
    })
  
    return (
      <main className="flex flex-1 items-center font-extrabold">
        <div className="m-32 flex flex-col">
          {trailAnchor.map((props, index) => (
            <div key={index} className="flex">
              <animated.p style={props} className="text-7xl tracking-tight">
                {lines[index]}
              </animated.p>
            </div>
          ))}
        </div>
      </main>
    )
  }