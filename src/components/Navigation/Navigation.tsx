import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import useScrollNavigation from "../../hooks/useScrollNavigation";
import NavLink from "./NavLink";

interface NavigationProps {
  name: string;
}

const sections = ["home", "about", "skills", "projects", "contact"];

export const Navigation: React.FC<NavigationProps> = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollNavigation();

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl px-5 py-4 shadow-2xl shadow-black/20">
          <button
            onClick={() => handleNavClick("home")}
            className="text-lg sm:text-xl font-semibold tracking-tight text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {name}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <NavLink
                key={section}
                href={section}
                isActive={activeSection === section}
                onClick={handleNavClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-3 shadow-xl">
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <NavLink
                  key={section}
                  href={section}
                  mobile
                  isActive={activeSection === section}
                  onClick={handleNavClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};