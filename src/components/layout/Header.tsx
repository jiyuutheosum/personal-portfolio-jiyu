import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Sparkles,
  FolderKanban,
  Waves,
  Mail,
} from "lucide-react";

type NavItem = {
  label: string;
  to: string;
  Icon?: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/", Icon: Home },
  { label: "About", to: "/about", Icon: User },
  { label: "Skills", to: "/skills", Icon: Sparkles },
  { label: "Portfolio", to: "/portfolio", Icon: FolderKanban },
  { label: "Beyond Code", to: "/beyond-code", Icon: Waves },
  { label: "Contact", to: "/contact", Icon: Mail },
];

const Header = (): React.JSX.Element => {
  return (
    <header className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3 sm:bottom-6">
      <nav
        className={[
          "flex max-w-full items-center gap-1 sm:gap-2",
          "overflow-x-auto whitespace-nowrap",
          "rounded-full border border-white/20",
          "bg-black/40 backdrop-blur-xl",
          "px-2 py-2 sm:px-4 sm:py-3",
          "shadow-[0_25px_80px_rgba(0,0,0,0.45)]",
          "scrollbar-none",
        ].join(" ")}
      >
        {navItems.map(({ label, to, Icon }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <div className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    className="absolute inset-0 rounded-full bg-white/20 shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
                  />
                )}

                <span
                  className={[
                    "group relative inline-flex shrink-0 items-center gap-1.5 sm:gap-2",
                    "rounded-full px-3 py-2 sm:px-4",
                    "text-xs sm:text-sm font-medium",
                    "transition-all duration-300",
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:-translate-y-0.5 hover:text-white",
                  ].join(" ")}
                >
                  {Icon && (
                    <Icon
                      className={[
                        "h-4 w-4 transition-all duration-300",
                        isActive
                          ? "scale-100 opacity-100"
                          : "opacity-80 group-hover:opacity-100",
                      ].join(" ")}
                    />
                  )}
                  <span>{label}</span>
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;