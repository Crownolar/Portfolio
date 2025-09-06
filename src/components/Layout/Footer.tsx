import React from "react";

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => (
  <footer className="py-8 px-4 border-t border-gray-800">
    <div className="max-w-6xl mx-auto text-center text-gray-400">
      <p>&copy; 2025 {name}. All rights reserved.</p>
    </div>
  </footer>
);
