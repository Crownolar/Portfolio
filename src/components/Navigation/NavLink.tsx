import { type ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  mobile?: boolean;
  isActive?: boolean;
  onClick: (href: string) => void;
}

const NavLink = ({
  href,
  children,
  mobile = false,
  isActive = false,
  onClick,
}: NavLinkProps) => (
  <button
    onClick={() => onClick(href)}
    className={`${
      mobile
        ? "block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
        : `text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg ${
            isActive ? "bg-gray-800 text-white" : ""
          }`
    }`}
  >
    {children}
  </button>
);

export default NavLink;
