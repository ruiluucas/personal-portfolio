import { animated, easings, useTrail } from '@react-spring/web'
import members from '../assets/members'

export default function Members() {
  const trailAnchor = useTrail(members.length, {
    from: { opacity: 0, y: -5 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 1500,
      mass: 5,
      tension: 2000,
      friction: 200,
      easing: easings.easeOutBack,
    },
    delay: 1000,
  })

  return (
    <div className="absolute z-20 flex h-screen w-screen items-center justify-center font-bold">
      <ul className="flex gap-x-12">
        {trailAnchor.map((props, index) => (
          <animated.span
            style={props}
            key={index}
            className="flex flex-col gap-2"
          >
            <img
              className="h-32 w-32 rounded-full border-2 border-solid border-white object-cover"
              src={members[index].link}
              alt=""
            />
            <p className="w-full text-center text-base">
              {members[index].name}
            </p>
          </animated.span>
        ))}
      </ul>
    </div>
  )
}
