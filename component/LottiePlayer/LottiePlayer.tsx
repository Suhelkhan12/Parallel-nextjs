"use client";
import React from "react";
import Lottie from "lottie-react";

const LottiePlayer = ({ src }: { src: JSON }) => {
  return <Lottie animationData={src} loop={true} />;
};

export default LottiePlayer;
