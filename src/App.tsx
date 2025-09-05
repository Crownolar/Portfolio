import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  ChevronDown,
  User,
  Briefcase,
  Star,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Portfolio data - easily updatable
  const portfolioData = {
    personal: {
      name: "Oriade Yusuf",
      title: "Software Developer",
      tagline: "Crafting digital experiences with modern web technologies",
      email: "oriadeyusuf34@gmail.com",
      github: "https://github.com/Crownolar?tab=repositories",
      linkedin: "https://www.linkedin.com/in/oriade-yusuf-50t50/",
      bio: "A passionate Frontend Engineer skilled in JavaScript, React, Tailwind CSS, and Python. I enjoy building clean, responsive, and user-friendly web applications.Currently, I’m expanding my expertise in backend development and creating impactful digital solutions",
    },
    skills: [
      { name: "React.js", level: 90, icon: <Code className="w-5 h-5" /> },
      { name: "Node.js", level: 15, icon: <Database className="w-5 h-5" /> },
      { name: "TypeScript", level: 50, icon: <Code className="w-5 h-5" /> },
      {
        name: "UI/UX Design",
        level: 35,
        icon: <Palette className="w-5 h-5" />,
      },
      { name: "MongoDB", level: 0, icon: <Database className="w-5 h-5" /> },
      { name: "Next.js", level: 15, icon: <Globe className="w-5 h-5" /> },
      { name: "Python", level: 45, icon: <Code className="w-5 h-5" /> },
      { name: "JavaScript", level: 90, icon: <Code className="w-5 h-5" /> },
    ],
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/example/ecommerce",
        live: "https://ecommerce-demo.com",
        featured: true,
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        tech: ["React", "Firebase", "Material-UI"],
        github: "https://github.com/example/taskmanager",
        live: "https://taskmanager-demo.com",
        featured: true,
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description:
          "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
        image:
          "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        tech: ["React", "OpenWeather API", "Chart.js"],
        github: "https://github.com/example/weather",
        live: "https://weather-demo.com",
        featured: false,
      },
      {
        id: 4,
        title: "Social Media Dashboard",
        description:
          "Analytics dashboard for social media management with data visualization and automated reporting features.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        tech: ["Vue.js", "D3.js", "Express.js"],
        github: "https://github.com/example/social-dashboard",
        live: "https://social-demo.com",
        featured: false,
      },
      {
        id: 5,
        title: "CoreNet",
        description:
          "Analytics dashboard for social media management with data visualization and automated reporting features.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        tech: ["React.js", "CSS", "Node.js"],
        github: "https://github.com/example/social-dashboard",
        live: "https://social-demo.com",
        featured: false,
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile
          ? "block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
          : `text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg ${
              activeSection === href ? "bg-gray-800 text-white" : ""
            }`
      }`}
    >
      {children}
    </button>
  );

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-blue-400">{skill.icon}</div>
          <span className="font-medium text-gray-200">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Star className="w-3 h-3" fill="currentColor" />
          Featured
        </div>
      )}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <NavLink href="home" mobile>
              Home
            </NavLink>
            <NavLink href="about" mobile>
              About
            </NavLink>
            <NavLink href="skills" mobile>
              Skills
            </NavLink>
            <NavLink href="projects" mobile>
              Projects
            </NavLink>
            <NavLink href="contact" mobile>
              Contact
            </NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            {portfolioData.personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {portfolioData.personal.title}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {portfolioData.personal.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
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

      {/* About Section */}
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
                {/* <User className="w-32 h-32 text-white" /> */}
                <img
                  src="/Profile-Image..jpeg"
                  alt="Profile"
                  className="rounded-full w-72 h-72 object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Hello! I'm {portfolioData.personal.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              <div className="flex gap-4">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                href={`mailto:${portfolioData.personal.email}`}
                className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">{portfolioData.personal.email}</p>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
              >
                <Github className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400">View my repositories</p>
              </a>
              <a
                href={portfolioData.personal.linkedin}
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
