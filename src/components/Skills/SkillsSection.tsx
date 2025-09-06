import React from "react";
import type { Skill } from "../../types/portfolio";
import SkillBar from "./SkillBar";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
  <section id="skills" className="py-20 px-4 bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
