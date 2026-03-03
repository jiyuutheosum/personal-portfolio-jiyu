import { NavLink } from "react-router-dom";
import { Home, User, Sparkles, Folder, Mail } from "lucide-react";
import TiltedCard from "./ui/tilted-card";

export default function Hero() {
  const socialLinks = [
    {
      icon: "github",
      href: "https://github.com/jiyuutheosum",
      viewBox: "0 0 20 20",
      path: "M10 0.242493C8.68678 0.242493 7.38642 0.50115 6.17317 1.0037C4.95991 1.50624 3.85752 2.24284 2.92893 3.17142C1.05357 5.04679 0 7.59033 0 10.2425C0 14.6625 2.87 18.4125 6.84 19.7425C7.34 19.8225 7.5 19.5125 7.5 19.2425V17.5525C4.73 18.1525 4.14 16.2125 4.14 16.2125C3.68 15.0525 3.03 14.7425 3.03 14.7425C2.12 14.1225 3.1 14.1425 3.1 14.1425C4.1 14.2125 4.63 15.1725 4.63 15.1725C5.5 16.6925 6.97 16.2425 7.54 16.0025C7.63 15.3525 7.89 14.9125 8.17 14.6625C5.95 14.4125 3.62 13.5525 3.62 9.74249C3.62 8.63249 4 7.74249 4.65 7.03249C4.55 6.78249 4.2 5.74249 4.75 4.39249C4.75 4.39249 5.59 4.12249 7.5 5.41249C8.29 5.19249 9.15 5.08249 10 5.08249C10.85 5.08249 11.71 5.19249 12.5 5.41249C14.41 4.12249 15.25 4.39249 15.25 4.39249C15.8 5.74249 15.45 6.78249 15.35 7.03249C16 7.74249 16.38 8.63249 16.38 9.74249C16.38 13.5625 14.04 14.4025 11.81 14.6525C12.17 14.9625 12.5 15.5725 12.5 16.5025V19.2425C12.5 19.5125 12.66 19.8325 13.17 19.7425C17.14 18.4025 20 14.6625 20 10.2425C20 8.92927 19.7413 7.62891 19.2388 6.41566C18.7362 5.2024 17.9997 4.10001 17.0711 3.17142C16.1425 2.24284 15.0401 1.50624 13.8268 1.0037C12.6136 0.50115 11.3132 0.242493 10 0.242493Z",
    },
    {
      icon: "facebook",
      href: "https://web.facebook.com/jiyuzxc",
      viewBox: "0 0 20 20",
      path: "M20 10.0253C20 4.50527 15.52 0.0252686 10 0.0252686C4.48 0.0252686 0 4.50527 0 10.0253C0 14.8653 3.44 18.8953 8 19.8253V13.0253H6V10.0253H8V7.52527C8 5.59527 9.57 4.02527 11.5 4.02527H14V7.02527H12C11.45 7.02527 11 7.47527 11 8.02527V10.0253H14V13.0253H11V19.9753C16.05 19.4753 20 15.2153 20 10.0253Z",
    },
    {
      icon: "instagram",
      href: "https://www.instagram.com/jiyuxcz/",
      viewBox: "0 0 20 20",
      path: "M11.029 0C12.154 0.003 12.725 0.009 13.218 0.023L13.412 0.03C13.636 0.038 13.857 0.0479999 14.124 0.0599999C15.188 0.11 15.914 0.278 16.551 0.525C17.211 0.779 17.767 1.123 18.323 1.678C18.831 2.17773 19.225 2.78247 19.476 3.45C19.723 4.087 19.891 4.813 19.941 5.878C19.953 6.144 19.963 6.365 19.971 6.59L19.977 6.784C19.992 7.276 19.998 7.847 20 8.972L20.001 9.718V11.028C20.003 11.7574 19.995 12.4868 19.978 13.216L19.972 13.41C19.964 13.635 19.954 13.856 19.942 14.122C19.892 15.187 19.722 15.912 19.476 16.55C19.225 17.2175 18.831 17.8223 18.323 18.322C17.823 18.8307 17.218 19.2242 16.551 19.475C15.914 19.722 15.188 19.89 14.124 19.94L13.412 19.97L13.218 19.976C12.725 19.99 12.154 19.997 11.029 19.999L10.283 20H8.974C8.244 20.0026 7.514 19.9949 6.785 19.977L6.591 19.971C6.353 19.962 6.116 19.9517 5.879 19.94C4.815 19.89 4.089 19.722 3.451 19.475C2.783 19.2241 2.179 18.8306 1.68 18.322C1.171 17.8224 0.777 17.2176 0.526 16.55C0.279 15.913 0.111 15.187 0.061 14.122L0.031 13.41L0.026 13.216C0.007 12.4868 -0.001 11.7574 0.001 11.028V8.972C-0.002 8.2426 0.005 7.5132 0.023 6.784L0.03 6.59C0.038 6.365 0.048 6.144 0.06 5.878C0.11 4.813 0.278 4.088 0.525 3.45C0.776 2.7822 1.171 2.17744 1.681 1.678C2.18 1.16955 2.784 0.776074 3.451 0.525C4.089 0.278 4.814 0.11 5.879 0.0599999C6.145 0.0479999 6.367 0.038 6.591 0.03L6.785 0.0239999C7.514 0.00623271 8.243 -0.0014347 8.973 0.000999928L11.029 0Z",
    },
    {
      icon: "email",
      href: "mailto:baraocor.jalanie@gmail.com",
      viewBox: "0 0 20 16",
      path: "M18.001 0H2.001C0.901 0 0.011 0.9 0.011 2L0.001 14C0.001 15.1 0.901 16 2.001 16H18.001C19.101 16 20.001 15.1 20.001 14V2C20.001 0.9 19.101 0 18.001 0ZM18.001 4L10.001 9L2.001 4V2L10.001 7L18.001 2V4Z",
    },
    {
      icon: "resume",
      href: "/Baraocor_Resume.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      viewBox: "0 0 16 20",
      path: "M9.001 7H14.501L9.001 1.5V7ZM2.001 0H10.001L16.001 6V18C16.001 18.5305 15.79 19.0392 15.415 19.4142C15.04 19.7893 14.531 20 14.001 20H2.001C1.471 20 0.962 19.7893 0.587 19.4142C0.212 19.0392 0.001 18.5305 0.001 18V2C0.001 0.89 0.891 0 2.001 0Z",
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
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target={social.target ?? "_blank"}
                  rel={social.rel ?? "noopener noreferrer"}
                  className="rounded-full p-2 transition hover:bg-white/10"
                  aria-label={social.icon}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox={social.viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white/90"
                  >
                    <path d={social.path} />
                  </svg>
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

                  { <span className="text-white/80 transition group-hover:translate-x-0.5">
                    ➢
                  </span> }
                </NavLink>
              ))}
            </div>
          </div>
        </TiltedCard>
      </div>
    </section>
  );
}