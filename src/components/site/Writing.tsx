import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const posts = [
  {
    cat: "Generative AI",
    title: "Building Prompt2Render: Autonomous Storyboarding & Manim Code Animation",
    read: "10 min",
    link: "https://github.com/Ishfaq24",
  },
  {
    cat: "Explainable AI",
    title: "Credit Risk Modeling: Explaining Machine Learning Decisions with SHAP",
    read: "8 min",
    link: "https://github.com/Ishfaq24/loan-approval-system",
  },
  {
    cat: "Computer Vision",
    title: "AirCanvas: Low-Latency Hand Gesture Recognition with MediaPipe & WebSockets",
    read: "7 min",
    link: "https://github.com/Ishfaq24/Virtual-Writing-Board",
  },
  {
    cat: "System Design",
    title: "Architecting Scalable REST APIs with Node.js, FastAPI & PostgreSQL",
    read: "9 min",
    link: "https://github.com/Ishfaq24",
  },
  {
    cat: "Community",
    title: "How I Built HackHub24 and Mentored 100+ Student Developers in Open Source",
    read: "6 min",
    link: "https://github.com/Ishfaq24",
  },
  {
    cat: "Machine Learning",
    title: "From Neural Fundamentals to Multimodal AI Agent Architectures",
    read: "12 min",
    link: "https://github.com/Ishfaq24",
  },
];

export function Writing() {
  return (
    <Section id="writing">
      <SectionHeader
        eyebrow="05 — Writing & Insights"
        title={
          <>
            Sharing what I learn about{" "}
            <span className="text-primary">
              AI Systems, Backend Architecture & Building Products
            </span>
            .
          </>
        }
        description="Engineering deep dives, architecture teardowns, and lessons learned while architecting AI pipelines and scaling developer communities."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.link}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/50 p-5 transition-all hover:border-primary/40 hover:bg-card hover:shadow-lg"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                  {post.cat}
                </span>

                <span className="text-xs text-muted-foreground">
                  {post.read} read
                </span>
              </div>

              <h3 className="mt-3 text-base font-medium leading-snug transition-colors group-hover:text-primary">
                {post.title}
              </h3>
            </div>

            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </motion.a>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card/30 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          More technical articles and engineering deep dives in progress. I regularly write about Generative AI,
          Agentic Pipelines, Machine Learning Systems, High-Performance Backends, and Open-Source engineering.
        </p>
      </div>
    </Section>
  );
}
