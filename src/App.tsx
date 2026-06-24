import { About } from "@/components/site/About";
import { Achievements } from "@/components/site/Achivements";
import { Contact } from "@/components/site/Contact";
import { Experience } from "@/components/site/Experience";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Testimonials } from "@/components/site/Testimonials";
import { Writing } from "@/components/site/Writing";
import { Toaster } from "@/components/ui/sonner";

export function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Writing />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <Toaster richColors position="bottom-right" />
    </>
  );
}
