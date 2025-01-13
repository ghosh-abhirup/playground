import "./home.css";
import { TbExternalLink } from "react-icons/tb";
import WorkCarousel from "./WorkCarousel";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/utility";

const DesktopVision = () => {
  return (
    <div className="size-full flex flex-col">
      <div className="w-full text-center bg-pastel_black text-off_white">
        <p className="font-moderniz uppercase text-[4rem] lg:text-[6.5rem] xl:text-[7.5rem]">playground</p>
      </div>
      <div className="border_middle_box">
        <div className="px-6 w-1/3 h-full relative flex flex-col items-center justify-center font-moderniz ">
          <p>Welcome to my playground of skill, creativity and fun. Showcasing my love and interest in building interactive user experiences</p>
        </div>
        <div className="flex-1 h-full off_white_border_left">
          <WorkCarousel />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1 flex items-center h-[15vh]">
          <Link target="_blank" href={"/"} className="social_links">
            <p className="social_link">portfolio</p>
            <TbExternalLink />
          </Link>
          <Link target="_blank" href={GITHUB_URL} className="social_links">
            <p className="social_link">github</p>
            <TbExternalLink />
          </Link>
          <Link target="_blank" href={LINKEDIN_URL} className="social_links">
            <p className="social_link">linkedin</p>
            <TbExternalLink />
          </Link>
        </div>

        <div className="w-[45%] h-full flex items-center justify-center">
          <p className=" font-medium text-left text-sm px-6"></p>
        </div>
      </div>
    </div>
  );
};

export default DesktopVision;
