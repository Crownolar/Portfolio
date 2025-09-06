import React from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import type { Project } from "../../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative">
    {project.featured && (
      <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
        <Star className="w-3 h-3" fill="currentColor" />
        Featured
      </div>
    )}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
