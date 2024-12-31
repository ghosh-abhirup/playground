"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const SmoothScroller = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroller;
