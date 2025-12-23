import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AnimatedWords = ({ text, className = "" }) => {
  return (
    <motion.span
      aria-label={text}
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={word}
          className="mr-2 inline-block"
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedWords;
