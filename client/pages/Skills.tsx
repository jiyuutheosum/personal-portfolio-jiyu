import Header from "@/components/Header";
import SkillsSection from "@/components/Skills";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <SkillsSection />
      </main>
    </div>
  );
}