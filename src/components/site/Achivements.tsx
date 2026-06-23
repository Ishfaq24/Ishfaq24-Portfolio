import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const achievements = [
    {
        icon: Trophy,
        year: "2026",
        title: "AI Buildathon Winner",
        organization: "GDC Anantnag",
        description:
            "Won the AI Buildathon by designing and presenting an innovative AI-powered solution focused on solving real-world problems.",
    },
    {
        icon: Trophy,
        year: "2025",
        title: "Hackathon Winner",
        organization: "GCET Kashmir",
        description:
            "Led the development of a complete project solution during the college hackathon and secured first place among competing teams.",
    },
    {
        icon: Trophy,
        year: "2024",
        title: "Frontend Frenzy Winner",
        organization: "Frontend Frenzy Hackathon",
        description:
            "Built an interactive and responsive web application under strict time constraints and secured the winning position.",
    },
    {
        icon: Trophy,
        year: "2023",
        title: "High School Hackathon Winner",
        organization: "MLH Hackathon",
        description:
            "Won my first hackathon experience by collaborating with teammates to build a creative technology solution.",
    },
    {
        icon: Award,
        year: "Certification",
        title: "NVIDIA Introduction to Deep Learning",
        organization: "NVIDIA",
        description:
            "Completed NVIDIA's deep learning program covering neural networks, computer vision fundamentals, and deep learning workflows.",
    },
    {
        icon: Award,
        year: "Certification",
        title: "MERN Stack Development",
        organization: "PIEDU Technologies",
        description:
            "Completed professional training in MongoDB, Express.js, React, and Node.js with hands-on full-stack development projects.",
    },
    {
        icon: Medal,
        year: "Continuous Learning",
        title: "Technical Certifications",
        organization: "SoloLearn · W3Schools · GeeksforGeeks",
        description:
            "Earned multiple certifications in web development, programming, databases, machine learning, software engineering, and related technologies.",
    },
    {
        icon: Medal,
        year: "Community Impact",
        title: "Founder & Community Lead",
        organization: "HackHub24",
        description:
            "Built and grew a developer community focused on open source, AI, DSA, and software engineering while organizing workshops and mentoring students.",
    },
];

export function Achievements() {
    return (<Section id="achievements">
        <SectionHeader
            eyebrow="06 — Achievements & Recognition"
            title={
                <>
                    Milestones from my{" "} <span className="text-primary">
                        learning, building, and leadership journey </span>
                    .
                </>
            }
            description="Hackathons, certifications, community leadership, and accomplishments that shaped my growth as a software engineer."
        />

        <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item, i) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.06 }}
                        className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40"
                    >
                        <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-primary/10 p-3">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>

                            <div className="flex-1">
                                <div className="text-xs uppercase tracking-widest text-primary">
                                    {item.year}
                                </div>

                                <h3 className="mt-1 text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {item.organization}
                                </p>

                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
        </Section>
    );
}
