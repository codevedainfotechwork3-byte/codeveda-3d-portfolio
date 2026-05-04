import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Brain, Code2, Layers, Globe2, Workflow, Shield } from "lucide-react";
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

const clients = ["ATLAS", "LUMEN", "VERDANT", "KAIROS", "PULSE", "MENTORA", "ORION", "NIMBUS", "HELIOS", "VANTA"];

const services = [
  { n: "01", icon: Brain, title: "Applied AI", desc: "LLM agents, retrieval pipelines, fine-tuned models and AI-native UX that ships to production." },
  { n: "02", icon: Code2, title: "Engineering", desc: "Edge-native web, mobile and platform infrastructure built with React, TypeScript and modern tooling." },
  { n: "03", icon: Layers, title: "Product Design", desc: "Research-led design systems, motion and interfaces that feel inevitable from the first touch." },
  { n: "04", icon: Globe2, title: "Cloud & DevOps", desc: "Scalable architecture, CI/CD, observability and zero-downtime deploys on Cloudflare, AWS and Vercel." },
  { n: "05", icon: Workflow, title: "Automation", desc: "Connect Stripe, Slack, HubSpot and back-office systems into seamless, intelligent workflows." },
  { n: "06", icon: Shield, title: "Security", desc: "Threat modelling, audits, SOC2 / GDPR readiness and continuous monitoring." },
];

const work = [
  { tag: "Fintech · AI", title: "Atlas Capital", year: "2026", color: "from-violet-500/30 via-fuchsia-500/20 to-transparent" },
  { tag: "Health · Platform", title: "Lumen Care", year: "2025", color: "from-cyan-500/30 via-blue-500/20 to-transparent" },
  { tag: "Climate · Data", title: "Verdant Index", year: "2025", color: "from-emerald-500/30 via-teal-500/20 to-transparent" },
  { tag: "Creative · 3D", title: "Studio Kairos", year: "2024", color: "from-amber-500/30 via-rose-500/20 to-transparent" },
];

function Index() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="absolute inset-0 bg-grid" />
        <HeroScene />
        <div className="absolute inset-0 bg-noise mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col justify-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center gap-3 px-4 py-2 rounded-full border border-border bg-background/40 backdrop-blur-md text-xs font-mono mb-10"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[var(--color-glow)] animate-ping opacity-60" />
              <span className="relative rounded-full w-2 h-2 bg-[var(--color-glow)]" />
            </span>
            <span className="text-muted-foreground tracking-wider uppercase">Now booking · Q2 2026</span>
          </motion.div>

          {/* Headline — editorial mix of sans + serif italic */}
          <h1 className="font-sans text-[clamp(3rem,9vw,9rem)] leading-[0.9] font-medium tracking-[-0.04em] max-w-6xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Inspired by
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              <span className="font-display italic text-gradient text-glow">knowledge</span>,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              powered by <span className="font-display italic text-gradient text-glow">AI</span>.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end max-w-5xl"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Codeveda is an independent IT studio building intelligent products
              for the companies shaping tomorrow — strategy, engineering and
              applied AI under one roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 h-13 py-3 px-6 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 h-13 py-3 px-6 rounded-full border border-border bg-background/40 backdrop-blur-md hover:bg-secondary transition font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Selected work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 bg-background/30 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              Trusted by ⟶
            </span>
            <div className="flex-1 overflow-hidden marquee-mask">
              <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {[...clients, ...clients].map((c, i) => (
                  <span key={i} className="font-display text-2xl text-muted-foreground/60 italic">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============ MANIFESTO ============ */}
      <section className="relative px-6 py-32 md:py-48">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
              ⟢ Our manifesto
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl">
              We believe the next decade of software belongs to{" "}
              <span className="italic text-gradient">teams that pair</span>{" "}
              deep technical craft with applied artificial intelligence.{" "}
              <span className="italic text-gradient">We are that team.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                  ⟢ What we do
                </div>
                <h2 className="font-sans text-5xl md:text-7xl font-medium tracking-[-0.04em] leading-[0.95] max-w-2xl">
                  Six disciplines, <span className="font-display italic text-gradient">one team</span>.
                </h2>
              </div>
              <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-3 hover:bg-secondary transition">
                All services
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition duration-300" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group relative border-r border-b border-border p-8 md:p-10 h-full overflow-hidden hover:bg-secondary/40 transition duration-500">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--color-glow)]/0 group-hover:bg-[var(--color-glow)]/10 blur-3xl transition duration-700" />
                  <div className="relative">
                    <div className="flex items-baseline justify-between mb-12">
                      <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                      <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-[var(--color-glow)] transition" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                  ⟢ Selected work
                </div>
                <h2 className="font-sans text-5xl md:text-7xl font-medium tracking-[-0.04em] leading-[0.95]">
                  Recently <span className="font-display italic text-gradient">shipped</span>.
                </h2>
              </div>
              <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-3 hover:bg-secondary transition">
                View all
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition duration-300" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {work.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <a href="#" className="group block relative overflow-hidden rounded-3xl border border-border aspect-[5/4] bg-card">
                  <div className={`absolute inset-0 bg-gradient-to-br ${w.color}`} />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-noise mix-blend-overlay" />

                  {/* Floating mark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-[10rem] md:text-[14rem] italic opacity-10 group-hover:opacity-25 group-hover:scale-110 transition duration-700">
                      {w.title.charAt(0)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground bg-background/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border">
                        {w.tag}
                      </span>
                      <div className="w-11 h-11 rounded-full bg-background/60 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <h3 className="font-display text-4xl md:text-5xl">{w.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 md:p-20 text-center glow-ring">
              <div className="absolute inset-0 bg-aurora opacity-50" />
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
                  ⟢ Let's collaborate
                </div>
                <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[0.95]">
                  Have an idea<br />
                  <span className="font-display italic text-gradient">worth building</span>?
                </h2>
                <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
                  Tell us about it. We respond within one business day with a
                  plan, a timeline and a price.
                </p>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
                  >
                    Start the conversation
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition duration-300" />
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