import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

const LenisScroll = ({ children }: { children: ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisScroll;
