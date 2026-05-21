import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FEATURED_PROJECTS } from "../constants/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const projectItems = projectsRef.current?.querySelectorAll(".project-item");
    if (projectItems) {
      gsap.fromTo(
        projectItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 50%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    gsap.fromTo(
      ".image-container",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".image-container",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Button fade-up
    gsap.fromTo(
      btnRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const activeProject = FEATURED_PROJECTS[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="works"
      className="w-full text-white flex flex-col z-20"
    >
      {/* Main two-column layout — identical to your original */}
      <div className="w-full flex flex-col md:flex-row max-h-screen">
        {/* Left Image Preview */}
        <div className="image-container w-full md:w-1/2 hidden md:flex items-center justify-center p-8">
          <div className="relative w-full h-[60vh] flex items-end overflow-hidden">
            <img
              key={activeIndex}
              src={activeProject.image}
              alt={activeProject.title}
              loading="lazy"
              className="max-w-full max-h-[60vh] object-contain transition-all duration-500 origin-bottom reveal-image"
              style={{
                height: "100%",
                transition: "height 0.5s",
                animation: "revealHeight 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
        </div>

        {/* Right Project List */}
        <div
          ref={projectsRef}
          className="w-full md:w-1/2 px-8 flex flex-col justify-center"
        >
          <div className="project-title my-4 text-4xl font-bold text-white md:my-8 md:text-7xl">
            My <span className="text-[#D96704]">Projects</span>
          </div>

          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`project-item relative py-4 border-b border-white/20 cursor-pointer transition-all group ${
                index === activeIndex ? "text-white" : "text-white/50"
              }`}
            >
              {/* Animated bottom border on hover */}
              <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              <a href={project.live !== "#" ? project.live : undefined} target="_blank" rel="noopener noreferrer">
                <div className="text-sm font-mono mb-1">{project.id}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm italic">{project.type}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* View All Work Button */}
      <div ref={btnRef} className="flex justify-center items-center py-16 px-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/40 text-sm font-mono tracking-widest uppercase">
            {FEATURED_PROJECTS.length} of {/* total */ 8} projects shown
          </p>
          <button
            onClick={() => navigate("/work")}
            className="group relative flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base overflow-hidden transition-all duration-300 hover:border-[#D96704]/60 hover:shadow-[0_0_30px_rgba(217,103,4,0.2)]"
          >
            {/* Fill animation */}
            <span className="absolute inset-0 bg-[#D96704]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />

            <span className="relative z-10">View All Work</span>

            {/* Arrow icon with slide animation */}
            <span className="relative z-10 flex items-center overflow-hidden w-5">
              <i className="ri-arrow-right-line text-lg transition-transform duration-300 group-hover:translate-x-6 absolute" />
              <i className="ri-arrow-right-line text-lg transition-transform duration-300 -translate-x-6 group-hover:translate-x-0 absolute text-[#D96704]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;