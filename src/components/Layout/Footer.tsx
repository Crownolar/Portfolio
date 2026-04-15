import React from "react";

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => (
  <footer className="border-t border-white/10 bg-slate-950 py-8 px-4">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
      <p>&copy; 2025 {name}. All rights reserved.</p>
      <p>Designed and built with React, TypeScript, and Tailwind CSS.</p>
    </div>
  </footer>
);