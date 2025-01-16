import { GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL, routes } from "@/app/utility";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";

const MobileVision = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden py-4 bg-pastel_black text-off_white">
      <p className="px-4 text-3xl font-moderniz uppercase">playground</p>
      <p className="font-medium text-xs my-4 px-4">Welcome to my playground of skill, creativity and fun. Showcasing my love and interest in building interactive user experiences</p>

      <div className="px-4 flex flex-col gap-2 ">
        <Link href={GITHUB_URL} className="flex bg-off_white px-2 py-3  text-pastel_black items-center justify-between">
          <p className="uppercase font-moderniz text-sm leading-[1]">Github</p>
          <MdOutlineDoubleArrow />
        </Link>
        <Link href={LINKEDIN_URL} className="flex bg-off_white px-2 py-3 text-pastel_black items-center justify-between">
          <p className="uppercase font-moderniz text-sm leading-[1]">LinkedIn</p>
          <MdOutlineDoubleArrow />
        </Link>
        <Link href={PORTFOLIO_URL} className="flex bg-off_white px-2 py-3 text-pastel_black items-center justify-between">
          <p className="uppercase font-moderniz text-sm leading-[1]">Portfolio</p>
          <MdOutlineDoubleArrow />
        </Link>
      </div>

      <div className="w-full flex flex-col mt-5">
        {routes?.map((route, index) => (
          <Link href={route?.link} className={`relative py-4 px-4 flex flex-col ${index % 2 == 0 ? "items-end" : "items-start"} ${index == routes.length - 1 ? "" : "border-b-[1px]"}  border-off_white ${index == 0 ? "border-t-[1px]" : ""}`} key={index}>
            <p className="text-lg uppercase font-moderniz">{route?.name}</p>
            <p className={`${index % 2 == 0 ? "text-right" : "text-left"} text-[10px] font-thin`}>{route?.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileVision;
