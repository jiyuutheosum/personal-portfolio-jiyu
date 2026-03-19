  import { skills } from "@/content/skills";
  import Container from "@/components/layout/Container";
  import Section from "@/components/layout/Section";
  import { Card, CardContent } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { FlaskConical } from "lucide-react";
  import {
    Code2,
    Sparkles,
    Server,
    Wrench,
    Brain,
    Database,
    Table2,
    Layout,
    Cpu,
    Activity,
    Network,
    Palette,
    type LucideIcon,
  } from "lucide-react";
  import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
    FaGithub,
    FaDocker,
    FaBootstrap,
    FaLaravel,
    FaFigma,
  } from "react-icons/fa";
  import {
    SiTypescript,
    SiNextdotjs,
    SiFramer,
    SiFirebase,
    SiJupyter,
    SiCplusplus,
    SiMysql,
    SiPandas,
    SiCanva,
  } from "react-icons/si";
  import type { IconType } from "react-icons";

  const featuredSkills = [
    "Frontend Development",
    "Responsive Design",
    "Machine Learning",
    "QA Automation",
  ];

  const badgeBaseClass =
    "rounded-full px-4 py-2 text-sm font-normal shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]";

  const skillIconMap: Record<string, IconType | LucideIcon> = {
    html: FaHtml5,
    css: FaCss3Alt,
    js: FaJs,
    ts: SiTypescript,
    cpp: SiCplusplus,
    python: FaPython,

    react: FaReact,
    nextjs: SiNextdotjs,
    framer: SiFramer,
    brain: Brain,

    laravel: FaLaravel,
    docker: FaDocker,
    cpu: Cpu,
    activity: Activity,
    network: Network,

    mysql: SiMysql,
    database: Database,
    pandas: SiPandas,
    table: Table2,
    github: FaGithub,
    firebase: SiFirebase,
    figma: FaFigma,
    notebook: SiJupyter,
    canva: SiCanva,
    palette: Palette,
    bootstrap: FaBootstrap,
    layout: Layout,
    "test-tube": FlaskConical,
  };

  function SkillBadge({
    skill,
    className,
  }: {
    skill: { name: string; icon?: string };
    className: string;
  }) {
    const Icon = skill.icon ? skillIconMap[skill.icon] : undefined;

    return (
      <Badge className={`${badgeBaseClass} ${className}`}>
        <span className="flex items-center gap-2">
          {Icon ? <Icon className="h-4 w-4" /> : null}
          <span>{skill.name}</span>
        </span>
      </Badge>
    );
  }

  export default function Skills() {
    const coreSkills = skills.filter((skill) => skill.type === "core");
    const frameworkSkills = skills.filter((skill) => skill.type === "framework");
    const backendSkills = skills.filter((skill) => skill.type === "backend");
    const toolSkills = skills.filter((skill) => skill.type === "tool");

    return (
      <Section
        id="skills"
        className="bg-[var(--color-cream,#F7F4ED)] pt-10 pb-20 md:pt-14 md:pb-28"
      >
        <Container>
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="space-y-4">

              <h1 className="text-4xl font-semibold leading-tight text-[var(--color-charcoal,#3A3A3A)] md:text-5xl">
                A growing toolkit for building
                <span className="block text-[var(--color-sage,#A8C3A0)]">
                  modern, thoughtful, and usable experiences.
                </span>
              </h1>

              <p className="max-w-3xl text-base leading-8 text-[var(--color-muted,#7A7A7A)] md:text-lg">
                My skills continue to grow as I explore frontend development,
                backend technologies, QA automation, and machine learning. I enjoy
                learning by building, experimenting, and turning technical ideas
                into practical, user-friendly experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {featuredSkills.map((item) => (
                <Badge
                  key={item}
                  className={`${badgeBaseClass} border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sky,#DCEEF2)] text-[var(--color-charcoal,#3A3A3A)] hover:bg-[var(--color-beige,#F2E2C4)]`}
                >
                  {item}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-3xl border border-black/5 bg-white/70 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-[var(--color-sage,#A8C3A0)]/15 p-2 text-[var(--color-sage,#A8C3A0)]">
                        <Code2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                          Core foundations
                        </h2>
                        <p className="mt-2 leading-7 text-[var(--color-muted,#7A7A7A)]">
                          The languages and fundamentals that support how I build
                          and solve problems.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {coreSkills.map((skill) => (
                        <SkillBadge
                          key={skill.name}
                          skill={skill}
                          className="border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sage,#A8C3A0)] text-white hover:bg-[var(--color-peach,#E8B7A6)] hover:text-[var(--color-charcoal,#3A3A3A)]"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-black/5 bg-[var(--color-sky,#DCEEF2)]/40 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-[var(--color-sage,#A8C3A0)]/15 p-2 text-[var(--color-sage,#A8C3A0)]">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                          Frontend & frameworks
                        </h2>
                        <p className="mt-2 leading-7 text-[var(--color-muted,#7A7A7A)]">
                          Tools and libraries I use to create interactive,
                          responsive, and polished interfaces.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {frameworkSkills.map((skill) => (
                        <SkillBadge
                          key={skill.name}
                          skill={skill}
                          className="border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-sky,#DCEEF2)] text-[var(--color-charcoal,#3A3A3A)] hover:bg-[var(--color-beige,#F2E2C4)]"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-black/5 bg-[var(--color-sky,#DCEEF2)]/40 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-[var(--color-sage,#A8C3A0)]/15 p-2 text-[var(--color-sage,#A8C3A0)]">
                        <Server className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                          Backend & applied development
                        </h2>
                        <p className="mt-2 leading-7 text-[var(--color-muted,#7A7A7A)]">
                          Backend and implementation-focused skills I’m building as
                          I expand beyond frontend work.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {backendSkills.map((skill) => (
                        <SkillBadge
                          key={skill.name}
                          skill={skill}
                          className="border border-[var(--color-sage,#A8C3A0)] bg-[var(--color-beige,#F2E2C4)] text-[var(--color-charcoal,#3A3A3A)] hover:bg-[var(--color-peach,#E8B7A6)]"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-dashed border-[var(--color-sage,#A8C3A0)] bg-white/60 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-[var(--color-sage,#A8C3A0)]/15 p-2 text-[var(--color-sage,#A8C3A0)]">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium text-[var(--color-charcoal,#3A3A3A)]">
                          Tools & workflow
                        </h2>
                        <p className="mt-2 leading-7 text-[var(--color-muted,#7A7A7A)]">
                          Supporting tools that help me design, test, organize,
                          and improve the products I work on.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {toolSkills.map((skill) => (
                        <SkillBadge
                          key={skill.name}
                          skill={skill}
                          className="border border-[var(--color-sage,#A8C3A0)] bg-white text-[var(--color-charcoal,#3A3A3A)] hover:bg-[var(--color-sky,#DCEEF2)]"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    );
  }