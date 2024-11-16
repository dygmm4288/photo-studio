import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useHome() {
  const { ref: animationTriggerPoint, inView } = useInView({ threshold: 0.1 });
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimationState(true);
    }
  }, [inView]);

  return { animationTriggerPoint, animationState };
}
