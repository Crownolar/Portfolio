import React from "react";
import type { Project } from "../../types/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
