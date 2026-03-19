import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Stack from "@/features/about/components/stack";

const highlights = [
  "Frontend Development",
  "UI/UX Design",
  "Responsive Design",
  "Creative Problem Solving",
];

const details = [
  {
    title: "Focus",
    text: "Building clean, thoughtful, and user-friendly digital experiences that feel both personal and functional.",
  },
  {
    title: "Style",
    text: "Minimal, calm interfaces with soft visual details, balanced spacing, and a warm, human touch.",
  },
  {
    title: "Approach",
    text: "Combining creativity and structure to make websites that are intuitive, expressive, and easy to use.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      className="bg-[var(--color-cream,#F7F4ED)] py-20 md:py-28"
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4 lg:order-1">
            <Card className="rounded-3xl border border-black/5 bg-[var(--color-sky,#DCEEF2)]/40 shadow-none">
              <CardContent className="flex justify-center p-6">
                <Stack
                  randomRotation
                  sendToBackOnClick
                  sensitivity={180}
                  cardDimensions={{ width: 200, height: 200 }}
                />
              </CardContent>
            </Card>

            {details.map((item) => (
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
                Philosophy
              </p>
              <p className="mt-3 leading-8 text-[var(--color-charcoal,#3A3A3A)]">
                I believe the best digital experiences feel simple, thoughtful,
                and human — where design supports the story instead of
                distracting from it.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">

              <h1 className="text-4xl font-semibold leading-tight text-[var(--color-charcoal,#3A3A3A)] md:text-5xl">
                I build digital spaces with
                <span className="block text-[var(--color-sage,#A8C3A0)]">
                  clarity, warmth, and intention.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[var(--color-muted,#7A7A7A)] md:text-lg">
                Hi, I’m Jalanie, also known as Jiyuu. I’m a frontend developer
                who enjoys designing and building websites that feel calm,
                personal, and easy to use. I’m drawn to clean layouts, subtle
                details, and experiences that look simple on the surface but are
                thoughtfully crafted underneath.
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

            <Card className="rounded-3xl border border-black/5 bg-white/70 shadow-none">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                    My story
                  </h2>

                  <p className="leading-8 text-[var(--color-muted,#7A7A7A)]">
                    My interest in web development comes from enjoying both
                    creativity and structure. I like turning ideas into
                    interfaces that not only work well, but also feel pleasant
                    and memorable to interact with. For me, good design is not
                    just about how something looks, but how naturally it guides
                    people.
                  </p>

                  <p className="leading-8 text-[var(--color-muted,#7A7A7A)]">
                    I’m especially inspired by minimalist design, soft visual
                    storytelling, and interfaces that leave room to breathe.
                    This website reflects that side of me: simple, warm, and
                    intentional, with a style that feels personal rather than
                    overly polished or crowded.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}