import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/codeveda/Reveal";
import { submitContact } from "@/server/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codeveda" },
      { name: "description", content: "Tell us about your project. Codeveda responds within one business day with a plan and a price." },
      { property: "og:title", content: "Contact Codeveda" },
      { property: "og:description", content: "Start a project — we respond within one business day." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const submit = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("loading");
    setError(null);
    try {
      const res = await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          company: String(fd.get("company") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (res.ok) {
        setState("ok");
        e.currentTarget.reset();
      } else {
        setState("error");
        setError(res.error);
      }
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16">
        <Reveal>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">— Contact</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter mt-3">
            Let's build<br /> <span className="text-gradient">something great</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Tell us about your project. We'll respond within one business day
            with a plan, a timeline, and a price.
          </p>

          <div className="mt-12 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                <Mail className="w-4 h-4 text-[var(--color-glow)]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-medium">hello@codeveda.io</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[var(--color-glow)]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Studio</div>
                <div className="font-medium">Remote · Worldwide</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card-elevated rounded-3xl p-8 md:p-10 space-y-5 glow-ring">
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Ada Lovelace" required />
              <Field name="email" label="Email" type="email" placeholder="ada@company.com" required />
            </div>
            <Field name="company" label="Company (optional)" placeholder="Codeveda" />
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                Tell us about your project
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What are you building? What does success look like?"
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-glow)] focus:ring-2 focus:ring-[var(--color-glow)]/20 transition resize-none"
              />
            </div>

            {state === "ok" && (
              <div className="flex items-center gap-3 text-sm text-[var(--color-glow)] bg-[var(--color-glow)]/10 px-4 py-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                Thanks — we'll be in touch within one business day.
              </div>
            )}
            {state === "error" && error && (
              <div className="text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-xl">{error}</div>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="group w-full h-14 rounded-xl bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
            >
              {state === "loading" ? "Sending…" : (
                <>
                  Send message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function Field({ name, label, type = "text", placeholder, required }: {
  name: string; label: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-glow)] focus:ring-2 focus:ring-[var(--color-glow)]/20 transition"
      />
    </div>
  );
}