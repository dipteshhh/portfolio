import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Footer from "@/components/Footer";
import HomeScrollManager from "@/components/HomeScrollManager";

export default function Home() {
  return (
    <main className="w-full">
      <HomeScrollManager />

      <div id="hero" className="home-anchor mx-auto max-w-7xl px-8 pb-24 pt-32">
        <Hero />
      </div>

      <Experience />

      <Projects />

      <div className="mt-16">
        <Research />
      </div>

      <Footer />
    </main>
  );
}
