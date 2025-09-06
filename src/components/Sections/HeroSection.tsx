import React from "react";
import { ChevronDown } from "lucide-react";
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
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20"></div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        {personal.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-4">{personal.title}</p>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        {personal.tagline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={onViewWork}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          View My Work
        </button>
        <button
          onClick={onContact}
          className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-gray-400" />
    </div>
  </section>
);

export default HeroSection;
