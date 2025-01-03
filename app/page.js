import HomeTitleCard from "@/components/common/HomeTitleCard";
import RouteComponent from "@/components/common/RouteComponent";

const routes = [
  {
    name: "Parallax",
    link: "/parallax",
  },
  {
    name: "Split Vignette",
    link: "/split-vignette",
  },
  {
    name: "Dribble Anim",
    link: "/dribbleEffect",
  },
  {
    name: "Accordion AU",
    link: "/accordion",
    type: "clone",
  },
  {
    name: "Zentry",
    link: "/",
    type: "clone",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-[1880px] min-h-screen flex flex-col items-start relative mx-auto">
      <HomeTitleCard />
      <RouteComponent routes={routes} />
    </div>
  );
}
