import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { PersonalInfo } from "../../types/portfolio";

interface AboutSectionProps {
  personal: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => (
  <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          About Me
        </span>
        <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
          Building interfaces that feel clean, modern, and intuitive
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/25 via-cyan-400/20 to-purple-500/25 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
              <img
                src="/Profile-Image..jpeg"
                alt="Oriade Yusuf"
                className="w-[280px] h-[320px] sm:w-[340px] sm:h-[400px] object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4">
            Frontend Engineer
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Hello, I’m {personal.name}
          </h3>
          <p className="text-slate-300 text-lg leading-8 mb-8">{personal.bio}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Focus</p>
              <p className="mt-2 text-white font-semibold">
                Responsive and user-friendly interfaces
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Growing Into</p>
              <p className="mt-2 text-white font-semibold">
                Backend development and full-stack delivery
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;