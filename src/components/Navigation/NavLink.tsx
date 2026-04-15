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
    className={
      mobile
        ? `w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
            isActive
              ? "bg-white/10 text-white"
              : "text-slate-300 hover:bg-white/5 hover:text-white"
          }`
        : `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`
    }
  >
    {children}
  </button>
);

export default NavLink;