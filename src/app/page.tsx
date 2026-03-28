import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full">
      <div id="hero" className="mx-auto max-w-7xl px-8 pb-24 pt-32">
        <ScrollReveal animation="up">
          <Hero />
        </ScrollReveal>
      </div>

      <ScrollReveal animation="up">
        <Experience />
      </ScrollReveal>

      <ScrollReveal animation="up">
        <Projects />
      </ScrollReveal>

      <ScrollReveal animation="up" delay={100}>
        <div className="mt-16">
          <Research />
        </div>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
