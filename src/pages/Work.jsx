import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );

    // Cards stagger
    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (cards?.length) {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.3,
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#111] text-white px-6 md:px-16 lg:px-24 pt-32 pb-24">


      {/* Header */}
      <div ref={headerRef} className="mb-16">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
          All <span className="text-[#D96704]">Work</span>
        </h1>
        <p className="text-white/40 text-base mt-4 max-w-xl leading-relaxed">
          A collection of projects spanning web apps, UI challenges, games, and more.
        </p>

        {/* Stats row */}
        <div className="flex gap-8 mt-8">
          <div>
            <span className="text-3xl font-bold text-white">{PROJECTS.length}</span>
            <p className="text-xs text-white/30 font-mono uppercase tracking-wider mt-0.5">Projects</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <span className="text-3xl font-bold text-white">
              {Array.from(new Set(PROJECTS.map((p) => p.category))).length}
            </span>
            <p className="text-xs text-white/30 font-mono uppercase tracking-wider mt-0.5">Categories</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <span className="text-3xl font-bold text-white">
              {Math.min(...PROJECTS.map((p) => parseInt(p.year)))}–
              {Math.max(...PROJECTS.map((p) => parseInt(p.year)))}
            </span>
            <p className="text-xs text-white/30 font-mono uppercase tracking-wider mt-0.5">Years</p>
          </div>
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm font-mono px-4 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#D96704] border-[#D96704] text-white shadow-[0_0_20px_rgba(217,103,4,0.3)]"
                : "border-white/20 text-white/50 hover:border-white/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <i className="ri-folder-open-line text-6xl text-white/10 mb-4" />
          <p className="text-white/30 text-lg">No projects in this category yet.</p>
        </div>
      ) : (
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}

      {/* Footer note */}
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-sm font-mono">
          More projects coming soon.
        </p>

      </div>
    </div>
  );
};

export default Work;