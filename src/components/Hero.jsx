import AnimatedWords from "./AnimatedWords";
import Spotlightglow from "./Spotlightglow";
import ScrollingText from "./ScrollingText";
import FloatingIconsScene from "./FloatingIconsScene";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* 3D Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIconsScene />
      </div>

      {/* Scrolling background text */}
      <ScrollingText />

      {/* Background glows */}
      <Spotlightglow position="right" color="bg-[#643F99]" />
      <Spotlightglow position="left" color="bg-[#FC7502]" />

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-[80vh] items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 md:gap-10 text-center px-4">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl sm:text-5xl md:text-7xl
              font-light leading-[1.08] md:leading-[1.1]
              lg:w-9/12 gradient-text drop-shadow-2xl
            "
          >
            <AnimatedWords text="Hi, I'm Roshan," />
            <br />
            <span className="text-primary font-semibold">
              <AnimatedWords text="a creative" />
            </span>{" "}
            <span className="font-semibold">
              <AnimatedWords text="developer" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="
               lg:w-6/12 2xl:w-5/8
              text-base sm:text-lg md:text-2xl
              text-muted-foreground
            "
          >
            a passionate developer who blends creativity with code. From building
            responsive websites to exploring virtual worlds and anime, I bring energy and precision
            to everything I create.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
