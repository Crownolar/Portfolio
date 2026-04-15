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

  const getIcon = (iconName: string) => {
    const icons = {
      Code: <Code className="w-5 h-5" />,
      Palette: <Palette className="w-5 h-5" />,
      Database: <Database className="w-5 h-5" />,
      Globe: <Globe className="w-5 h-5" />,
    };

    return icons[iconName as keyof typeof icons] || <Code className="w-5 h-5" />;
  };

  const skillsWithIcons = portfolioData.skills.map((skill) => ({
    ...skill,
    icon: getIcon(skill.icon),
  }));

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Global background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <Navigation name={portfolioData.personal.name} />

      <main className="relative z-10">
        <HeroSection
          personal={portfolioData.personal}
          onViewWork={() => scrollToSection("projects")}
          onContact={() => scrollToSection("contact")}
        />

        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <AboutSection personal={portfolioData.personal} />
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <SkillsSection skills={skillsWithIcons} />
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <ProjectsSection projects={portfolioData.projects} />
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <ContactSection personal={portfolioData.personal} />
        </div>
      </main>

      <Footer name={portfolioData.personal.name} />
    </div>
  );
};

export default Portfolio;