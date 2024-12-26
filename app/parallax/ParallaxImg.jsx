"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImg = ({ src, alt }) => {
  const imgRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);

  useEffect(() => {
    const updateBounds = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();

        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();

    window.addEventListener("scroll", updateBounds);

    const animate = () => {
      if (imgRef.current) {
        currentTranslateY.current = lerp(currentTranslateY.current, targetTranslateY.current, 0.1);

        if (Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
          imgRef.current.style.transform = `translateY(${currentTranslateY.current - targetTranslateY.current}px) scale(1.2)`;

          console.log(`translateY(${currentTranslateY.current - targetTranslateY.current}px) scale(1.2)`);
        }
      }
    };

    animate();
    window.addEventListener("scroll", animate);

    return () => {
      window.removeEventListener("scroll", updateBounds);
      window.removeEventListener("scroll", animate);
    };
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current) return;

    const relaiveScroll = scroll - bounds.current.top;
    targetTranslateY.current = relaiveScroll * 0.2;
  });

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.2)",
      }}
    />
  );
};

export default ParallaxImg;
