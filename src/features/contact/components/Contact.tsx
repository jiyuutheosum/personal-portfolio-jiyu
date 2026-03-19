import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Github, MessageCircleHeart } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:baraocor.jalanie@gmail.com",
    label: "baraocor.jalanie@gmail.com",
    icon: Mail,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jiyuxcz/",
    label: "@jiyuxcz",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/jiyuutheosum",
    label: "github.com/jiyuutheosum",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-[var(--color-cream,#F7F4ED)] pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container>
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-[var(--color-charcoal,#3A3A3A)] md:text-5xl">
              Let’s connect and create something
              <span className="block text-[var(--color-sage,#A8C3A0)]">
                thoughtful, warm, and meaningful.
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-[var(--color-muted,#7A7A7A)] md:text-lg">
              I’d love to hear from you—whether it’s for collaboration, project
              ideas, creative work, or simply a friendly conversation. You can
              reach out through any of the platforms below.
            </p>
          </div>

          <Card className="rounded-3xl border border-black/5 bg-white/70 shadow-none transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-[var(--color-sage,#A8C3A0)]/15 p-2 text-[var(--color-sage,#A8C3A0)]">
                    <MessageCircleHeart className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                      Reach out anytime
                    </h2>
                    <p className="mt-2 leading-7 text-[var(--color-muted,#7A7A7A)]">
                      Choose the platform that feels most comfortable. I’m open
                      to conversations about development, design, learning, and
                      new opportunities.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {contactLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group rounded-3xl border border-[var(--color-sage,#A8C3A0)]/40 bg-[var(--color-sky,#DCEEF2)]/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-beige,#F2E2C4)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                      >
                        <div className="space-y-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-sage,#A8C3A0)]/15 text-[var(--color-sage,#A8C3A0)] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-base font-medium text-[var(--color-charcoal,#3A3A3A)]">
                              {item.name}
                            </h3>
                            <p className="break-words text-sm leading-6 text-[var(--color-muted,#7A7A7A)]">
                              {item.label}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}