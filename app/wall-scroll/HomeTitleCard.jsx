import Link from "next/link";
import "./wallscroll.css";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/utility";

const HomeTitleCard = () => {
  return (
    <div className="titleCard_container">
      <div>
        <p className="text-[4rem] leading-[0.8] font-greenos font-semibold tracking-wide ">The Playground</p>
        <p className="font-semibold text-base md:text-lg mt-3">
          Animation inspired from,{" "}
          <Link href={"https://vanholtz.co/"} target="_blank" className="underline">
            Van Holt Co
          </Link>
        </p>
        <div className="mt-4 font-montserrat flex flex-col md:flex-row items-start gap-6 text-sm">
          <div className="w-full md:max-w-[20vw]">
            <p>Fun side projects showcasing my love in making unique designs come to life </p>
          </div>

          <div className="flex items-start gap-6 ">
            <div className="flex flex-col gap-2 items-start">
              <p>Abhirup Ghosh</p>
              <p className="font-semibold text-sm">portfolio</p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <div className="flex gap-4">
                <p>01</p>
                <Link target="_blank" href={GITHUB_URL} className="font-semibold text-sm cursor-pointer">
                  github
                </Link>
              </div>
              <div className="flex gap-4">
                <p>02</p>
                <Link target="_blank" href={LINKEDIN_URL} className="font-semibold text-sm cursor-pointer">
                  linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTitleCard;
