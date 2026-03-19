import { useMemo, useState } from "react";
import { developmentProjects, designProjects } from "@/content/portfolio";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Figma, Layers3 } from "lucide-react";

type PortfolioTab = "development" | "design";

const tabBaseClass =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("development");

  const projects = useMemo(() => {
    return activeTab === "development" ? developmentProjects : designProjects;
  }, [activeTab]);

  return (
    <Section
      id="portfolio"
      className="bg-[var(--color-cream,#F7F4ED)] pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container>
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-[var(--color-charcoal,#3A3A3A)] md:text-5xl">
              A collection of projects shaped by
              <span className="block text-[var(--color-sage,#A8C3A0)]">
                curiosity, creativity, and thoughtful execution.
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-[var(--color-muted,#7A7A7A)] md:text-lg">
              Here are some of the projects I’ve worked on across development
              and design. Each one reflects how I approach building useful,
              visually calm, and user-friendly digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("development")}
              className={`${tabBaseClass} ${
                activeTab === "development"
                  ? "border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sage,#A8C3A0)] text-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                  : "border border-[var(--color-sage,#A8C3A0)] bg-white/70 text-[var(--color-charcoal,#3A3A3A)] hover:-translate-y-0.5 hover:bg-[var(--color-sky,#DCEEF2)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                <span>Development</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("design")}
              className={`${tabBaseClass} ${
                activeTab === "design"
                  ? "border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sage,#A8C3A0)] text-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                  : "border border-[var(--color-sage,#A8C3A0)] bg-white/70 text-[var(--color-charcoal,#3A3A3A)] hover:-translate-y-0.5 hover:bg-[var(--color-sky,#DCEEF2)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <Figma className="h-4 w-4" />
                <span>Design</span>
              </span>
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="h-[220px] overflow-hidden bg-[var(--color-sky,#DCEEF2)]/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <CardContent className="p-6 md:p-8">
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-[var(--color-sage,#A8C3A0)]/15 p-2 text-[var(--color-sage,#A8C3A0)]">
                        <Layers3 className="h-5 w-5" />
                      </div>

                      <div>
                        <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                          {project.title}
                        </h2>
                        <p className="mt-2 line-clamp-4 leading-7 text-[var(--color-muted,#7A7A7A)]">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          className="rounded-full border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sky,#DCEEF2)] px-4 py-2 text-sm font-normal text-[var(--color-charcoal,#3A3A3A)] shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-beige,#F2E2C4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}