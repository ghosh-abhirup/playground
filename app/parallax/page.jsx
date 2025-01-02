import SmoothScroller from "../SmoothScroller";
import "./parallax.css";
import ParallaxImg from "./ParallaxImg";

const Parallax = () => {
  return (
    <SmoothScroller>
      <div className="overflow-hidden">
        <section className="hero">
          <div className="img">
            <ParallaxImg src="/images/hills.jpg" alt="hero" />
          </div>

          <div className="relative z-10 text-black p-10">
            <p className="font-oswald text-[8rem] font-bold uppercase">Parallax</p>
            <p className="text-lg leading-5 max-w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus temporibus id dolores odio non consequatur omnis facere veniam explicabo!</p>
          </div>
        </section>
        <section className="project">
          <div className="img">
            <ParallaxImg src="/images/rainy.jpg" alt="project" />
          </div>
          <div className="w-full flex flex-col items-end relative z-10  p-10">
            <p className="font-oswald text-[8rem] font-bold uppercase">Hills</p>
            <p className="text-lg leading-5 max-w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus temporibus id dolores odio non consequatur omnis facere veniam explicabo!</p>
          </div>
        </section>
        <section className="about">
          <div className="img">
            <ParallaxImg src="/images/flowers.jpg" alt="about" />
          </div>
          <div className="size-full flex items-center justify-center relative z-10 gap-10 p-10">
            <p className="font-oswald text-[8rem] font-bold uppercase">Hero</p>
            <p className="text-lg leading-5 max-w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus temporibus id dolores odio non consequatur omnis facere veniam explicabo!</p>
          </div>
        </section>
        <section className="banner">
          <div className="img">
            <ParallaxImg src="/images/globe.jpg" alt="banner" />
          </div>

          <div className="size-full flex flex-col items-center justify-center relative z-10 gap-2 p-10">
            <p className="font-oswald text-[8rem] font-bold uppercase">About</p>
            <p className="text-lg leading-5 max-w-[40%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus temporibus id dolores odio non consequatur omnis facere veniam explicabo!</p>
          </div>
        </section>
      </div>
    </SmoothScroller>
  );
};

export default Parallax;
