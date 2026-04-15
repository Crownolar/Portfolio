import React from "react";
import type { Skill } from "../../types/portfolio";
import SkillBar from "./SkillBar";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
  <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020617]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200">
          Skills & Technologies
        </span>
        <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
          Tools I use to craft solid digital experiences
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
          A blend of frontend engineering, modern tooling, and growing backend knowledge.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillBar key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;