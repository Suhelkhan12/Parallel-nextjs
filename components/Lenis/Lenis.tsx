"use client";
import { ReactLenis } from "lenis/react";
import React from "react";

function LenisScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisScroll;
