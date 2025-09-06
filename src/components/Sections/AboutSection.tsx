import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { PersonalInfo } from "../../types/portfolio";

interface AboutSectionProps {
  personal: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center bg-opacity-75">
            <img
              src="/Profile-Image..jpeg"
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Hello! I'm {personal.name}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {personal.bio}
          </p>
          <div className="flex gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
