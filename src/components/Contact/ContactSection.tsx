import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { PersonalInfo } from "../../types/portfolio";

interface ContactSectionProps {
  personal: PersonalInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => (
  <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020617]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          Contact
        </span>
        <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white">
          Let’s build something meaningful together
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          I’m open to opportunities, collaborations, and interesting frontend projects.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href={`mailto:${personal.email}`}
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 border border-blue-400/20">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-white">Email</h3>
            <p className="mt-2 text-slate-400 break-all">{personal.email}</p>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-400/20">
              <Github className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-slate-400">Explore my repositories</p>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-slate-950/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
              <Linkedin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
            <p className="mt-2 text-slate-400">Connect professionally</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;