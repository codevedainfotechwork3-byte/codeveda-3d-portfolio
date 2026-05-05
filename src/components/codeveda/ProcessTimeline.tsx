import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, Camera, Scissors, PackageCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: ClipboardList, label: "Brief", desc: "We listen, mood-board, and lock the creative direction with you." },
  { icon: Camera, label: "Shoot", desc: "On-location or in-studio — directed, lit, and captured cinematically." },
  { icon: Scissors, label: "Edit", desc: "Color, sound design, and reels-ready cuts crafted frame by frame." },
  { icon: PackageCheck, label: "Deliver", desc: "Master files + platform-tuned exports landed within five days." },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="blur">
          <div className="text-center mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— How we work</p>
            <h2 className="font-display text-5xl md:text-7xl mt-3">
              From brief to <span className="italic text-gradient">delivery</span>
            </h2>
          </div>
        </Reveal>

        <div ref={ref} className="relative pl-8 md:pl-0">
          {/* Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.label} delay={i * 0.05}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${right ? "md:[&>div:first-child]:order-2" : ""}`}>
                    <div className={`md:text-right ${right ? "md:text-left" : ""}`}>
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">Step 0{i + 1}</p>
                      <h3 className="font-display text-3xl md:text-4xl">{s.label}</h3>
                      <p className="mt-3 text-muted-foreground max-w-sm md:ml-auto md:mr-0 md:[.md\\:text-left_&]:ml-0">
                        {s.desc}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    {/* Node */}
                    <span className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-9 h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                      <s.icon className="w-4 h-4 text-primary" />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}