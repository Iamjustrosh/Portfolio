import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        // Animate project items with stagger
        const projectItems = projectsRef.current?.querySelectorAll('.project-item');
        if (projectItems) {
            const projectsAnimation = gsap.fromTo(
                projectItems,
                {
                    y: 50,
                    opacity: 0
                },
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
                        // markers: true
                    }
                }
            );
        }

        // Animate the image container
        const imageAnimation = gsap.fromTo(
            ".image-container",
            {
                scale: 0.8,
                opacity: 0
            },
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
                    // markers: true
                }
            }
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} id="works" className="w-full max-h-screen text-white flex flex-col md:flex-row z-20">
            
            {/* Left Image Preview */}
            <div className="image-container w-full md:w-1/2 hidden md:flex items-center justify-center p-8">
                <div className="relative w-full h-[60vh] flex items-end overflow-hidden">
                    <img
                        key={activeIndex}
                        src={PROJECTS[activeIndex].image}
                        alt={PROJECTS[activeIndex].title}
                        loading="lazy"
                        className={`max-w-full max-h-[60vh] object-contain transition-all duration-500 origin-bottom reveal-image`}
                        style={{ height: '100%', transition: 'height 0.5s', animation: 'revealHeight 0.5s cubic-bezier(0.4,0,0.2,1)' }}
                    />
                </div>
            </div>

            {/* Right Project List */}
            <div ref={projectsRef} className="w-full md:w-1/2 px-8 flex flex-col justify-center">
                <div className="project-title my-4 text-4xl font-bold text-white md:my-8 md:text-7xl">
                    My <span className='text-[#D96704]'>Projects</span>
                </div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`project-item relative py-4 border-b border-white/20 cursor-pointer transition-all group ${index === activeIndex ? "text-white" : "text-white/50"
                            }`}
                    >
                        {/* Animated bottom border on hover */}
                        <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                        <a href={project.link} target="_blank">
                            <div className="text-sm font-mono mb-1">{project.id}</div>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-sm italic">{project.type}</p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
