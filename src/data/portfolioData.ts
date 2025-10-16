export const portfolioData = {
  personal: {
    name: "Oriade Yusuf",
    title: "Software Developer",
    tagline: "Crafting digital experiences with modern web technologies",
    email: "oriadeyusuf34@gmail.com",
    github: "https://github.com/Crownolar?tab=repositories",
    linkedin: "https://www.linkedin.com/in/oriade-yusuf-50t50/",
    bio: "A passionate Frontend Engineer skilled in JavaScript, React, Tailwind CSS, and Python. I enjoy building clean, responsive, and user-friendly web applications. Currently, I'm expanding my expertise in backend development and creating impactful digital solutions.",
  },
  skills: [
    { name: "React.js", level: 90, icon: "Code" },
    { name: "Node.js", level: 15, icon: "Database" },
    { name: "TypeScript", level: 50, icon: "Code" },
    { name: "UI/UX Design", level: 35, icon: "Palette" },
    { name: "MongoDB", level: 0, icon: "Database" },
    { name: "Next.js", level: 15, icon: "Globe" },
    { name: "Python", level: 45, icon: "Code" },
    { name: "JavaScript", level: 90, icon: "Code" },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution built with React, Node.js, and Stripe integration...",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/example/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Smart Task Management App",
      description: "A clean and modern task management app.",
      image: "Taskflow.png",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Crownolar/Smart-Task-Manager",
      live: "https://smart-taskmanager.surge.sh",
      featured: true,
    },
    {
      id: 3,
      title: "Weathora",
      description:
        "A responsive weather application with location-based forecasts and detailed weather analytics.",
      image: "wapp.png",
      tech: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
      github: "hhttps://github.com/Crownolar/WeatherApp",
      live: "https://weathora.surge.sh",
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
        "Built a task management web application (CoreNet) that streamlined task assignments, enabled real-time progress tracking, and improved team productivity for administrators and team members.s.",
      image: "Corenet.png",
      tech: ["React.js", "CSS", "Node.js"],
      github: "https://github.com/Crownolar/CoreNet-Application",
      live: "https://corenetapplication.onrender.com/",
      featured: false,
    },
    {
      id: 6,
      title: "MyProfile",
      description:
        "✨ Profile Hub — My Digital Identity. A clean, modern profile app that brings all my work and social links together. From my portfolio to GitHub, LinkedIn, and social platforms, everything is accessible in one beautiful interface. Features include dark/light theme toggle, smooth animations, and full mobile responsiveness",
      image: "Profile.png",
      tech: ["React.js", "Typescript", "TailwindCSS"],
      github: "https://github.com/Crownolar/Profile-Link",
      live: "http://oriadeyusuf-link.surge.sh/",
      featured: true,
    },
  ],
};
