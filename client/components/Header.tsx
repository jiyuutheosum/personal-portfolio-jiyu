import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Sparkles, FolderKanban, Mail } from 'lucide-react';

type NavItem = {
  label: string;
  to: string;
  Icon?: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/', Icon: Home },
  { label: 'About', to: '/about', Icon: User },
  { label: 'Skills', to: '/skills', Icon: Sparkles },
  { label: 'Portfolio', to: '/portfolio', Icon: FolderKanban },
  { label: 'Contact', to: '/contact', Icon: Mail },
];

const Header = (): React.JSX.Element => {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Paper bar */}
        <div
          className={[
            'flex items-center justify-between',
            'rounded-3xl px-5 py-3 sm:px-7 sm:py-4',
            'border border-black/5',
            'bg-[var(--surface)]',
            'shadow-[var(--shadow-soft)]',
          ].join(' ')}
        >
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-[var(--text)]"
          >
            <span className="text-2xl font-semibold tracking-tight">J.ui</span>
            <span className="hidden sm:inline text-sm opacity-70">— portfolio</span>
          </NavLink>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ label, to, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    'group inline-flex items-center gap-2',
                    'rounded-2xl px-3 py-2',
                    'text-sm font-medium',
                    'text-[var(--text)]/75 hover:text-[var(--text)]',
                    'transition',
                    isActive ? 'bg-black/5 text-[var(--text)]' : 'hover:bg-black/5',
                  ].join(' ')
                }
              >
                {Icon ? <Icon className="h-4 w-4 opacity-70 group-hover:opacity-100" /> : null}
                <span className="relative">
                  {label}
                  {/* soft underline on hover */}
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--accent)]/60 transition-all group-hover:w-full" />
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile: simple */}
          <div className="md:hidden">
            <NavLink
              to="/"
              className="rounded-2xl px-3 py-2 text-sm font-medium bg-black/5 text-[var(--text)]"
            >
              Menu
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;