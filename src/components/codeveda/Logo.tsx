import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--color-glow)] to-[var(--color-glow-2)] opacity-90 group-hover:opacity-100 transition" />
        <div className="absolute inset-[2px] rounded-[6px] bg-background flex items-center justify-center">
          <span className="font-mono text-sm font-bold text-gradient">CV</span>
        </div>
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">
        Code<span className="text-gradient">veda</span>
      </span>
    </Link>
  );
}