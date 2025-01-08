"use client";
import "./wallscroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const RouteComponent = ({ routes }) => {
  useEffect(() => {
    if (routes?.length > 10) {
      document.documentElement.style.setProperty("--route_container_perspective", "right 20%");
    } else {
      document.documentElement.style.setProperty("--route_container_perspective", "right center");
    }

    ScrollTrigger.create({
      trigger: ".routeParent",
      start: "top top",
      end: "bottom bottom",

      onUpdate: ({ progress }) => {
        if (routes?.length > 10) {
          const change = 20 + 60 * progress;
          document.documentElement.style.setProperty("--route_container_perspective", `right ${change}%`);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="py-[5vw] pr-[5vw] w-full flex flex-col items-end routeParent">
      <div className="routeContainer" id="routeContainer">
        {routes?.map((route, index) => (
          <Link href={route?.link} className="scroll_route_text" key={index}>
            {route?.name}
            {route?.type && <div className="route_tag">{route?.type}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RouteComponent;
