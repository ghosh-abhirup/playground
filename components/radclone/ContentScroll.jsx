"use client";

import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "@/app/gsapController";
import "./rad-clone.css";

const IMG_3 = "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMG_2 = "https://images.unsplash.com/photo-1489058535093-8f530d789c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMG_1 = "https://plus.unsplash.com/premium_photo-1668264326274-a4a47897689d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const slidesData = [
  {
    t1: "City of dreams",
    t2: "Transform",
    img: IMG_1,
  },
  {
    t1: "Stadium",
    t2: "Breathes Greatness",
    img: IMG_2,
  },
  {
    t1: "Minimal Design",
    t2: "Natural Wonders",
    img: IMG_3,
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
      const prevText = prevSlide.querySelector(".title h1");

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
    const titleText = currentSlide.querySelector(".title h1");

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
      pinSpacing: true,
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
              <div className="title">
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
