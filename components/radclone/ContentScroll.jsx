"use client";

import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "@/app/gsapController";
import "./rad-clone.css";
import { CARD_IMG_5, CARD_IMG_6, CARD_IMG_7 } from "@/app/utility";

const slidesData = [
  {
    t1: "City of dreams",
    t2: "Transform",
    img: CARD_IMG_7,
  },
  {
    t1: "Stadium",
    t2: "Breathes Greatness",
    img: CARD_IMG_6,
  },
  {
    t1: "Minimal Design",
    t2: "Natural Wonders",
    img: CARD_IMG_5,
  },
];

const ContentScroll = () => {
  const [prevVisibleIndex, setPrevVisibleIndex] = useState(-1);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const currentSlide = slides[currentVisibleIndex];
    if (prevVisibleIndex >= 0) {
      const prevSlide = slides[prevVisibleIndex];
      const prevText = prevSlide.querySelector(".rad-title h1");

      gsap.fromTo(
        prevText,
        { y: 0 },
        {
          y: -200,
          ease: "power3.inOut",
          duration: 0.3,
        }
      );
    }
    const titleText = currentSlide.querySelector(".rad-title h1");

    gsap.fromTo(
      titleText,
      { y: -200 },
      {
        y: 0,
        ease: "power3.inOut",
        duration: 0.3,
      }
    );
  }, [currentVisibleIndex]);

  useEffect(() => {
    // const contentContainer = document.querySelector(".content");
    const slidesContainer = document.querySelector(".slides");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;
    const slideWidth = slider.offsetWidth;

    let prev = 0;

    ScrollTrigger.create({
      trigger: ".content",
      start: "top top",
      end: `+=${slidesContainer.offsetWidth}`,
      scrub: 1,
      pin: true,
      // pinSpacing: true,
      snap: 1 / (slides.length - 1),

      onUpdate: ({ progress }) => {
        const mainMove = totalMove * progress;

        const divider = 1 / slides.length;
        let newIndex = Math.floor(progress / divider);
        if (prev != newIndex && newIndex < slides.length) {
          setPrevVisibleIndex(prev);
          prev = newIndex;
          console.log(newIndex);
          setCurrentVisibleIndex(newIndex);
        }

        gsap.set(slidesContainer, {
          x: -mainMove,
        });

        const currentSlide = Math.floor(mainMove / slideWidth);
        const sliderProgress = (mainMove % slideWidth) / slideWidth;

        slides.forEach((slide, i) => {
          const img = slide.querySelector("img");
          if (img) {
            if (i == currentSlide || i == currentSlide + 1) {
              const realtiveProgress = i == currentSlide ? sliderProgress : sliderProgress - 1;

              const parallaxAmount = realtiveProgress * slideWidth * 0.25;
              gsap.set(img, {
                x: parallaxAmount,
              });
            } else {
              gsap.set(img, {
                x: 0,
              });
            }
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="content bg-off_white">
      <div className="slider size-full relative overflow-hidden">
        <div className="slides">
          {slidesData?.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="imgParent">
                <img src={slide.img} alt="image" className="images" />
              </div>
              <div className="rad-title">
                <h1>
                  {slide.t1} <br /> {slide.t2}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentScroll;
