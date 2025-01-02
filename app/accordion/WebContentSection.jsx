import "./accordion.css";
import ImageGallery from "./ImageGallery";

const WebContentSection = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <p className="long-text">MOTION</p>
      </div>

      <div className="w-full flex items-center justify-center">
        <p className="font-semibold leading-3 uppercase text-xs tracking-wide text-black mx-auto mt-[40vh]">Our selection</p>
      </div>
      <div className="w-full mt-[30vh]">
        <ImageGallery />
      </div>
    </div>
  );
};

export default WebContentSection;
