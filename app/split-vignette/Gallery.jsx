import "./gallery.css";

import { motion } from "motion/react";

const Gallery = ({ bg, vignette, mousePosition, text }) => {
  const { x, y } = mousePosition;

  return (
    <div className="gallery">
      <img src={bg} alt="background" className="object-cover size-full " />
      <motion.div style={{ x, y }} className="vignette">
        <img src={vignette} alt="vignette" className="size-full object-cover object-center" />
      </motion.div>
      {text && <p className="font-moderniz text-[3rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{text}</p>}
    </div>
  );
};

export default Gallery;
