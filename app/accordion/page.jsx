import TextRotateAnimate from "../common/TextRotateAnimate";
import TextRotateUpAnimate from "../common/TextRotateUpAnimate";
import "./accordion.css";

const Accordion = () => {
  return (
    <div className="w-full relative">
      <div className="sect  sticky top-0 -z-10">
        <div className="flex flex-col items-center justify-between  size-full">
          <p></p>
          <p className="font-cinzel text-[4rem]">Accordion</p>
          <p className="text-xs font-semibold mb-5 uppercase tracking-wider">A production company</p>
        </div>
        <img src="/images/cards/img-3.jpg" alt="bg" className="brightness-50 absolute top-0 left-0 size-full object-center object-cover -z-10" />
      </div>
      <div className="sect bg-black">
        <TextRotateAnimate text={"Motion"} />

        <div className="flex items-center justify-end">
          <TextRotateUpAnimate text={"Stills"} />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
