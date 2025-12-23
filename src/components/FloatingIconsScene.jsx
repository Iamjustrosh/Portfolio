import FloatingIcon from "./FloatingIcon";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* React */}
      <FloatingIcon
        src="/icons/React.webp"
        className="left-6 top-[18%] md:left-20 md:top-[18%] lg:left-80 lg:top-[20%]"
        delay={0}
      />

      {/* GitHub */}
      <FloatingIcon
        src="/icons/github.webp"
        className="right-4 top-[12%] md:right-20 md:top-[20%] lg:right-80 lg:top-[22%]"
        delay={0.5}
      />

      {/* HTML */}
      <FloatingIcon
        src="/icons/HTML.webp"
        className="left-2 bottom-[12%] md:left-12 md:bottom-[18%] lg:left-50 lg:bottom-[20%]"
        delay={1}
      />

      {/* Tailwind */}
      <FloatingIcon
        src="/icons/TailwindCSS.webp"
        className="right-2 bottom-[10%] md:right-12 md:bottom-[18%] lg:right-24 lg:bottom-[20%]"
        delay={1.5}
      />
    </div>
  );
};

export default FloatingIcons;
