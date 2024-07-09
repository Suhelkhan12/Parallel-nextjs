"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: object;
}

const LottiePlayer = ({ animationData }: LottiePlayerProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const lottieRef = useRef<any>();

  useEffect(() => {
    if (inView && lottieRef.current) {
      lottieRef.current.play();
    } else if (lottieRef.current) {
      lottieRef.current.stop();
    }

    return () => {
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }
    };
  }, [inView]);

  return (
    <div ref={ref}>
      {inView && (
        <Lottie
          animationData={animationData}
          lottieRef={lottieRef}
          loop
          autoplay
        />
      )}
    </div>
  );
};

export default LottiePlayer;
