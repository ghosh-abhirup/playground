"use client";
import { useEffect, useState } from "react";
import "./accordion.css";
import gsap from "@/app/gsapController";

const gallery = [
  {
    bg: "/images/cards/img-1.jpg",
    title: "Visit Victoria",
    topic: "Andy Lee's greatest golf challenge",
  },
  {
    bg: "/images/cards/img-2.jpg",
    title: "Health partners",
    topic: "Health Insurance, Done Right",
  },
  {
    bg: "/images/cards/img-3.jpg",
    title: "Victorian Dept. of health",
    topic: "Make a Difference",
  },
  {
    bg: "/images/cards/img-4.jpg",
    title: "Jobs Victoria",
    topic: "Backing you",
  },
  {
    bg: "/images/cards/img-5.jpg",
    title: "Chrisholm Institute",
    topic: "For the better",
  },
  {
    bg: "/images/cards/img-6.jpg",
    title: "Manchester News",
    topic: "How safe is your car",
  },
  {
    bg: "/images/cards/img-7.jpg",
    title: "Monash",
    topic: "What it takes",
  },
];

const totalImages = 7;
const middleSelected = 3;
const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(middleSelected);

  useEffect(() => {
    gsap.to(".num-counter", {
      top: `${-1 * selectedIndex * 144}px`,
      ease: "power1.inOut",
      duration: 0.6,
    });

    gsap.to(".gallery-content", {
      translateX: selectedIndex < middleSelected ? "4rem" : selectedIndex > middleSelected ? "-4rem" : "0",
    });
  }, [selectedIndex]);

  return (
    <div className="w-full p-4">
      <div className="w-full flex items-center justify-between text-black font-bold text-[6rem] tracking-tighter">
        <div className="flex items-center">
          <span>0</span>
          <div className="w-[65px] h-[144px] relative overflow-hidden">
            <div className="num-counter absolute top-0 flex flex-col">
              {[...Array(totalImages).keys()].map((num, i) => (
                <span className="h-[144px] w-full flex items-start justify-center" key={i}>
                  {num + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p>/</p>
        <p>07</p>
      </div>

      <div className="overflow-hidden flex flex-col items-center">
        <div className="gallery-content">
          {gallery?.map((item, i) => (
            <div className={`gallery-img-card ${i == selectedIndex ? "active" : ""} `} onClick={() => setSelectedIndex(i)} key={i}>
              <img src={item.bg} alt="img" className={`w-full h-full object-cover object-center brightness-75 ${i == selectedIndex ? "grayscale-0" : "grayscale"}`} />
              {i == selectedIndex && (
                <div className="absolute size-full top-0 left-0">
                  <div className="size-full flex flex-col items-center justify-center">
                    <div className="w-1/2">
                      <p className="uppercase font-semibold text-center tracking-wide">{item.title}</p>
                      <p className="font-greenos text-[4rem] text-center leading-[1] mt-4">{item.topic}</p>
                    </div>
                  </div>
                </div>
              )}
              {i != selectedIndex && (
                <div className="absolute py-4  size-full bottom-0 left-0 z-10 overflow-hidden cursor-pointer">
                  <div className="info-column">
                    <p className="info-column-text" style={{ writingMode: "sideways-lr" }}>
                      {item.title}
                    </p>
                    <p className="text-center text-sm font-semibold tracking-wide">{`00${i + 1}`}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
