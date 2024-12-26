import Image from "next/image";
import "./gallery.css";

import { motion } from "motion/react";

const Gallery = ({ bg, vignette, mousePosition }) => {
  const { x, y } = mousePosition;

  return (
    <div className="gallery">
      <Image width={1000} height={1000} src={bg} alt="background" className="object-cover size-full " />
      <motion.div style={{ x, y }} className="vignette">
        <Image width={300} height={300} src={vignette} alt="vignette" className="size-full object-cover object-center" />
      </motion.div>
    </div>
  );
};

export default Gallery;
