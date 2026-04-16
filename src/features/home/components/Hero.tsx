import {
  Mail,
  Github,
  Facebook,
  Instagram,
  FileText,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import profileImage from "@/assets/images/profile.png";
import resumeFile from "@/assets/file/Baraocor_Resume_OJT.pdf";

type SocialLink = {
  label: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  target?: string;
  rel?: string;
};

const highlights = [
  "Frontend Development",
  "UI/UX Design",
  "Responsive Design",
  "Thoughtful Interfaces",
];

const quickNotes = [
  {
    title: "What I Build",
    text: "Responsive websites, landing pages, portfolios, and interface-focused frontend projects with thoughtful structure.",
  },
  {
    title: "What I Value",
    text: "Clarity, consistency, visual balance, and interactions that feel natural from the first click.",
  },
];

export default function Hero() {
  const socialLinks: SocialLink[] = [
    {
      label: "GitHub",
      href: "https://github.com/jiyuutheosum",
      Icon: Github,
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/jiyuzxc",
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/jiyuxcz/",
      Icon: Instagram,
    },
    {
      label: "Email",
      href: "mailto:baraocor.jalanie@gmail.com",
      Icon: Mail,
      target: "_self",
      rel: "noreferrer",
    },
    {
      label: "Resume",
      href: resumeFile,
      target: "_blank",
      rel: "noopener noreferrer",
      Icon: FileText,
    },
  ];

  return (
    <Section
      id="home"
      className="bg-[var(--color-cream,#F7F4ED)] py-20 md:py-28"
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-[var(--color-charcoal,#3A3A3A)] md:text-5xl lg:text-6xl">
                Frontend developer crafting
                <span className="block text-[var(--color-sage,#A8C3A0)]">
                  clear, thoughtful, and responsive experiences.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[var(--color-muted,#7A7A7A)] md:text-lg">
                I build clean and user-friendly websites with a soft visual
                style and a strong focus on clarity, structure, and ease of use.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <Badge
                  key={item}
                  className="rounded-full border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sky,#DCEEF2)] px-4 py-2 text-sm font-normal text-[var(--color-charcoal,#3A3A3A)] shadow-none hover:bg-[var(--color-beige,#F2E2C4)]"
                >
                  {item}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sage,#A8C3A0)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[var(--color-charcoal,#3A3A3A)] transition hover:bg-white"
              >
                Let&apos;s connect
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map(({ label, href, target, rel, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={target ?? "_blank"}
                  rel={rel ?? "noopener noreferrer"}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-[var(--color-charcoal,#3A3A3A)] transition hover:bg-[var(--color-sky,#DCEEF2)]"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <Card className="rounded-3xl border border-black/5 bg-[var(--color-sky,#DCEEF2)]/40 shadow-none">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 h-40 w-40 overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-sm md:h-52 md:w-52">
                    <img
                      src={profileImage}
                      alt="Jiyuu profile"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted,#7A7A7A)]">
                    Frontend Developer
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-[var(--color-charcoal,#3A3A3A)]">
                    Hi! I&apos;m Jiyuu.
                  </h2>

                  <p className="mt-3 max-w-md leading-7 text-[var(--color-muted,#7A7A7A)]">
                    Focused on clean UI, responsive layouts, and frontend
                    experiences that feel polished and approachable.
                  </p>
                </div>
              </CardContent>
            </Card>

            {quickNotes.map((item) => (
              <Card
                key={item.title}
                className="rounded-3xl border border-black/5 bg-[var(--color-sky,#DCEEF2)]/40 shadow-none"
              >
                <CardContent className="p-6">
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[var(--color-muted,#7A7A7A)]">
                    {item.title}
                  </p>
                  <p className="leading-7 text-[var(--color-charcoal,#3A3A3A)]">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}

            <div className="rounded-3xl border border-dashed border-[var(--color-sage,#A8C3A0)] bg-[var(--color-beige,#F2E2C4)]/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted,#7A7A7A)]">
                Current Focus
              </p>
              <p className="mt-3 leading-8 text-[var(--color-charcoal,#3A3A3A)]">
                Refining my frontend skills through cleaner component systems,
                better responsiveness, and more intentional interface design.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}