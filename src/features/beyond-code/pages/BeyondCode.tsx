import Header from "@/components/layout/Header";
import BeyondCodeSection from "@/features/beyond-code/components/BeyondCode";
import BubbleCursor from "@/components/ui/bubble-cursor"; // or your cursor component

export default function BeyondCode() {
  return (
    <div className="min-h-screen bg-[var(--color-cream,#F7F4ED)]">
      <Header />

      <BubbleCursor />

      <main className="w-full">
        <BeyondCodeSection />
      </main>
    </div>
  );
}