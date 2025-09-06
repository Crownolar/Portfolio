import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import type { PersonalInfo } from "../../types/portfolio";

interface ContactSectionProps {
  personal: PersonalInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => (
  <section id="contact" className="py-20 px-4 bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg">
          I'm always interested in new opportunities and collaborations
        </p>
      </div>
      <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <a
            href={`mailto:${personal.email}`}
            className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">{personal.email}</p>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
          >
            <Github className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400">View my repositories</p>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
          >
            <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400">Let's connect</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
