import { useEffect } from "react";
import { useMotionValue, frame } from "framer-motion";

export function useFollowPointer(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handlePointerMove = ({ clientX, clientY }) => {
      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}
