import Header from "@/components/Header";
import AboutSection from "@/components/About";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <AboutSection />
      </main>
    </div>
  );
}