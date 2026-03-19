import Header from "@/components/layout/Header";
import ContactSection from "@/features/contact/components/Contact";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-cream,#F7F4ED)]">
      <Header />

      <main className="w-full">
        <ContactSection />
      </main>
    </div>
  );
}