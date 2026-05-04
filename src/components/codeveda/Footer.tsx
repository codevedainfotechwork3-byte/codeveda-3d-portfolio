import { Link } from "@tanstack/react-router";
import { Globe, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="text-muted-foreground text-sm max-w-md">
            Inspired by knowledge and powered by AI. Codeveda crafts
            intelligent software for ambitious teams.
          </p>
          <div className="flex gap-3 pt-2">
            {[Globe, Mail, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@codeveda.io</li>
            <li>+1 (555) 010-2030</li>
            <li>Remote · Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Codeveda. All rights reserved.</span>
          <span className="font-mono">v1.0 — built with ❤</span>
        </div>
      </div>
    </footer>
  );
}