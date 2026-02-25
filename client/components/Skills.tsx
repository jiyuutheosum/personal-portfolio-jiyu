import { skills } from "@/content/skills";
import Container from "./layout/Container";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[400px] ghibli-bg px-4 sm:px-8 lg:px-20 py-24"
    >
      <Container>
        <h2 className="text-ghibli-text font-poppins text-3xl font-semibold text-center mb-16">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`px-6 py-3 rounded-full ${
                skill.dark 
                  ? "bg-ghibli-accent" 
                  : "bg-ghibli-surface border border-ghibli-muted/40"
              } hover:scale-105 hover:shadow-soft-lg hover:bg-ghibli-highlight transition-all duration-300 cursor-pointer group`}
            >
              <span className={`font-poppins text-[15px] font-medium ${
                skill.dark ? "text-white" : "text-ghibli-text"
              } group-hover:text-ghibli-text`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
