"use client";
import { useEffect, useState } from "react";
import "./parallax.css";
import { gsap } from "gsap";

const imgArr = [1, 2, 3, 4, 5, 6];
const titles = ["Regeneration Suites", "Simplicity & Tactility", "Reimagining Loyalty", "Beyond Canvas", "Sound Expressed In Full", "Reinventing Wonder"];

const Parallax = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    gsap.to(".titleBox", {
      y: `${-48 * (selectedIndex - 1)}px`,
      ease: "power1.inOut",
      duration: 0.6,
    });

    gsap.to(".page_index", {
      y: `${-20 * (selectedIndex - 1)}px`,
      ease: "power1.inOut",
      duration: 0.6,
    });
  }, [selectedIndex]);

  const right = () => {
    if (selectedIndex <= imgArr?.length - 1) {
      setSelectedIndex((prev) => prev + 1);

      gsap.fromTo(
        "#right_plus",
        { rotate: 0 },
        {
          duration: 0.6,
          ease: "power2.inOut",
          rotate: 90,
        }
      );

      gsap.to(`#item_${selectedIndex + 1}`, {
        duration: 1.2,
        ease: "power4.inOut",
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
    }
  };
  const left = () => {
    if (selectedIndex > 1) {
      setSelectedIndex((prev) => prev - 1);

      gsap.fromTo(
        "#left_plus",
        { rotate: 0 },
        {
          duration: 0.6,
          ease: "power2.inOut",
          rotate: -90,
        }
      );

      gsap.to(`#item_${selectedIndex}`, {
        "clip-path": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        ease: "power4.inOut",
        duration: 1.2,
      });
    }
  };

  const numHoverIn = (index) => {
    gsap.fromTo(
      `#num_${index + 1}`,
      { y: "1rem" },
      {
        y: "0rem",
      }
    );
  };
  const numHoverOut = (index) => {
    const numElement = document.getElementById(`num_${index + 1}`);

    gsap.fromTo(
      numElement,
      { y: "0rem" },
      {
        y: "-1rem",
      }
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {imgArr?.map((num, index) => (
        <div className={`item z-10 ${index == 0 ? "carousel_active" : ""}`} id={`item_${index + 1}`} key={index}>
          <img src={`/images/cards/img-${num}.jpg`} alt="bg" className="size-full brightness-50 object-cover " />
        </div>
      ))}

      <div className="size-full absolute flex items-center z-20 text-white gap-10 md:gap-[20vw]">
        <div className="size-full flex items-center justify-center text-[2rem] mr-10 md:mr-0 md:text-[3rem] font-thin" id="left_plus" onClick={left}>
          +
        </div>
        <div className="size-full flex items-center justify-center text-[2rem] ml-10 md:ml-0 md:text-[3rem] font-thin" id="right_plus" onClick={right}>
          +
        </div>
      </div>

      <div className="descBox">
        {titles?.map((title, index) => (
          <div className="size-full flex items-center justify-center relative titleBox" key={index}>
            <p onMouseEnter={() => numHoverIn(index)} onMouseLeave={() => numHoverOut(index)}>
              {title}
            </p>
            <div className="absolute top-0 right-0 size-4 overflow-hidden">
              <p className="text-xs font-medium translate-y-4" id={`num_${index + 1}`}>
                {10 + index}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4 text-sm fixed bottom-4 left-1/2 -translate-x-1/2 z-50 font-medium">
        <div className="relative h-[20px] w-[20px] overflow-hidden carousel_active">
          {imgArr?.map((item, index) => (
            <p className="size-full flex items-center justify-center page_index" key={index}>
              {item}
            </p>
          ))}
        </div>
        <p>&#8213;</p>
        <p>{imgArr?.length}</p>
      </div>
    </div>
  );
};

export default Parallax;
