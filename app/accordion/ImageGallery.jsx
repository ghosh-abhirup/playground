const gallery = [
  {
    bg: "/images/cards/img-1.jpg",
    title: "Visit Victoria",
    topic: "Andy Lee's greatest golf challenge",
  },
  {
    bg: "/images/cards/img-2.jpg",
    title: "Health partners",
    topic: "Health Insurance, Done Right",
  },
  {
    bg: "/images/cards/img-3.jpg",
    title: "Victorian Dept. of health",
    topic: "Make a Difference",
  },
  {
    bg: "/images/cards/img-4.jpg",
    title: "Jobs Victoria",
    topic: "Backing you",
  },
  {
    bg: "/images/cards/img-5.jpg",
    title: "Chrisholm Institute",
    topic: "For the better",
  },
  {
    bg: "/images/cards/img-6.jpg",
    title: "Manchester News",
    topic: "How safe is your car",
  },
  {
    bg: "/images/cards/img-7.jpg",
    title: "Monash",
    topic: "What it takes",
  },
];

const ImageGallery = () => {
  return (
    <div className="w-full p-4">
      <div className="w-full flex items-center justify-between text-black font-bold text-[6rem] tracking-tighter font-montserrat">
        <p>01</p>
        <p>/</p>
        <p>07</p>
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        {gallery?.map((item, i) => (
          <div className="h-[80vh] w-[5rem]">
            <img src={item.bg} alt="img" className="size-full object-cover object-center brightness-75" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
