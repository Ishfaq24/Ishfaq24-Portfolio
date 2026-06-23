import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Writing } from "@/components/site/Writing";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Achievements } from "@/components/site/Achivements"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishfaq Ahmad Bhat — AI Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Ishfaq Ahmad Bhat is an AI Engineer, Full Stack Developer and founder of HackHub24, building AI-powered products and developer communities.",
      },
      { property: "og:title", content: "Ishfaq Ahmad Bhat — AI Engineer & Full Stack Developer" },
      {
        property: "og:description",
        content:
          "AI-powered products, scalable web applications and developer communities that solve real-world problems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
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
  );
}
