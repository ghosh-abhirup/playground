"use client";

import TextRotateAnimate from "../../components/common/TextRotateAnimate";
import TextRotateUpAnimate from "../../components/common/TextRotateUpAnimate";
import "./accordion.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import WebContentSection from "./WebContentSection";
import SmoothScroller from "../SmoothScroller";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Accordion = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".text-section",
      start: "top top",
      endTrigger: ".web-content",
      end: "bottom top",
      pin: ".revealer",
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: ".information",
      start: "top top",
      endTrigger: ".web-content",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".text-section",
      start: "top top",
      endTrigger: ".information",
      end: "bottom bottom",

      onUpdate: ({ progress }) => {
        const rotation = progress * 360;

        const clipPath = `polygon(
        ${40 - 40 * progress}% 0%,
        ${60 + 40 * progress}% 0%,
        ${60 + 40 * progress}% 100%,
        ${40 - 40 * progress}% 100%
        )`;

        const size = 64 - 40 * progress;

        gsap.to(".revealer", {
          rotation,
          width: `${size}px`,
          height: `${size}px`,
        });

        gsap.to(".revealer-1, .revealer-2", {
          clipPath,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".web-content",
      start: "top bottom",
      end: "top top",
      onUpdate: ({ progress }) => {
        const left = 500 * progress;
        gsap.to(".marquee", {
          transform: `translateX(-${left}px)`,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".web-content",
      start: "top 10%",

      onEnter: () => {
        gsap.to(".revealer", {
          scale: 80,
          duration: 0.6,
          ease: "power2.out",

          onComplete: () => {
            gsap.to(".web-content", {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      },

      onLeaveBack: () => {
        gsap.to(".web-content", {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(".revealer", {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SmoothScroller>
      <div className="w-full relative">
        <section className="sect  sticky top-0 -z-10">
          <div className="flex flex-col items-center justify-between  size-full">
            <p></p>
            <div>
              <p className="font-cinzel text-[4rem]">Accordion</p>
              <div className="flex items-center justify-center mt-5">
                <p className="navbar_text">Only for window screen</p>
              </div>
            </div>
            <p className="text-xs font-semibold mb-5 uppercase tracking-wider">A production company</p>
          </div>
          <img src="/images/cards/img-3.jpg" alt="bg" className="brightness-50 absolute top-0 left-0 size-full object-center object-cover -z-10" />
        </section>
        <section className="w-full overflow-hidden bg-black text-section">
          <div className="flex flex-col relative">
            <TextRotateAnimate text={"Motion"} />

            <div className="flex -mt-4 ml-4 items-center gap-[10vw]">
              <div className="text_wrapper">
                <p className="secondary_text">Video</p>
                <p className="count_text">{`(124629 MIN)`}</p>
              </div>

              <div className="text_wrapper">
                <p className="secondary_text">Photo</p>
                <p className="count_text">{`(378B PX)`}</p>
              </div>

              <div className="text_wrapper">
                <p className="secondary_text">Production</p>
                <p className="count_text">{`(145 CAMPAIGNS)`}</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-end relative">
            <div className="revealer">
              <div className="revealer-1"></div>
              <div className="revealer-2"></div>
            </div>
            <div className="flex flex-col items-end">
              <TextRotateUpAnimate text={"Stills"} />

              <div className="flex w-[45vw] -mt-4 mr-4 items-center justify-between">
                <div className="text_wrapper">
                  <p className="secondary_text">Video</p>
                  <p className="count_text">{`(124629 MIN)`}</p>
                </div>

                <div className="text_wrapper">
                  <p className="secondary_text">Photo</p>
                  <p className="count_text">{`(378B PX)`}</p>
                </div>

                <div className="text_wrapper">
                  <p className="secondary_text">Production</p>
                  <p className="count_text">{`(145 CAMPAIGNS)`}</p>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-black information pt-[40vh]">
            <div className="flex items-start justify-between ">
              <p className="count_text">{`(INTROUCTION)`}</p>
              <p className="text-2xl font-montserrat w-1/2">We're a tight-knit collective of artists and creative minds dedicated to crafting unique film and photographic works that entertain and engage.</p>
            </div>

            <div className="pt-[7rem] w-full overflow-hidden marqueeParent">
              <div className="marquee" ref={marqueeRef}>
                {[1, 2, 3, 4, 5, 6]?.map((item, i) => (
                  <div className="w-[30vw] h-[300px]" key={i}>
                    <img src={`/images/cards/img-${i + 1}.jpg`} alt="card_img" className="size-full object-cover object-center" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* <section className="whitespace"></section> */}

        <section className="web-content" id="web-content">
          <WebContentSection />
        </section>
      </div>
    </SmoothScroller>
  );
};

export default Accordion;
