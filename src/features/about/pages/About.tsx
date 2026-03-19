import Header from "@/components/layout/Header";
import AboutSection from "@/features/about/components/About";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-[#F7F4ED]">
      <Header />

      <main className="w-full">
        <AboutSection />
      </main>
    </div>
  );
}