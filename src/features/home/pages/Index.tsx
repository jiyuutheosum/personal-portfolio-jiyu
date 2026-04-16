import Header from "@/components/layout/Header";
import AnimatedContent from "@/components/ui/AnimatedContent";

import Hero from "@/features/home/components/Hero";
import About from "@/features/about/components/About";
import Skills from "@/features/skills/components/Skills";
import Portfolio from "@/features/portfolio/components/Portfolio";
import BeyondCode from "@/features/beyond-code/components/BeyondCode";
import Contact from "@/features/contact/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full">
        <section id="home">
          <AnimatedContent
            distance={18}
            duration={0.8}
            ease="power2.out"
            scale={1}
            threshold={0.15}
          >
            <Hero />
          </AnimatedContent>
        </section>

        <section id="about">
          <AnimatedContent
            distance={28}
            duration={0.9}
            ease="power2.out"
            scale={0.985}
            threshold={0.2}
          >
            <About />
          </AnimatedContent>
        </section>

        <section id="skills">
          <AnimatedContent
            distance={28}
            duration={0.9}
            ease="power2.out"
            scale={0.985}
            threshold={0.2}
          >
            <Skills />
          </AnimatedContent>
        </section>

        <section id="portfolio">
          <AnimatedContent
            distance={28}
            duration={0.9}
            ease="power2.out"
            scale={0.985}
            threshold={0.2}
          >
            <Portfolio />
          </AnimatedContent>
        </section>

        <section id="beyond-code">
          <AnimatedContent
            distance={28}
            duration={0.9}
            ease="power2.out"
            scale={0.985}
            threshold={0.2}
          >
            <BeyondCode />
          </AnimatedContent>
        </section>

        <section id="contact">
          <AnimatedContent
            distance={24}
            duration={0.85}
            ease="power2.out"
            scale={0.99}
            threshold={0.2}
          >
            <Contact />
          </AnimatedContent>
        </section>
      </main>
    </div>
  );
}