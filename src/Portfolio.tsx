import { Code, Palette, Database, Globe } from "lucide-react";

import { Footer } from "./components/Layout/Footer";
import { portfolioData } from "./data/portfolioData";
import useScrollNavigation from "./hooks/useScrollNavigation";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ContactSection from "./components/Contact/ContactSection";
import HeroSection from "./components/Sections/HeroSection";
import AboutSection from "./components/Sections/AboutSection";
import { Navigation } from "./components/Navigation/Navigation";

const Portfolio = () => {
  const { scrollToSection } = useScrollNavigation();

  const skillsWithIcons = portfolioData.skills.map((skill) => ({
    ...skill,
    icon: getIcon(skill.icon),
  }));

  function getIcon(iconName: string) {
    const icons = {
      Code: <Code className="w-5 h-5" />,
      Palette: <Palette className="w-5 h-5" />,
      Database: <Database className="w-5 h-5" />,
      Globe: <Globe className="w-5 h-5" />,
    };
    return (
      icons[iconName as keyof typeof icons] || <Code className="w-5 h-5" />
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation name={portfolioData.personal.name} />

      <HeroSection
        personal={portfolioData.personal}
        onViewWork={() => scrollToSection("projects")}
        onContact={() => scrollToSection("contact")}
      />

      <AboutSection personal={portfolioData.personal} />

      <SkillsSection skills={skillsWithIcons} />

      <ProjectsSection projects={portfolioData.projects} />

      <ContactSection personal={portfolioData.personal} />

      <Footer name={portfolioData.personal.name} />
    </div>
  );
};

export default Portfolio;
