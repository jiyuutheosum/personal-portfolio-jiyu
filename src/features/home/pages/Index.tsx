import Header from "@/components/layout/Header";
import Hero from "@/features/home/components/Hero";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full">
        <Hero />
      </main>
    </div>
  );
}