import React, { useState } from "react";

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  const placeholderBg = [
    "from-orange-900/40 to-stone-900",
    "from-amber-900/40 to-stone-900",
    "from-yellow-900/30 to-stone-900",
    "from-red-900/30 to-stone-900",
  ];
  const gradientClass = placeholderBg[index % placeholderBg.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-[#D96704]/50 hover:shadow-[0_0_40px_rgba(217,103,4,0.12)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-[#1a1a1a]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
            <span className="text-5xl font-bold text-white/10 font-[Space_Grotesk]">
              {project.id}
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category + Year badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-xs font-mono bg-[#D96704]/90 text-white px-2 py-1 rounded-md">
            {project.category}
          </span>
          <span className="text-xs font-mono bg-black/60 text-white/80 border border-white/10 px-2 py-1 rounded-md backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* ID + Title */}
        <div>
          <span className="text-xs font-mono text-[#D96704]/70 mb-1 block">{project.id}</span>
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#D96704] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs text-white/40 italic mt-0.5">{project.type}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Full description on hover — subtle expand */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: hovered ? "80px" : "0px", opacity: hovered ? 1 : 0 }}
        >
          <p className="text-xs text-white/40 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded-full hover:border-[#D96704]/40 hover:text-[#D96704]/80 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3 border-t border-white/10">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#D96704] px-3 py-1.5 rounded-lg hover:bg-[#c45a00] transition-colors duration-200 group/btn"
            >
              <i className="ri-external-link-line text-sm" />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-white/70 border border-white/20 px-3 py-1.5 rounded-lg hover:border-white/50 hover:text-white transition-all duration-200"
            >
              <i className="ri-github-line text-sm" />
              Source
            </a>
          )}
          {project.live === "#" && !project.github && (
            <span className="text-xs text-white/30 italic py-1.5">Coming soon</span>
          )}
        </div>
      </div>

      {/* Animated border glow line at bottom */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D96704] to-amber-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  );
};

export default ProjectCard;