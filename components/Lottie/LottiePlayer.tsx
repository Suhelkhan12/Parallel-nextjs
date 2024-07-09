"use client";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: object;
}

const LottiePlayer = ({ animationData }: LottiePlayerProps) => {
  return <Lottie animationData={animationData} loop autoplay />;
};

export default LottiePlayer;
