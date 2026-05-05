import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";

const links = [
  { to: "/", label: "Home", hash: "" },
  { to: "/", label: "Portfolio", hash: "#portfolio" },
  { to: "/", label: "Pricing", hash: "#pricing" },
  { to: "/", label: "Services", hash: "#services" },
] as const;

export function Nav() {
  const { theme, toggle } = useTheme();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5 flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-1 rounded-full glass-nav border border-border px-3 py-2">
          {links.map((l) => {
            const active = (l.hash ? hash === l.hash : pathname === "/" && !hash);
            return (
              <a
                key={l.label}
                href={l.hash || l.to}
                className={`group relative px-5 py-2 text-sm rounded-full transition ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative">
                  {l.label}
                  <span
                    className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left bg-primary transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary/70"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur flex items-center justify-center hover:bg-secondary transition"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex h-10 items-center px-5 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
          >
            Contact us
          </a>
          <button
            className="md:hidden w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-2xl border border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.hash || l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center h-11 px-5 rounded-full text-sm font-medium bg-foreground text-background"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
