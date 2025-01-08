import DesktopVision from "@/components/home/DesktopVision";

export default function Home() {
  return (
    <div className="w-full text-off_white bg-pastel_black">
      <div className="max-w-[1880px] h-screen mx-auto">
        <div className="hidden md:block size-full">
          <DesktopVision />
        </div>
      </div>
    </div>
  );
}
