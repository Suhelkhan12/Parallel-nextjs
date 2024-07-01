"use client";
import Lottie from "react-lottie-player";
interface LottiePlayerProps {
  data: object;
}

const LottiePlayer = ({ data }: LottiePlayerProps) => {
  return <Lottie animationData={data} play loop />;
};

export default LottiePlayer;
