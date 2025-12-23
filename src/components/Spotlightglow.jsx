import { motion } from "motion/react";
const positions = {
  right: "top-10 right-0 translate-x-1/3",
  left: "bottom-10 left-0 -translate-x-1/3",
};

const Spotlightglow = ({ position = "right", color }) => {
  return (
    <motion.div
      className={`
        pointer-events-none fixed z-0 aspect-square
        w-[200px] sm:w-[300px] md:w-[500px]
        ${positions[position]}
      `}
      animate={{
        scale: [1, 1.1, 1],
        y: [0, -14, 0],
        opacity: [0.38, 0.65, 0.38],
      }}
      transition={{
        duration: 7,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <div
        className={`h-full w-full rounded-full ${color} blur-[90px] sm:blur-[120px]`}
      />
    </motion.div>
  );
};

export default Spotlightglow;