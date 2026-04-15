import React from "react";
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import type { PersonalInfo } from "../../types/portfolio";

interface HeroSectionProps {
  personal: PersonalInfo;
  onViewWork: () => void;
  onContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  personal,
  onViewWork,
  onContact,
}) => (
  <section
    id="home"
    className="relative min-h-screen overflow-hidden flex items-center"
  >
    <div className="absolute inset-0 bg-slate-950" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.10),transparent_35%)]" />
    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200 mb-6">
          <Sparkles className="w-4 h-4" />
          Available for opportunities and collaborations
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        <p className="mt-5 text-xl sm:text-2xl font-medium text-slate-200">
          {personal.title}
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-400">
          {personal.tagline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={onViewWork}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            View My Work
          </button>

          <button
            onClick={onContact}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-slate-100 font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {[
            { label: "Experience Focus", value: "Frontend Development" },
            { label: "Core Stack", value: "React • TypeScript" },
            { label: "Priority", value: "Clean User Experience" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
            >
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-2 text-white font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <button
      onClick={onViewWork}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-8 h-8" />
    </button>
  </section>
);

export default HeroSection;