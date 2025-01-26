import HomeTitleCard from "../../components/wall-scroll/HomeTitleCard";
import RouteComponent from "../../components/wall-scroll/RouteComponent";
import React from "react";
import { routes } from "../utility";

const WallScroll = () => {
  return (
    <div className="w-full max-w-[1880px] min-h-screen flex flex-col items-start relative mx-auto">
      <HomeTitleCard />
      <RouteComponent routes={routes} />
    </div>
  );
};

export default WallScroll;
