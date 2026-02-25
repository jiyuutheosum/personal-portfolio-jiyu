import Header from "@/components/Header";
import PortfolioSection from "@/components/Portfolio";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-4 sm:mx-8 lg:mx-20 ghibli-paper rounded-[28px]"></div>
        <PortfolioSection />
      </main>
    </>
  );
}