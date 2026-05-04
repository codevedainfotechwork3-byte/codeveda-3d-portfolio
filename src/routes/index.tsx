import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Brain, Zap, Layers, Globe2 } from "lucide-react";
import { HeroScene } from "@/components/codeveda/HeroScene";
import { Reveal } from "@/components/codeveda/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codeveda — Premium AI-powered IT studio" },
      { name: "description", content: "Codeveda crafts intelligent software, AI products and digital platforms. Inspired by knowledge, powered by AI." },
      { property: "og:title", content: "Codeveda — Premium AI-powered IT studio" },
      { property: "og:description", content: "Inspired by knowledge, powered by AI. We build intelligent software for ambitious teams." },
    ],
  }),
  component: Index,
});

const stats = [
  { k: "120+", v: "Products shipped" },
  { k: "40+", v: "AI integrations" },
  { k: "24/7", v: "Engineering" },
  { k: "9.7/10", v: "Client rating" },
];

const capabilities = [
  { icon: Brain, title: "Applied AI", desc: "RAG, agents, fine-tuned models that ship to production." },
  { icon: Code2, title: "Engineering", desc: "Edge-native web, mobile and platform infrastructure." },
  { icon: Layers, title: "Product Design", desc: "Interfaces that feel intuitive at first touch." },
  { icon: Globe2, title: "Cloud & DevOps", desc: "Scalable systems, observability, zero-downtime ops." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <HeroScene />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/40 backdrop-blur-sm text-xs font-mono mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-glow)] animate-pulse-glow" />
            <span className="text-muted-foreground">CODEVEDA · IT STUDIO · 2026</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] max-w-5xl"
          >
            Inspired by{" "}
            <span className="text-gradient">knowledge</span>,
            <br />
            powered by <span className="text-gradient">AI</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            We are a premium IT studio building intelligent products for the
            companies shaping tomorrow. Strategy, engineering, and applied AI —
            under one roof.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition glow-ring"
            >
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full border border-border hover:bg-secondary transition font-medium"
            >
              <Sparkles className="w-4 h-4" />
              See our work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {stats.map((s) => (
              <div key={s.v} className="space-y-1">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— What we do</span>
                <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight mt-3 max-w-2xl">
                  Four disciplines.<br />One team.
                </h2>
              </div>
              <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium">
                Explore services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group card-elevated rounded-2xl p-6 h-full hover:border-[var(--color-glow)]/40 transition">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-glow)]/20 to-[var(--color-glow-2)]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                    <c.icon className="w-5 h-5 text-[var(--color-glow)]" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl card-elevated p-10 md:p-16 glow-ring">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--color-glow)]/20 blur-3xl animate-float" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--color-glow-2)]/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <Zap className="w-8 h-8 text-[var(--color-glow)] mb-4" />
                  <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                    Have an idea worth building?
                  </h3>
                  <p className="mt-4 text-muted-foreground text-lg">
                    Tell us about it. We'll respond within one business day with a
                    plan and a price.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
                  >
                    Book a discovery call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
