import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Sparkles,
  Folder,
  Mail,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  FileTextIcon,
} from "lucide-react";

import TiltedCard from "./ui/tilted-card";

export default function Hero() {
  type SocialLink = {
    label: string;
    href: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    target?: string;
    rel?: string;
  };

  const socialLinks: SocialLink[] = [
    {
      label: "github",
      href: "https://github.com/jiyuutheosum",
      Icon: GithubIcon,
    },
    {
      label: "facebook",
      href: "https://web.facebook.com/jiyuzxc",
      Icon: FacebookIcon,
    },
    {
      label: "instagram",
      href: "https://www.instagram.com/jiyuxcz/",
      Icon: InstagramIcon,
    },
    {
      label: "email",
      href: "mailto:baraocor.jalanie@gmail.com",
      Icon: MailIcon,
      target: "_self",
      rel: "noreferrer",
    },
    {
      label: "resume",
      href: "/Baraocor_Resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      Icon: FileTextIcon,
    },
  ];

  const menuItems = [
    { label: "Home", to: "/", Icon: Home },
    { label: "About me", to: "/about", Icon: User },
    { label: "Skills", to: "/skills", Icon: Sparkles },
    { label: "Portfolio", to: "/portfolio", Icon: Folder },
    { label: "Contact", to: "/contact", Icon: Mail },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-page background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(/bg-landing.jpg)" }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#0b1b25]/35" />

      {/* Centered Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6">
        <TiltedCard
          rotateAmplitude={12}
          scaleOnHover={1.03}
          perspective={900}
          className="w-full max-w-[520px]"
        >
          <div className="w-full rounded-[28px] border border-white/70 bg-[#4f7a82]/95 px-8 py-10 text-center text-white backdrop-blur-sm shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            {/* Avatar */}
            <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-4 border-white/70">
              <img
                src="/profile.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight">
              Hi! I&apos;m Jiyuu!
            </h1>

            <p className="mx-auto mt-3 max-w-[40ch] text-sm leading-relaxed text-white/90">
              Building clean, intuitive digital experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center justify-center gap-6">
              {socialLinks.map(({ label, href, target, rel, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={target ?? "_blank"}
                  rel={rel ?? "noopener noreferrer"}
                  className="rounded-full p-2 transition hover:bg-white/10"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-white/90" />
                </a>
              ))}
            </div>

            {/* Menu Buttons w/ Icons */}
            <div className="mt-7 space-y-3">
              {menuItems.map(({ label, to, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="group flex items-center justify-between rounded-full border border-white/70 px-5 py-3 text-sm text-white/95 transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/50 bg-white/5">
                      <Icon className="h-4 w-4 text-white/90" />
                    </span>
                    <span>{label}</span>
                  </span>

                  <span className="text-white/80 transition group-hover:translate-x-0.5">
                    ➢
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </TiltedCard>
      </div>
    </section>
  );
}