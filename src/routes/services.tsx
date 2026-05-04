import { createFileRoute } from "@tanstack/react-router";
import { Brain, Code2, Layers, Globe2, Workflow, Shield } from "lucide-react";
import { Reveal } from "@/components/codeveda/Reveal";

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
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— Services</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter mt-3 max-w-4xl">
            End-to-end <span className="text-gradient">IT engineering</span> for the AI era.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            From the first prototype to enterprise-scale deployments, we operate
            as your in-house product and engineering team.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group card-elevated rounded-2xl p-7 h-full hover:border-[var(--color-glow)]/40 transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-glow)]/20 to-[var(--color-glow-2)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <s.icon className="w-5 h-5 text-[var(--color-glow)]" />
                </div>
                <h2 className="font-display text-xl font-semibold mb-3">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}