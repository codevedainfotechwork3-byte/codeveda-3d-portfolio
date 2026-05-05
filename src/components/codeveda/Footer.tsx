import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-5">
          <Logo />
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Reelwale Studio crafts engaging fashion video content for textile garment brands —
            outdoor, indoor & street shoots delivered with editorial polish.
          </p>
          <div className="flex gap-3 pt-2">
            {[Instagram, Mail, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-primary transition"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> +91 95123 23450</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> hello@reelwale.studio</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> Surat, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Reelwale Studio. All rights reserved.</span>
          <span className="font-mono">Crafted frame by frame ✦</span>
        </div>
      </div>
    </footer>
  );
}
