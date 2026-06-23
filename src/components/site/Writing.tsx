import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const posts = [
  {
    cat: "AI",
    title: "Building AlgoArena: My Vision for an AI-Powered Learning Platform",
    read: "10 min",
    link: "/blog/building-algoarena",
  },
  {
    cat: "Backend",
    title: "Lessons Learned While Building Scalable REST APIs with Node.js",
    read: "8 min",
    link: "/blog/scalable-nodejs-apis",
  },
  {
    cat: "Community",
    title: "How I Built HackHub24 and Grew a Developer Community",
    read: "6 min",
    link: "/blog/building-hackhub24",
  },
  {
    cat: "Machine Learning",
    title: "From Linear Regression to LLMs: My AI Learning Journey",
    read: "12 min",
    link: "/blog/ai-learning-journey",
  },
  {
    cat: "System Design",
    title: "Designing Multi-User Applications: Rooms, Authentication & Scale",
    read: "9 min",
    link: "/blog/system-design-multi-user-apps",
  },
  {
    cat: "Open Source",
    title: "Why Every Student Should Start Contributing to Open Source",
    read: "5 min",
    link: "/blog/open-source-for-students",
  },
];

export function Writing() {
  return (
    <Section id="writing">
      <SectionHeader
        eyebrow="05 — Writing"
        title={
          <>
            Sharing what I learn about{" "}
            <span className="text-primary">
              AI, Backend Development & Building Products
            </span>
            .
          </>
        }
        description="Thoughts, lessons, and experiences from my journey as a software engineer, community builder, and AI enthusiast."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.link}
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
          More articles coming soon. I regularly write about AI, Machine
          Learning, Backend Development, System Design, Open Source, and lessons
          learned while building products and communities.
        </p>
      </div>
    </Section>
  );
}