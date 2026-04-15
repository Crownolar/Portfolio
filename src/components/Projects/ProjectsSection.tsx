import React from "react";
import { FolderKanban, Sparkles } from "lucide-react";
import type { Project } from "../../types/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <FolderKanban className="w-4 h-4" />
            Project Showcase
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Selected work that reflects my
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              frontend and product thinking
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-slate-400">
            A collection of real-world builds, product interfaces, and web
            applications focused on usability, responsiveness, and modern user
            experience.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Featured Projects
                </h3>
                <p className="text-sm text-slate-400">
                  Highlighted work with stronger product and engineering depth
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300">
                <FolderKanban className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  More Projects
                </h3>
                <p className="text-sm text-slate-400">
                  Additional projects that demonstrate range and consistency
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;