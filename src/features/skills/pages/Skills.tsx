import Header from "@/components/layout/Header";
import SkillsSection from "@/features/skills/components/Skills";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />

      <main className="w-full">
        <SkillsSection />
      </main>
    </div>
  );
}