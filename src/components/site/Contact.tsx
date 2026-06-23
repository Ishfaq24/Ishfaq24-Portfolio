import { motion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import { Calendar, Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="08 — Contact"
        title={<>Let's build something <span className="text-primary">worth shipping</span>.</>}
        description="Open to AI Engineering and Full Stack roles, paid contracts, and collaborations on serious products."
      />

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
        >
          <div>
            <h3 className="text-lg font-medium">Direct channels</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fastest reply within 24 hours, anywhere on weekdays.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="mailto:ishfaqnazir24@gmail.com" className="group flex items-center gap-3 text-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/40 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="group-hover:text-primary">ishfaqnazir24@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/ishfaq24" target="_blank" rel="noreferrer noopener" className="group flex items-center gap-3 text-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/40 text-primary">
                    <Github className="h-4 w-4" />
                  </span>
                  <span className="group-hover:text-primary">github.com/ishfaq24</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ishfaq24" target="_blank" rel="noreferrer noopener" className="group flex items-center gap-3 text-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/40 text-primary">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <span className="group-hover:text-primary">linkedin.com/in/ishfaq24</span>
                </a>
              </li>
            </ul>
          </div>

          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center justify-between rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/20"
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Book a 30-min call
            </span>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
              cal.com →
            </span>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
        >
          <div className="grid gap-4">
            <Field label="Name" id="name">
              <input
                id="name"
                required
                maxLength={100}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </Field>
            <Field label="Email" id="email">
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </Field>
            <Field label="Message" id="message">
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                placeholder="What are you building?"
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </Field>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              {sent ? "Thanks — I'll reply within 24 hours." : "No spam. Ever."}
            </p>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {sent ? "Sent" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
