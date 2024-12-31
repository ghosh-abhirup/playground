"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const TextSplitAnimate = ({ text }) => {
  // useEffect(()=>{
  //     gsap.to(".static-text", {

  //     });
  // },[])

  return (
    <div className="relative">
      <div className="absolute -top-full left-0 text-red-300 z-10">
        {text.split("")?.map((char, i) => (
          <span className="animated-text-split " key={i}>
            {char}
          </span>
        ))}
      </div>
      <p className="animated-text-split static-text">{text}</p>
    </div>
  );
};

export default TextSplitAnimate;
