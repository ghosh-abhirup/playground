"use client";

import Link from "next/link";
import "./dribble.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const DribbleEffect = () => {
  useEffect(() => {
    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    const leftSlide = -800;
    const rightSlide = 800;
    ScrollTrigger.matchMedia({
      "(max-width: 750px)": () => {
        gsap.utils.toArray(".row").forEach((row, index) => {
          const cardLeft = row.querySelector(".card-left");
          const cardRight = row.querySelector(".card-right");

          gsap.to(cardLeft, {
            x: leftXValues[index],

            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;

                cardLeft.style.transform = `translateX(${progress * leftSlide}px)`;
                cardRight.style.transform = `translateX(${progress * rightSlide}px)`;
              },
            },
          });
        });
      },
      "(min-width: 750px)": () => {
        gsap.utils.toArray(".row").forEach((row, index) => {
          const cardLeft = row.querySelector(".card-left");
          const cardRight = row.querySelector(".card-right");

          gsap.to(cardLeft, {
            x: leftXValues[index],

            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;

                cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationValues[index]}deg)`;
                cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationValues[index]}deg)`;
              },
            },
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
        <p className="text-[2rem] md:text-[6rem] font-bold  font-royale">Dribble Effect</p>
        <p className="font-semibold text-base md:text-lg font-funnel mt-3 md:mt-5">
          Animation inspired from,{" "}
          <Link href={"https://trionn.com/"} className="underline">
            Trionn
          </Link>
        </p>
      </div>

      <div className="main">
        <div className="content">
          <div className="logo">logo</div>
          <p className="text_middle">Dribble animation</p>
          <p className="text_middle">on the pics</p>
          <p className="text_middle">presented on card</p>
        </div>

        {[1, 2, 3]?.map((i) => (
          <div className="row" key={i}>
            <div
              className="card card-left"
              style={{
                transform: `translateX(0px) translateY(0px) rotate(0deg)`,
              }}
            >
              <img src={`/images/cards/img-${2 * i - 1}.jpg`} alt="card_img" className="card_img" />
            </div>
            <div
              className="card card-right"
              style={{
                transform: `translateX(0px) translateY(0px) rotate(0deg)`,
              }}
            >
              <img src={`/images/cards/img-${2 * i}.jpg`} alt="card_img" className="card_img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DribbleEffect;
