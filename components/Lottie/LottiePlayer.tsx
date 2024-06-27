"use client";
import Lottie from "lottie-react";
interface LottiePlayerProps {
  data: unknown;
}

const LottiePlayer = ({ data }: LottiePlayerProps) => {
  return <Lottie animationData={data} />;
};

export default LottiePlayer;
