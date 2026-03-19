import {
  Mail,
  Github,
  Facebook,
  Instagram,
  FileText,
} from "lucide-react";

import TiltedCard from "@/components/ui/tilted-card";

import bgLanding from "@/assets/images/bg-landing.jpg";
import profileImage from "@/assets/images/profile.png";
import resumeFile from "@/assets/file/Baraocor_Resume_OJT.pdf";

type SocialLink = {
  label: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  target?: string;
  rel?: string;
};

export default function Hero() {
  const socialLinks: SocialLink[] = [
    {
      label: "github",
      href: "https://github.com/jiyuutheosum",
      Icon: Github,
    },
    {
      label: "facebook",
      href: "https://web.facebook.com/jiyuzxc",
      Icon: Facebook,
    },
    {
      label: "instagram",
      href: "https://www.instagram.com/jiyuxcz/",
      Icon: Instagram,
    },
    {
      label: "email",
      href: "mailto:baraocor.jalanie@gmail.com",
      Icon: Mail,
      target: "_self",
      rel: "noreferrer",
    },
    {
      label: "resume",
      href: resumeFile,
      target: "_blank",
      rel: "noopener noreferrer",
      Icon: FileText,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLanding})` }}
      />
      <div className="absolute inset-0 bg-[#0b1b25]/35" />

      {/* Content */}
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
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-semibold tracking-tight">
              Hi! I&apos;m Jiyuu!
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-[40ch] text-sm leading-relaxed text-white/90">
              Building clean, intuitive digital experiences.
            </p>

            {/* Social Links */}
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

          </div>
        </TiltedCard>
      </div>
    </section>
  );
}