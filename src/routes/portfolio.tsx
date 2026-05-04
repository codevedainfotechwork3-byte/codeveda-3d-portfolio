import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/codeveda/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Codeveda" },
      { name: "description", content: "Selected work from Codeveda: AI products, platforms and digital experiences for fintech, health, climate and creative industries." },
      { property: "og:title", content: "Portfolio — Codeveda" },
      { property: "og:description", content: "Selected work — AI products, platforms and digital experiences." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { tag: "Fintech · AI", title: "Atlas Capital", desc: "An AI co-pilot for portfolio managers. Real-time market reasoning across 40+ data sources.", color: "from-cyan-500/20 to-blue-600/20" },
  { tag: "Health · Platform", title: "Lumen Care", desc: "Clinician-facing operating system used by 1,200 care teams across the US.", color: "from-violet-500/20 to-fuchsia-600/20" },
  { tag: "Climate · Data", title: "Verdant Index", desc: "Carbon intelligence dashboard turning satellite data into actionable insight.", color: "from-emerald-500/20 to-cyan-600/20" },
  { tag: "Creative · 3D", title: "Studio Kairos", desc: "An immersive 3D portfolio engine for the world's top architecture studios.", color: "from-amber-500/20 to-rose-600/20" },
  { tag: "B2B SaaS", title: "Pulse OS", desc: "All-in-one revenue operations platform with embedded AI forecasting.", color: "from-indigo-500/20 to-cyan-600/20" },
  { tag: "Education · AI", title: "Mentora", desc: "Personalised AI tutors that adapt to each learner — used in 32 countries.", color: "from-fuchsia-500/20 to-orange-600/20" },
];

function Portfolio() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— Portfolio</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter mt-3 max-w-4xl">
            Selected <span className="text-gradient">work</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A few of the products we've shipped recently. NDAs cover the rest.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-20">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a
                href="#"
                className="group block card-elevated rounded-3xl p-1 hover:border-[var(--color-glow)]/40 transition"
              >
                <div className={`relative aspect-[16/10] rounded-[20px] overflow-hidden bg-gradient-to-br ${p.color}`}>
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-foreground/5 backdrop-blur-xl border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition duration-700">
                      <span className="font-display text-2xl font-bold opacity-50">{p.title.split(" ").map(w => w[0]).join("")}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                  <h3 className="font-display text-2xl font-semibold mt-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition">
              Build something with us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}