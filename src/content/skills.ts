export interface Skill {
  name: string;
  type: "core" | "framework" | "backend" | "tool";
  icon?: string; 
}

export const skills: Skill[] = [
  { name: "HTML", type: "core", icon: "html" },
  { name: "CSS", type: "core", icon: "css" },
  { name: "JavaScript", type: "core", icon: "js" },
  { name: "TypeScript", type: "core", icon: "ts" },
  { name: "C++", type: "core", icon: "cpp" },
  { name: "Python (ML)", type: "core", icon: "python" },

  { name: "React (Vite)", type: "framework", icon: "react" },
  { name: "Next.js", type: "framework", icon: "nextjs" },
  { name: "Framer Motion", type: "framework", icon: "framer" },
  { name: "ML + UI Integration", type: "framework", icon: "brain" },

  { name: "Laravel", type: "backend", icon: "laravel" },
  { name: "Docker", type: "backend", icon: "docker" },
  { name: "Model Training", type: "backend", icon: "cpu" },
  { name: "Model Evaluation", type: "backend", icon: "activity" },
  { name: "Neural Network Basics", type: "backend", icon: "network" },

  { name: "MySQL", type: "tool", icon: "database" },
  { name: "Pandas", type: "tool", icon: "table" },
  { name: "GitHub", type: "tool", icon: "github" },
  { name: "Firebase", type: "tool", icon: "firebase" },
  { name: "Figma", type: "tool", icon: "figma" },
  { name: "Jupyter", type: "tool", icon: "notebook" },
  { name: "Canva", type: "tool", icon: "palette" },
  { name: "Bootstrap", type: "tool", icon: "layout" },
  { name: "Playwright", type: "tool", icon: "test-tube" },
];