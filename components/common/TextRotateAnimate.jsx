"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./TextRotateAnimate.css";

gsap.registerPlugin(ScrollTrigger);

const TextRotateAnimate = ({ text }) => {
  useEffect(() => {
    gsap.to(".top_text", {
      top: `0px`,
      ease: "power2.out",
      duration: 1,

      scrollTrigger: {
        trigger: ".wrapper",
        start: "top center",
      },
    });
    gsap.to(".middle_text", {
      top: `250px`,
      ease: "power1.out",
      duration: 0.8,

      scrollTrigger: {
        trigger: ".wrapper",
        start: "top center",
      },
    });
    gsap.to(".bottom_text", {
      top: `300px`,
      ease: "power3.out",
      duration: 0.8,

      scrollTrigger: {
        trigger: ".wrapper",
        start: "top center",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-[100vw] h-[220px] wrapper overflow-hidden">
      <p className="animated-text-split top_text  left-0 -top-[500px] absolute">{text}</p>
      <p className="animated-text-split middle_text left-0 -top-[400px]  absolute">{text}</p>
      <p className="animated-text-split bottom_text left-0 -top-[200px]  absolute">{text}</p>
    </div>
  );
};

export default TextRotateAnimate;
