"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottiePlayerProps {
  data: string;
}

const LottiePlayer = ({ data }: LottiePlayerProps) => {
  return <DotLottieReact src={data} loop autoplay />;
};

export default LottiePlayer;
