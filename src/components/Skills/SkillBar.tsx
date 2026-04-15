import React from "react";
import { Code2, Database, Globe, Palette } from "lucide-react";
import type { Skill } from "../../types/portfolio";

interface SkillBarProps {
  skill: Skill;
}

const iconMap = {
  code: <Code2 className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  palette: <Palette className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
};

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-cyan-300 border border-white/10">
          {iconMap[skill.icon]}
        </div>
        <div>
          <p className="font-semibold text-white">{skill.name}</p>
          <p className="text-sm text-slate-400">Proficiency</p>
        </div>
      </div>
      <span className="text-sm font-medium text-slate-300">{skill.level}%</span>
    </div>

    <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export default SkillBar;