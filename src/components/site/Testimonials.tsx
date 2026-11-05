import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const highlights = [
  {
    title: "Founder & Community Lead",
    organization: "HackHub24",
    description:
      "Built and scaled a developer community of 100+ students focused on Generative AI, open source, and full-stack systems. Organized 12+ technical workshops and mentored 30+ production open-source PRs.",
  },
  {
    title: "AI & Multimodal Systems",
    organization: "Prompt2Render",
    description:
      "Architected an end-to-end multimodal agent pipeline combining Gemini storyboarding, closed-loop layout critics, Kokoro neural TTS, and Whisper forced alignment for code animation.",
  },
  {
    title: "Software Engineer",
    organization: "NexGen Developers",
    description:
      "Engineered production RESTful APIs, authentication workflows, and backend services while integrating real-time machine learning inference systems.",
  },
  {
    title: "Software Engineer",
    organization: "Vipthra Technologies",
    description:
      "Developed high-throughput backend services and database architectures, optimizing PostgreSQL and MongoDB queries for sub-100ms response times.",
  },
  {
    title: "Explainable AI & Machine Learning",
    organization: "Loan Risk AI & Research",
    description:
      "Trained calibrated machine learning models coupled with SHAP (SHapley Additive exPlanations) to deliver transparent, data-driven financial decision-making.",
  },
  {
    title: "Computer Vision & Human-Computer Interaction",
    organization: "AirCanvas & MediaPipe",
    description:
      "Engineered touchless virtual whiteboards utilizing 21-point hand landmark tracking and low-latency WebSocket synchronization for multi-user collaboration.",
  },
];

export function Testimonials() {
  return (
    <Section id="impact">
      <SectionHeader
        eyebrow="07 — Impact & Leadership"
        title={
          <>
            Building, learning, and creating
            <span className="text-primary"> real impact.</span>
          </>
        }
        description="A snapshot of professional engineering experience, community leadership, and technical journey across artificial intelligence and scalable software."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            <div className="text-lg font-semibold">
              {item.title}
            </div>

            <div className="mt-1 text-sm text-primary font-medium">
              {item.organization}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
