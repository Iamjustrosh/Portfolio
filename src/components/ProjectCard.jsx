import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    image: portfolio,
    title: "Portfolio Website",
    category: "Website",
    description:
      "A sleek, responsive website built to showcase my skills, projects, and creative journey. Designed with a modern UI, smooth animations, and clear navigation.",
    link: "#",
  },
  {
    image: portfolio,
    title: "Portfolio Website",
    category: "Website",
    description:
      "A sleek, responsive website built to showcase my skills, projects, and creative journey. Designed with a modern UI, smooth animations, and clear navigation.",
    link: "#",
  },
];

const ProjectCard = () => {
  return (
    <div className="space-y-20">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-transparent border-none shadow-none flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          {/* Image section */}
          <div className="relative top-0 left-0 w-fit max-w-xs md:max-w-[50%]">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-auto h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-2 left-4 z-0 w-[96%] h-[96%] md:w-full md:h-full bg-[#53347D]/70 rounded-xl md:rounded-2xl shadow-[0_4px_12px_rgba(83,52,125,0.5)]" />
          </div>

          {/* Content */}
          <CardContent className="flex flex-col gap-4 w-full md:w-2/3 text-center md:text-left p-0">
            <div className="text-white/55 text-sm md:text-xl border border-white/55 w-fit mx-auto md:mx-0 px-4 py-1 rounded-full">
              {project.category}
            </div>
            <h2 className="text-2xl md:text-5xl font-semibold text-white">
              {project.title}
            </h2>
            <p className="hidden md:block text-white/80 text-base md:text-lg">
              {project.description}
            </p>
            <Button
              asChild
              className="bg-[#D96704] hover:bg-[#c15802] text-white text-sm md:text-lg px-5 py-2 rounded-full mx-auto md:mx-0 w-fit"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Here
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
