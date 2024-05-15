import {
    useTransition as Transition,
    animated,
    easings,
    useTrail,
  } from '@react-spring/web'

export default function Header({ members, delayChangeLocation }) {
    const trailAnchor = useTrail(members.length, {
      from: { opacity: 0, y: -5 },
      to: { opacity: !delayChangeLocation ? 1 : 0, y: 0 },
      config: {
        duration: 900,
        mass: 5,
        tension: 2000,
        friction: 200,
        easing: easings.easeOutBack,
      },
    })
  
    return (
      <header style={{ fontFamily: '"Instrument Serif", sans-serif' }} className="absolute flex w-full justify-center overflow-hidden font-semibold">
        <ul className="m-6 flex gap-x-12">
          {trailAnchor.map((props, index) => (
            <animated.p style={props} key={index} className="text-sm">
              {members[index].name}
            </animated.p>
          ))}
        </ul>
      </header>
    )
}