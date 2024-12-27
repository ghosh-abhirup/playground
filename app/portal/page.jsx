import "./portal.css";

const Portal = () => {
  return (
    <div className="w-full h-[100dvh] relative">
      <div className="size-full flex items-center justify-center">
        <p className="text-xl md:text-[3rem] font-bold">Portal Animation</p>
      </div>
      <div className="size-full flex flex-col items-center justify-between  overflow-hidden">
        <div className="w-full" style={{ perspective: "200px" }}>
          <p className="upperText text-center">Are you ready</p>
        </div>
        <div className="w-full" style={{ perspective: "200px" }}>
          <p className="lowerText text-center">To enter the portal</p>
        </div>
      </div>
    </div>
  );
};

export default Portal;
