"use client";
import React, { useEffect, useState } from "react";
import "../../components/radclone/rad-clone.css";
import SmoothScroller from "../SmoothScroller";
import Link from "next/link";
import CursorEffects from "@/components/radclone/CursorEffects";
import ContentScroll from "@/components/radclone/ContentScroll";

const page = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseEvent = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <SmoothScroller>
      <div className="rad-container" onMouseMove={mouseEvent}>
        <CursorEffects mousePos={mousePos} />
        <ContentScroll />
        <section className="outro h-[30vh] flex items-center justify-center bg-pastel_black">
          <p className="text-white uppercase font-bold tracking-tight text-[2rem]">
            Awesome animation inspired from{" "}
            <span className="underline">
              <Link href={"https://radga.com/"} target="_blank">
                RADGA
              </Link>
            </span>
          </p>
        </section>
      </div>
    </SmoothScroller>
  );
};

export default page;
