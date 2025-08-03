import React from "react";
import { SKILLS } from "../constants/skills";
import blueEllipse from '../assets/logos/Ellipse 3.webp'
import redEllipse from '../assets/logos/Ellipse 2.webp'

const SkillCard = ({ skill }) => (
  <div className="group flex min-w-[80px] md:min-w-[128px] flex-shrink-0 flex-col items-center p-2 md:p-3 transition-all duration-300 hover:scale-105">
    <div
      className="mb-3 flex h-28 w-20 md:h-36 md:w-32 flex-col items-center justify-center rounded-lg bg-transparent transition-all duration-300 group-hover:brightness-110"
      style={{
        border: `2px solid ${skill.color}`,
        boxShadow: `0 0 6px 2px ${skill.color}`,
      }}
    >
      <div className="relative mb-2 h-12 w-12 md:h-16 md:w-16">
        <img
          src={skill.logo}
          alt={skill.name}
          loading="lazy"
          width={64}
          height={64}
          className="object-contain transition-all duration-300"
        />
      </div>
      <h3 className="text-xs md:text-sm font-semibold text-white text-center">
        {skill.name}
      </h3>
    </div>
  </div>
);



const SkillRow = ({ skills, direction }) => (
  <div className="relative mb-4 md:mb-6">
    {/* Fade overlays */}
    <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent md:w-16" />
    <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-[#111] via-[#111]/80 to-transparent md:w-16" />

    {/* Scrollable container */}
    <div className="scrollbar-hide overflow-x-hidden">
      <div
        className={`flex min-w-max space-x-4 px-6 md:space-x-6 md:px-8 animate-scroll-${direction}`}
        style={{
          animationDuration: "30s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>


  </div>
);

const Skills = () => {
  const midPoint = Math.ceil(SKILLS.length / 2);
  const firstRow = SKILLS.slice(0, midPoint);
  const secondRow = SKILLS.slice(midPoint);

  return (
    <section id="skills" className="w-full py-16 px-8 relative">

      <div className="absolute left-0 z-0 top-[800px]">
      <img src={redEllipse} loading="lazy" alt="" />
      </div>
      <div className="absolute right-0 z-0 top-[400px]">
      <img src={blueEllipse} loading="lazy" alt="" />
      </div>
      <div className="mx-auto max-w-7xl z-20 ">
        <h2 className="my-4 text-4xl font-bold text-white md:my-8 md:text-7xl ">
          My <span className='text-[#D96704]'>Skills</span>
        </h2>
        <div className="space-y-4 md:space-y-6">
          <SkillRow skills={firstRow} direction="left" />
          <SkillRow skills={secondRow} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
