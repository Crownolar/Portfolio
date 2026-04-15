import React from "react";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-blue-500/10">
    {project.featured && (
      <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-400 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-lg">
        <Star className="w-3.5 h-3.5" fill="currentColor" />
        Featured
      </div>
    )}

    <div className="relative h-60 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

      <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
        <div className="max-w-[80%]">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-300/80 mb-2">
            Project
          </p>
          <h3 className="text-2xl font-semibold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/35 flex items-center justify-center">
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-105"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <div className="flex h-[calc(100%-15rem)] flex-col p-6">
      <p className="text-slate-300 leading-7 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;