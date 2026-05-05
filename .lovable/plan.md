## Goal

Replace the current font system and elevate the site with premium, experiential animations across Hero, Services, About, Portfolio, and Contact.

## Typography overhaul

Swap `Instrument Serif` + `Inter Tight` for a more premium, modern pairing loaded via `__root.tsx` (Google Fonts):

- **Display**: `Fraunces` (variable, optical-size) — sophisticated, contemporary serif with character. Replaces the current generic serif.
- **Sans**: `Geist` — clean, geometric, used by top-tier product sites (Vercel, Linear-feel).
- **Mono**: `Geist Mono` for code/labels.
- Update `--font-display`, `--font-sans`, `--font-mono` in `src/styles.css`.
- Refine `.font-display` tracking + add an italic display variant utility for tasteful emphasis.

## Visual & motion system (added to styles.css)

- **Animated aurora/mesh gradient** background with slow drifting blobs (CSS keyframes).
- **Conic gradient orbs** behind hero and section headers.
- **Magnetic / spotlight cursor effect** (lightweight component using mouse position → radial gradient overlay).
- **Scroll-linked reveals** using existing `Reveal.tsx` (framer-motion) — extend with `stagger`, `blur-in`, and `letter-by-letter` text reveal variants.
- **Tilt-on-hover** cards (framer-motion `useMotionValue` + perspective transform) for Services and Portfolio.
- **Marquee logos/keywords** strip in About.
- **Animated underline + arrow shift** on links/buttons.
- **Noise + grain overlay** layer fixed across pages for tactile feel.
- **Smooth section transitions** via `AnimatePresence` and route-level fade/slide.

## Per-page upgrades

1. **Hero (index.tsx)**: letter-by-letter headline reveal, animated gradient text, subtle parallax on the 3D scene, magnetic CTA buttons, scroll-indicator with bounce.
2. **Services**: 3D tilt cards, hover-glow border, icon micro-animations on hover, staggered grid entrance.
3. **About**: animated stat counters, marquee tech stack, image with parallax mask reveal.
4. **Portfolio**: masonry/bento grid with image zoom + overlay slide-up on hover, filter chips with layoutId animation.
5. **Contact**: floating-label inputs, animated submit button (state machine: idle → loading → success), live gradient border on focus.

## New components

- `src/components/codeveda/TiltCard.tsx` — reusable tilt wrapper.
- `src/components/codeveda/Marquee.tsx` — infinite scroll strip.
- `src/components/codeveda/AnimatedText.tsx` — split-text reveal.
- Extend `Reveal.tsx` with new variants.

## Files to edit

- `src/styles.css` — fonts, new utilities, keyframes.
- `src/routes/__root.tsx` — Google Fonts links, mount `SpotlightCursor`.
- `src/routes/index.tsx`, `services.tsx`, `about.tsx`, `portfolio.tsx`, `contact.tsx` — wire new motion components.
- `src/components/codeveda/HeroScene.tsx` — slight parallax tweak.

## Out of scope

- No backend/schema changes.
- No new dependencies (framer-motion + three already installed).