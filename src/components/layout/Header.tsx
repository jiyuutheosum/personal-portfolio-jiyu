import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Sparkles, FolderKanban, Waves, Mail } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavItem = {
  label: string;
  id: string;
  Icon?: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { label: "Home", id: "home", Icon: Home },
  { label: "About", id: "about", Icon: User },
  { label: "Skills", id: "skills", Icon: Sparkles },
  { label: "Portfolio", id: "portfolio", Icon: FolderKanban },
  { label: "Beyond Code", id: "beyond-code", Icon: Waves },
  { label: "Contact", id: "contact", Icon: Mail },
];

const Header = (): React.JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]?.target?.id) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  return (
    <header className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={[
              "group inline-flex h-14 w-14 items-center justify-center rounded-full",
              "border border-white/20 bg-black/40 text-white",
              "backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]",
              "transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/50",
            ].join(" ")}
          >
            <motion.div
              initial={false}
              animate={{ rotate: open ? 90 : 0, scale: open ? 0.95 : 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className={[
            "w-[88vw] max-w-[360px] border-l border-black/5",
            "bg-[var(--color-cream,#F7F4ED)]/95 px-5 py-6 backdrop-blur-xl",
            "text-[var(--color-charcoal,#3A3A3A)] sm:px-6",
          ].join(" ")}
        >
          <div className="flex h-full flex-col">
            <div className="mb-8 pr-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted,#7A7A7A)]">
                Navigation
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-charcoal,#3A3A3A)]">
                Explore the site
              </h2>

              <p className="mt-2 text-sm leading-7 text-[var(--color-muted,#7A7A7A)]">
                Move through each section with a calmer, more focused menu.
              </p>
            </div>

            <nav aria-label="Section navigation" className="flex flex-1 flex-col gap-2">
              {navItems.map(({ label, id, Icon }) => {
                const isActive = activeSection === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleScrollToSection(id)}
                    className="relative text-left"
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div
                      className={[
                        "relative flex items-center gap-3 overflow-hidden rounded-2xl",
                        "border px-4 py-3.5 transition-all duration-300",
                        isActive
                          ? "border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sky,#DCEEF2)] text-[var(--color-charcoal,#3A3A3A)]"
                          : "border-black/5 bg-white/60 text-[var(--color-charcoal,#3A3A3A)] hover:bg-[var(--color-sky,#DCEEF2)]/70",
                      ].join(" ")}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-menu-item"
                          className="absolute inset-0 rounded-2xl bg-[var(--color-sky,#DCEEF2)]"
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 24,
                          }}
                        />
                      )}

                      <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                        {Icon && <Icon className="h-4 w-4" />}
                      </span>

                      <div className="relative z-10 flex flex-col">
                        <span className="text-sm font-medium">{label}</span>
                        <span className="text-xs text-[var(--color-muted,#7A7A7A)]">
                          Jump to section
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 rounded-3xl border border-dashed border-[var(--color-sage,#A8C3A0)] bg-[var(--color-beige,#F2E2C4)]/40 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted,#7A7A7A)]">
                Jiyuu
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-charcoal,#3A3A3A)]">
                A one-page portfolio designed to feel calm, soft, and intentional.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;