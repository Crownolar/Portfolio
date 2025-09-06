import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import useScrollNavigation from "../../hooks/useScrollNavigation";
import NavLink from "./NavLink";

interface NavigationProps {
  name: string;
}

const Navigation: React.FC<NavigationProps> = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollNavigation();

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {name}
          </div>

          <div className="hidden md:flex space-x-1">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <NavLink
                  key={section}
                  href={section}
                  isActive={activeSection === section}
                  onClick={handleNavClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              )
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <NavLink
              key={section}
              href={section}
              mobile
              onClick={handleNavClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
