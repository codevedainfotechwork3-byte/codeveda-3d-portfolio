import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/codeveda/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Codeveda" },
      { name: "description", content: "We are a small, senior team of engineers, designers and AI researchers. This is our story, our values and how we work." },
      { property: "og:title", content: "About Codeveda" },
      { property: "og:description", content: "A senior team building intelligent software with craft and care." },
    ],
  }),
  component: About,
});

const values = [
  { n: "01", t: "Knowledge first", d: "Every recommendation we make is rooted in research, measurement and lived experience." },
  { n: "02", t: "AI as a teammate", d: "We use AI to amplify craft, not replace it. The result is software that feels alive." },
  { n: "03", t: "Senior by default", d: "No juniors hiding behind process. Every project is led by people who have shipped before." },
  { n: "04", t: "Outcomes over outputs", d: "We measure success in business results — revenue, retention, and time saved." },
];

const timeline = [
  { y: "2022", t: "Founded", d: "Codeveda starts as a 3-person studio with one belief: software can think." },
  { y: "2023", t: "First AI agents", d: "We deploy our first production LLM agent — saving a fintech 8,000 hours/year." },
  { y: "2024", t: "Global team", d: "We grow to 18 engineers, designers and researchers across four continents." },
  { y: "2026", t: "120+ shipped", d: "We celebrate 120 shipped products and a 9.7/10 client rating." },
];

function About() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— About</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter mt-3 max-w-4xl">
            A studio for the <span className="text-gradient">thinking machine</span> era.
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <Reveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Codeveda was founded on a simple conviction: the next decade of
              software belongs to teams that pair deep technical craft with
              applied artificial intelligence. We are that team.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with founders, product leaders and Fortune 500 innovation
              teams to design, build and scale intelligent products — fast,
              beautifully, and without the agency overhead.
            </p>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-32">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-12">
              How we operate
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.06}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <div className="font-mono text-xs text-[var(--color-glow)] mb-4">{v.n}</div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{v.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-12">
              The road so far
            </h2>
          </Reveal>
          <div className="space-y-px bg-border rounded-2xl overflow-hidden">
            {timeline.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <div className="bg-background p-6 md:p-8 grid md:grid-cols-[120px_200px_1fr] gap-4 md:gap-10 items-baseline">
                  <div className="font-mono text-sm text-[var(--color-glow)]">{m.y}</div>
                  <div className="font-display text-xl font-semibold">{m.t}</div>
                  <div className="text-muted-foreground">{m.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}