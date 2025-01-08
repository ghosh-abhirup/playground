import "./home.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import WorkCarousel from "./WorkCarousel";

const DesktopVision = () => {
  return (
    <div className="size-full flex flex-col">
      <div className="w-full text-center bg-pastel_black text-off_white">
        <p className="font-moderniz uppercase text-[4rem] lg:text-[6.5rem] xl:text-[7.5rem]">playground</p>
      </div>
      <div className="border_middle_box">
        <div className="w-1/3 h-full relative "></div>
        <div className="flex-1 h-full off_white_border_left">
          <WorkCarousel />
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-3/5 h-full flex items-center justify-center">
          <p className="font-montserrat font-medium text-left text-sm w-2/3">Welcome to my playground of skill, creativity and fun. Showcasing my love and interest in building interactive user experiences</p>
        </div>

        <div className="flex-1 flex items-center gap-2 h-[15vh]">
          <div className="social_links">po</div>
          <div className="social_links">
            <FaGithub />
          </div>
          <div className="social_links">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVision;
