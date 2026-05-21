import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Your experience data — update with your real info ───────────────────────
const EXPERIENCES = [
  {
    id: "01",
    role: "SDE",
    company: "Caresoft Inc.",
    companyUrl: "https://www.caresoftinc.com/",
    type: "Remote",
    duration: "2025 — Present",
    description:
      "Developed and maintained enterprise performance management solutions using OracleHyperion tools, optimizing financial planning, reporting, and data integration processes to improve system efficiency and business decision-making.",
    skills: ["Oracle Hyperion", "Oracle EPM", "Oracle EDMCS"],
    current: true,
  },
  {
    id: "02",
    role: "Frontend Developer Intern",
    company: "TFP Technologies",
    companyUrl: "https://tfptechnologies.in/",
    type: "Onsite",
    duration: "2025",
    description:
      "Assisted in developing and maintaining responsive user interfaces using modern frontend technologies to enhance user experience and website performance",
    skills: ["React", "HTML", "CSS", "JavaScript", "Figma"],
    current: false,
  },
  {
    id: "03",
    role: "Graphics Designer Intern",
    company: "Satna Incubation Center",
    companyUrl: "https://sicsatna.org/",
    type: "Onsite",
    duration: "2024",
    description:
      "Created engaging visuals and promotional videos for Instagram during a two-month internship.",
    skills: ["Canva","Photoshop"],
    current: false,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animated vertical line draw
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Each card
    const items = timelineRef.current?.querySelectorAll(".exp-item");
    gsap.fromTo(
      items,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full text-white px-6 md:px-16 lg:px-24 py-24"
    >
      {/* Section Header */}
      <div className="mb-16">
        {/* <p className="text-[#D96704] font-mono text-sm tracking-widest uppercase mb-3">
          Background
        </p> */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
          My <span className="text-[#D96704]">Experience</span>
        </h2>
        {/* <p className="text-white/40 text-base mt-4 max-w-lg leading-relaxed">
          Where I've worked, what I've built, and how I've grown as a developer.
        </p> */}
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#D96704] via-white/20 to-transparent"
        />

        <div className="flex flex-col gap-0">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-item group relative pl-8 md:pl-24 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-[28px] top-1 w-2 h-2 rounded-full bg-[#D96704] shadow-[0_0_12px_rgba(217,103,4,0.6)] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(217,103,4,0.8)]" />

              {/* Card */}
              <div className="relative border border-white/10 bg-white/[0.03] rounded-2xl p-6 md:p-8 transition-all duration-400 group-hover:border-[#D96704]/30 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_40px_rgba(217,103,4,0.06)]">
                {/* Glow line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D96704]/0 via-[#D96704]/40 to-[#D96704]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span className="text-xs font-mono bg-[#D96704]/20 border border-[#D96704]/40 text-[#D96704] px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D96704] transition-colors duration-200"
                      >
                        {exp.company}
                      </a>
                      <span className="text-white/20">·</span>
                      <span className="text-white/30 italic">{exp.type}</span>
                    </div>
                  </div>

                  <span className="text-sm font-mono text-white/30 shrink-0">
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono bg-white/5 border border-white/10 text-white/50 px-2.5 py-1 rounded-full group-hover:border-[#D96704]/20 group-hover:text-white/60 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* ID label */}
                <span className="absolute bottom-6 right-6 text-5xl font-bold text-white/[0.03] select-none pointer-events-none">
                  {exp.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;