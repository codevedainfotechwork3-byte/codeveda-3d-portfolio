import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Star, Check, Plus, Minus, Play,
  Camera, Building2, MapPinned, ShoppingBag, Globe, Store, Scissors,
} from "lucide-react";
import { Reveal } from "@/components/codeveda/Reveal";
import { AnimatedText } from "@/components/codeveda/AnimatedText";
import { TiltCard } from "@/components/codeveda/TiltCard";
import { Marquee } from "@/components/codeveda/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reelwale Studio — Fashion Videography & Reels" },
      { name: "description", content: "Engaging fashion video content under one roof — outdoor, indoor & street shoots for textile garment brands." },
      { property: "og:title", content: "Reelwale Studio" },
      { property: "og:description", content: "Unlock your story, frame by frame." },
    ],
  }),
  component: Home,
});

const HERO = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80";
const HERO_2 = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80";

const brands = [
  "ATELIER", "MAISON", "SAREE.CO", "INDIRA", "KIANA", "RANGREZ", "AURELIA", "VIMARSH",
  "MEHRUMA", "PAVITRA", "JUPITER", "HALIMA", "MODESTOUZE", "INDIAN RANG",
];

const portfolio = [
  { img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80", tag: "Saree" },
  { img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80", tag: "Bridal Choli" },
  { img: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=600&q=80", tag: "Kurtis" },
  { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", tag: "Western" },
  { img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80", tag: "Pakistani Suit" },
  { img: "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?auto=format&fit=crop&w=600&q=80", tag: "Blouse" },
];

const filters = ["View all", "Saree", "Bridal Choli", "Kurtis", "Western", "Pakistani Suit", "Blouse", "Burkha", "Choli"];

const services = [
  {
    icon: Camera,
    title: "Outdoor Shoot",
    desc: "From breathtaking backdrops to raw images, we bring perfection in every shot.",
    img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Building2,
    title: "Indoor Shoot",
    desc: "Professional photography & videography in elegant studio setups with creative direction.",
    img: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: MapPinned,
    title: "Street Shoot",
    desc: "Capturing urban life — markets, lanes & rooftops — with cinematic storytelling.",
    img: "https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=600&q=80",
  },
];

const pricing = [
  {
    name: "Premium Outdoor",
    price: "₹ 1,499",
    label: "Single piece",
    desc: "Customised locations as per your requirements.",
    perks: ["Film city", "Luxury Resort", "Heritage Palace"],
    cta: "Book your Shoot",
    featured: true,
  },
  {
    name: "Indoor Shoot",
    price: "₹ 799",
    label: "Single piece",
    desc: "Elegant studio setups that bring nature's beauty inside.",
    perks: ["In-studio backdrop", "Floral concept", "Soft lighting"],
    cta: "Book your Shoot",
  },
  {
    name: "Custom Street",
    price: "Custom",
    label: "On request",
    desc: "We explore dynamic urban environments where city life unfolds.",
    perks: ["Surat streets", "Markets", "Transport hubs"],
    cta: "Contact Sales",
  },
];

const audience = [
  { icon: Globe, label: "Website Owner" },
  { icon: ShoppingBag, label: "Ecommerce Business" },
  { icon: Store, label: "Shop Owner" },
  { icon: Scissors, label: "Fashion Designer" },
];

const testimonials = [
  {
    name: "Pratik Bhagat", brand: "MBC",
    quote: "Their team's passion for storytelling and commitment to excellence shone through in every aspect of the project.",
  },
  {
    name: "Piyush", brand: "Tikhi Imli",
    quote: "The ability of Reelwale Studio to capture the essence of our brand and translate it into visually stunning reels is truly remarkable.",
  },
  {
    name: "Rakesh", brand: "kiana.co",
    quote: "They took the time to understand my vision and brought it to life — the reels have been a game-changer for engagement and sales.",
  },
  {
    name: "Vasu Seti", brand: "SSC",
    quote: "Working with Reelwale Studio was an absolute pleasure! Their expertise in fashion videography is evident from the first minute.",
  },
];

const faqs = [
  { q: "Do you stitch the blouse in a saree?", a: "Yes — an extra charge will apply for stitching services." },
  { q: "How long will it take for my product shoot to be delivered?", a: "You will receive your edited content within 5 days of the shoot." },
  { q: "When do we have to pay for the shoot?", a: "Payment is collected immediately after the shoot is completed." },
  { q: "Do you travel for outdoor shoots?", a: "Absolutely. We routinely travel across film cities, resorts and heritage palaces." },
  { q: "What's included in a single-piece shoot?", a: "One garment styled across multiple frames with reels-ready edits and raw footage handover." },
];

function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[100vh] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />

        {/* Floating "only for textile" tag */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute top-28 right-[8%] z-20"
        >
          <div className="relative">
            <div className="w-px h-16 bg-foreground/40 mx-auto" />
            <div className="bg-foreground text-background px-4 py-3 rounded-md text-xs font-mono uppercase tracking-wider shadow-2xl">
              Only For Textile<br />Garment Shoot
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center min-h-[100vh]">
          {/* LEFT — Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-md text-xs font-mono mb-8"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative rounded-full w-2 h-2 bg-primary" />
              </span>
              <span className="text-muted-foreground tracking-wider uppercase">Fashion Videography Studio</span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] leading-[1.02] tracking-tight">
              <span className="block"><AnimatedText text="Your Hardship" /></span>
              <span className="block"><AnimatedText text="To Create" /></span>
              <span className="block italic text-gradient"><AnimatedText text="Engaging Video" /></span>
              <span className="block"><AnimatedText text="Content Ends Here!" /></span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              From outdoor shoots to video production, we provide top-notch
              services under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 h-14 pl-2 pr-7 rounded-full border border-foreground/20 hover:border-primary transition"
              >
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:rotate-45 transition">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="font-medium tracking-wide uppercase text-sm">Contact us</span>
              </a>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">5.0 · 100+ brands</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Oval framed photo */}
          <div className="relative h-[480px] md:h-[560px] lg:h-[640px]">
            <Reveal variant="scale">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer concentric rings */}
                <div className="absolute w-[88%] aspect-[3/4] rounded-full border border-foreground/15" />
                <div className="absolute w-[78%] aspect-[3/4] rounded-full border border-foreground/25" />
                {/* Main oval */}
                <div className="relative w-[72%] aspect-[3/4] overflow-hidden rounded-full shadow-2xl animate-float">
                  <img
                    src={HERO}
                    alt="Fashion model in vibrant attire"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Small secondary oval */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute right-0 top-[18%] w-28 md:w-40 aspect-[3/4] overflow-hidden rounded-full border border-foreground/30 shadow-xl grayscale"
                >
                  <img src={HERO_2} alt="Detail" className="w-full h-full object-cover" />
                </motion.div>
                {/* Caption near small oval */}
                <div className="absolute right-2 bottom-[12%] max-w-[180px] text-right">
                  <div className="font-display italic text-xl md:text-2xl leading-tight">
                    Unlock Your<br />Story, Frame by<br />Frame!
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BRANDS MARQUEE ============ */}
      <section className="relative py-16 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                We collaborated with
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl mt-2">
                100+ Brands.
              </h2>
            </div>
          </Reveal>
          <Marquee>
            {brands.map((b, i) => (
              <span key={i} className="font-display italic text-3xl md:text-4xl text-muted-foreground/70 hover:text-foreground transition px-4">
                {b}<span className="text-primary mx-6">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ============ PORTFOLIO ============ */}
      <section id="portfolio" className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="blur">
            <div className="text-center mb-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Our Portfolio</p>
              <h2 className="font-display text-5xl md:text-7xl mt-3">
                Our <span className="italic text-gradient">Portfolio</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Our portfolio revolves around working with several brands catering
                to different fashion segments.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                    i === 0
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolio.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <TiltCard intensity={4}>
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-card border border-border">
                    <img
                      src={p.img}
                      alt={p.tag}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="w-16 h-16 rounded-full bg-foreground/90 text-background flex items-center justify-center backdrop-blur">
                        <Play className="w-5 h-5 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border">
                        {p.tag}
                      </span>
                      <span className="font-display italic text-sm">Reel #{(i + 1).toString().padStart(2, "0")}</span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <button className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-foreground/30 hover:border-primary hover:text-primary transition text-sm font-medium uppercase tracking-wider">
                Load More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="relative px-6 py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="blur">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Our Bespoke Services</p>
              <h2 className="font-display text-5xl md:text-7xl mt-3">
                Our Bespoke <span className="italic text-gradient">Services</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Add value to your Instagram business with services tailored to your
                needs and budget.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <TiltCard intensity={5}>
                  <div className="group relative h-full rounded-3xl overflow-hidden bg-card border border-border gradient-border">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                          <s.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl">{s.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 font-display italic text-2xl md:text-3xl hover:text-primary transition"
              >
                Get Ready To Shoot &amp; Play!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="blur">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Value-Packed Charges</p>
              <h2 className="font-display text-5xl md:text-7xl mt-3">
                Value-Packed <span className="italic text-gradient">Charges</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
                Our aim is to maintain transparency and deliver high-quality video
                content at affordable rates, as per industry standards.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <TiltCard intensity={4}>
                  <div className={`relative h-full rounded-3xl p-8 border ${p.featured ? "bg-foreground text-background border-foreground" : "bg-card border-border"} flex flex-col`}>
                    {p.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider">
                        Most popular
                      </span>
                    )}
                    <p className={`font-mono text-xs uppercase tracking-wider ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>{p.label}</p>
                    <h3 className="font-display text-3xl mt-2">{p.name}</h3>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-display text-5xl">{p.price}</span>
                    </div>
                    <p className={`mt-4 text-sm leading-relaxed ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>{p.desc}</p>
                    <ul className="mt-6 space-y-3 flex-1">
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-3 text-sm">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center ${p.featured ? "bg-background/20" : "bg-primary/15"}`}>
                            <Check className={`w-3 h-3 ${p.featured ? "text-background" : "text-primary"}`} />
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className={`mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-full text-sm font-medium uppercase tracking-wider transition ${
                        p.featured
                          ? "bg-background text-foreground hover:opacity-90"
                          : "bg-foreground text-background hover:opacity-90"
                      }`}
                    >
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUDIENCE ============ */}
      <section className="relative px-6 py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Whom we cater to</p>
              <h2 className="font-display text-5xl md:text-6xl mt-3">
                Whom do we <span className="italic text-gradient">cater</span> to?
              </h2>
              <p className="mt-4 text-muted-foreground">We have expertise in fashion videography, catering to:</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {audience.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.06}>
                <TiltCard intensity={6}>
                  <div className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/50 transition">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition">
                      <a.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl">{a.label}</h3>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 h-12 rounded-full bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm hover:opacity-90 transition"
              >
                Grab the deal right now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="blur">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Success Stories</p>
              <h2 className="font-display text-5xl md:text-6xl mt-3">
                Success Stories of <span className="italic text-gradient">Our Partners</span>
              </h2>
              <p className="mt-4 text-muted-foreground">Our work speaks more than words can.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-card p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-display text-xl md:text-2xl leading-relaxed italic">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.brand}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary/15 via-card to-accent/15 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 bg-noise mix-blend-overlay" />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-6xl">
                  Go Beyond the Trends,<br />
                  <span className="italic text-gradient">Get Reel-istic Reels Now!</span>
                </h2>
                <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
                  With our user-generated video content, get ready to supercharge
                  your brand visibility organically!
                </p>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-3 h-14 px-8 rounded-full bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:opacity-90 transition"
                >
                  Collaborate with us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="blur">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Get in Touch</p>
            <h2 className="font-display text-5xl md:text-6xl mt-3">
              Get in Touch <span className="italic text-gradient">with us!</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              In case you find any difficulties or have any kind of query, you can
              easily connect with us on our official number — also available on WhatsApp.
            </p>
            <a
              href="tel:+919512323450"
              className="mt-8 inline-flex items-center gap-4 group"
            >
              <span className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition">
                <Phone className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Call us</span>
                <span className="block font-display text-3xl">+91 95123 23450</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="relative px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— FAQ</p>
              <h2 className="font-display text-5xl md:text-6xl mt-3">
                Frequently <span className="italic text-gradient">Asked</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <FaqItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-lg md:text-xl">{q}</span>
        <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center shrink-0">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-4"
    >
      <h3 className="font-display text-2xl">Tell us about your shoot</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Your name" className="h-12 rounded-xl border border-border bg-background/50 px-4 text-sm focus:outline-none focus:border-primary transition" />
        <input required type="tel" name="phone" placeholder="Phone / WhatsApp" className="h-12 rounded-xl border border-border bg-background/50 px-4 text-sm focus:outline-none focus:border-primary transition" />
      </div>
      <input name="brand" placeholder="Brand (optional)" className="h-12 w-full rounded-xl border border-border bg-background/50 px-4 text-sm focus:outline-none focus:border-primary transition" />
      <textarea required rows={4} name="message" placeholder="What would you like to shoot?" className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none" />
      <button
        type="submit"
        className="w-full h-13 py-3 rounded-xl bg-foreground text-background font-medium uppercase tracking-wider text-sm hover:opacity-90 transition flex items-center justify-center gap-2"
      >
        {sent ? "Thanks — we'll be in touch!" : (<>Send enquiry <ArrowRight className="w-4 h-4" /></>)}
      </button>
    </form>
  );
}
