import React from "react";
import type { Skill } from "../../types/portfolio";

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="text-blue-400">{skill.icon}</div>
        <span className="font-medium text-gray-200">{skill.name}</span>
      </div>
      <span className="text-sm text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;
