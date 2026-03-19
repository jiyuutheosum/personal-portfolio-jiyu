import Header from "@/components/layout/Header";
import PortfolioSection from "@/features/portfolio/components/Portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />

      <main className="w-full">
        <PortfolioSection />
      </main>
    </div>
  );
}