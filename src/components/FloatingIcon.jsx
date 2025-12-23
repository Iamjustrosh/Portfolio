import { motion } from "motion/react";

const random = (min, max) => Math.random() * (max - min) + min;

const FloatingIcon = ({ src, className, delay = 0 }) => {
  return (
    <motion.img
      src={src}
      alt=""
      draggable={false}
      // Increased sizes: w-20 (was w-14), md:w-28 (was md:w-16), lg:w-36 (was lg:w-20)
      className={`pointer-events-auto select-none absolute w-20 md:w-28 lg:w-30 ${className}`}
      initial={{
        y: random(-10, 10),
        x: random(-10, 10),
      }}
      animate={{
        y: [0, random(-20, 20), 0],
        x: [0, random(-20, 20), 0],
        rotate: [0, random(-10, 10), 0],
      }}
      transition={{
        duration: random(6, 10),
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.15,
        rotate: 6,
        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
      }}
    />
  );
};

export default FloatingIcon;
