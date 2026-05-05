import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-baseline gap-1 group">
      <span className="font-script text-3xl leading-none text-foreground">Reelwale</span>
      <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground translate-y-[-4px]">
        Studio
      </span>
    </Link>
  );
}
