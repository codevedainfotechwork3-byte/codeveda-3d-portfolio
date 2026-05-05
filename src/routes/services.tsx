import { createFileRoute } from "@tanstack/react-router";
import { Brain, Code2, Layers, Globe2, Workflow, Shield } from "lucide-react";
import { Reveal } from "@/components/codeveda/Reveal";
import { TiltCard } from "@/components/codeveda/TiltCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Codeveda" },
      { name: "description", content: "Applied AI, product engineering, design, cloud & DevOps. The full stack of modern IT — delivered by Codeveda." },
      { property: "og:title", content: "Services — Codeveda" },
      { property: "og:description", content: "Applied AI, engineering, product design, and cloud — under one roof." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Brain, title: "Applied AI & ML", desc: "Custom LLM agents, retrieval pipelines, fine-tuned models, computer vision, and AI-native UX.", tags: ["LLM Agents", "RAG", "Vision", "MLOps"] },
  { icon: Code2, title: "Product Engineering", desc: "Edge-native web, mobile and full-stack platforms built with React, TypeScript and modern infrastructure.", tags: ["React", "Edge", "API", "Mobile"] },
  { icon: Layers, title: "Product & UX Design", desc: "Research-led design systems, motion, and interfaces that feel inevitable.", tags: ["UX", "UI", "Motion", "Brand"] },
  { icon: Globe2, title: "Cloud & DevOps", desc: "Scalable architecture, CI/CD, observability and zero-downtime deploys on Cloudflare, AWS and Vercel.", tags: ["Cloudflare", "AWS", "K8s", "CI/CD"] },
  { icon: Workflow, title: "Automation & Integrations", desc: "Connect Stripe, Slack, HubSpot, custom APIs and back-office systems into seamless workflows.", tags: ["APIs", "Webhooks", "ETL", "Zapier"] },
  { icon: Shield, title: "Security & Compliance", desc: "Threat modelling, audits, SOC2 / GDPR readiness and ongoing monitoring.", tags: ["SOC2", "GDPR", "Audit", "Pentest"] },
];

function Services() {
  return (
    <div className="relative px-6 py-24 overflow-hidden">
      <div className="bg-aurora-live opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <Reveal variant="blur">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— Services</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter mt-3 max-w-4xl">
            End-to-end <span className="italic text-gradient-animated">IT engineering</span> for the AI era.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            From the first prototype to enterprise-scale deployments, we operate
            as your in-house product and engineering team.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <TiltCard className="h-full" intensity={6}>
                <div className="group card-elevated gradient-border rounded-2xl p-7 h-full hover:border-[var(--color-glow)]/40 transition relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[var(--color-glow)]/0 group-hover:bg-[var(--color-glow)]/15 blur-3xl transition duration-700" />
                  <div style={{ transform: "translateZ(30px)" }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-glow)]/20 to-[var(--color-glow-2)]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                      <s.icon className="w-5 h-5 text-[var(--color-glow)]" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold mb-3">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}