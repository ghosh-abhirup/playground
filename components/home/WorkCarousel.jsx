"use client";

import { Fragment, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { routes } from "@/app/utility";
import Link from "next/link";

const WorkCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const right = () => {
    if (selectedIndex <= routes?.length - 1) {
      setSelectedIndex((prev) => prev + 1);

      gsap.to(`#carousel_item_${selectedIndex + 1}`, {
        duration: 1.2,
        ease: "power4.inOut",
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
    }
  };
  const left = () => {
    if (selectedIndex > 1) {
      setSelectedIndex((prev) => prev - 1);

      gsap.to(`#carousel_item_${selectedIndex}`, {
        "clip-path": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        ease: "power4.inOut",
        duration: 1.2,
      });
    }
  };

  return (
    <div className="size-full relative overflow-hidden">
      {routes?.map((route, index) => (
        <Link href={route?.link} className={`carousel_item ${index == 0 ? "carousel_active" : ""}`} id={`carousel_item_${index + 1}`} key={index}>
          <img src={route?.img} alt="bg" className={`absolute brightness-75 size-full object-cover `} />
          <div className="w-1/2 absolute bottom-0 left-0 text-pastel_black bg-off_white p-4">
            <p className="title font-moderniz">{route.name}</p>
            <p className=" font-medium text-xs">{route.desc}</p>
          </div>
        </Link>
      ))}

      <div className="absolute bottom-0 right-0 flex  items-center">
        <div onClick={left} className="link">
          <FaArrowLeft className={`${selectedIndex == 1 ? "opacity-25" : ""}`} />
        </div>
        <div onClick={right} className="link">
          <FaArrowRight className={`${selectedIndex == routes.length ? "opacity-25" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
