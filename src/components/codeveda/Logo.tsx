import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-glow)] to-[var(--color-glow-2)] opacity-90 group-hover:opacity-100 transition group-hover:rotate-180 duration-700" />
        <div className="absolute inset-[3px] rounded-full bg-background" />
        <div className="relative w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[var(--color-glow)] to-[var(--color-glow-2)]" />
      </div>
      <span className="font-sans text-base font-medium tracking-tight">
        Codeveda<span className="text-muted-foreground">.</span>
      </span>
    </Link>
  );
}