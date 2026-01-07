import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full max-w-[1440px] mx-auto bg-white">
        <div className="mx-4 sm:mx-8 lg:mx-20 bg-portfolio-bg rounded-[20px] shadow-xl">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </main>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
