import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden select-none"
    >
      <span
        ref={(el) => (textRef.current[0] = el)}
        className="whitespace-nowrap text-[20rem] md:text-[30rem] xl:text-[40rem]
          font-extrabold lowercase leading-none text-black/10 font-space"
      >
        &nbsp;developer
      </span>
      <span
        ref={(el) => (textRef.current[1] = el)}
        className="whitespace-nowrap text-[20rem] md:text-[30rem] xl:text-[40rem]
          font-extrabold lowercase leading-none text-black/10 font-space"
      >
        &nbsp;developer
      </span>
    </div>
  );
};

export default ScrollingText;
