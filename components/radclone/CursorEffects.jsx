"use client";

import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "@/app/gsapController";

const CursorEffects = ({ mousePos }) => {
  const [screenParameters, setScreenParameters] = useState({ width: 0, height: 0 });
  const [movingCursorVal, setMovingCursorVal] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const slidesContainer = document.querySelector(".slides");
    console.log("width = ", slidesContainer.offsetWidth);
    ScrollTrigger.create({
      trigger: ".outro",
      start: `+=${slidesContainer.offsetWidth}px bottom`,
      scrub: 1,
      animation: gsap
        .timeline()
        .to(".nav_modal_header", {
          opacity: 0,
          ease: "power1.inOut",
        })
        .to(".nav_modal", {
          top: "100%",
          left: 0,
          width: "100%",
          ease: "power1.inOut",
        }),
    });
  }, []);

  useEffect(() => {
    setScreenParameters({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setMovingCursorVal({
      x: mousePos.x - window.innerWidth / 2,
      y: mousePos.y - window.innerHeight / 2,
    });

    gsap.set(".xPos", {
      x: mousePos.x,
    });
    gsap.set(".yPos", {
      y: mousePos.y,
    });
  }, [mousePos]);

  useEffect(() => {
    if (isModalOpen) {
      console.log("inside");
      gsap.to(".nav_modal", {
        left: 0,
        width: "100%",
        height: "100dvh",
        // transform: "translate(0, 0)",
        top: 0,
        borderRadius: 0,

        ease: "none",
        duration: 0.3,
      });
    } else {
      gsap.to(".nav_modal", {
        width: "50%",
        height: "75px",
        left: "25%",
        top: "60%",
        borderRadius: "6px",
        // transform: "translate(-50%, 0)",

        ease: "none",
        duration: 0.3,
      });
    }

    gsap.to(".nav_modal_body", {
      opacity: isModalOpen ? 1 : 0,
      pointerEvents: isModalOpen ? "all" : "none",
      ease: "none",
      duration: 0.3,
    });
  }, [isModalOpen]);

  return (
    <div className="text-black text-xs font-medium">
      <div>
        <p className="xPos fixed top-2 -translate-x-1/2 z-50 ">{movingCursorVal.x}</p>
        <p className="yPos fixed right-2 -translate-y-1/2 z-50 " style={{ writingMode: "vertical-lr" }}>
          {movingCursorVal.y}
        </p>
        <p className="fixed bottom-2 z-50 left-1/2 -translate-x-1/2">{screenParameters.width / 2}</p>
        <p className="fixed left-2 z-50 top-1/2 -translate-y-1/2" style={{ writingMode: "sideways-lr" }}>
          {screenParameters.height / 2}
        </p>

        <div className="mid_marker_bottom"></div>
        <div className="mid_marker_left"></div>
        <div className="mid_marker_right"></div>
        <div className="mid_marker_top"></div>

        <div className="fixed bottom-2 z-50 right-8 flex items-center gap-2">
          <p>{mousePos.x}</p>
          <p className="markers">X</p>
          <p>{screenParameters.width}</p>
          <p className="markers">W</p>
        </div>

        <div className="fixed left-2 z-50 top-8 flex items-center gap-2" style={{ writingMode: "sideways-lr" }}>
          <p>{mousePos.y}</p>
          <p className="markers">Y</p>
          <p>{screenParameters.height}</p>
          <p className="markers">H</p>
        </div>
      </div>

      {/* nav */}
      <div className="nav_modal">
        <div className="nav_modal_header flex items-center justify-between">
          <p className="uppercase w-fit font-thin text-sm tracking-widest text-off_white leading-[1.4]">
            Rickman <br />
            Architecture <br />
            Design
          </p>
          <p className=" font-bold cursor-pointer" onClick={() => setIsModalOpen((prev) => !prev)}>
            MENU
          </p>
        </div>

        <div className="nav_modal_body">
          <div className="flex flex-col items-center gap-[10vh]">
            <p className="nav_links">homepage</p>
            <p className="nav_links">about rad</p>
          </div>
          <div className="flex flex-col items-center gap-[10vh]">
            <p className="nav_links">projects</p>
            <p className="nav_links">contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursorEffects;
