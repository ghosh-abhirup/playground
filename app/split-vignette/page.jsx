"use client";

import Gallery from "./Gallery";
import { useSpring } from "motion/react";
import SmoothScroller from "../SmoothScroller";

const gallery = [
  {
    bg: "/images/trees.jpg",
    vignette: "/images/vertical/city.jpg",
  },
  {
    bg: "/images/water.jpg",
    vignette: "/images/vertical/hillCity.jpg",
  },
  {
    bg: "/images/blossoms.jpg",
    vignette: "/images/vertical/christmas.jpg",
  },
  {
    bg: "/images/forest.jpg",
    vignette: "/images/vertical/room.jpg",
  },
];

const SplitVignette = () => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };
  const mousePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseEvent = (e) => {
    const { clientX, clientY } = e;

    const targetX = clientX - (window.innerWidth / 2) * 0.16;
    const targetY = clientY - (window.innerHeight / 2) * 0.4;

    mousePos.x.set(targetX);
    mousePos.y.set(targetY);
  };

  return (
    <SmoothScroller>
      <section className="w-full h-[100dvh] relative " onMouseMove={mouseEvent}>
        {gallery?.map((item, index) => (
          <Gallery bg={item.bg} mousePosition={mousePos} key={index} vignette={item.vignette} />
        ))}
      </section>
    </SmoothScroller>
  );
};

export default SplitVignette;
