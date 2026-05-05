## Goal
Build a Reelwale Studio site that clearly outclasses reelwale.studio — keep the editorial fashion-videography vibe but add cinematic motion, video-first storytelling, and premium micro-interactions the reference site lacks.

## What's missing today vs. the reference
- Reference uses static oval frames; ours does too. We need real motion.
- Reference is single-page only, ours has stale `/services` route causing layout mismatch.
- Hero has no video, no kinetic typography, no scroll choreography.
- Portfolio grid is flat — no hover preview, no lightbox, no filtering animation.
- Hydration error in `Footer.tsx` (whitespace next to `<Mail/>` in email line) — fix quietly.

## Plan

### 1. Cinematic Hero (replaces current hero)
- Background: looping muted `<video>` (fashion B-roll from a free CDN like Pexels/Coverr) with dark gradient + grain overlay.
- Headline: kinetic split-text — "Your Story. Frame by Frame." with per-word mask reveal + serif italic accent word that morphs color.
- Floating oval video portraits (3 ovals) playing short loops at different speeds, with parallax on scroll + mouse.
- Marquee ribbon under hero: "Fashion · Reels · Editorials · Lookbooks · Campaigns" rotating in opposite directions on two rows.
- Magnetic primary CTA "Book a Shoot" + secondary "Watch Showreel" that opens a fullscreen video lightbox.

### 2. Showreel Lightbox
- Click "Watch Showreel" → full-viewport modal with backdrop blur, autoplaying reel, ESC/click-to-close, framer-motion scale+fade.

### 3. Portfolio — interactive grid
- Replace static grid with masonry-ish layout where each card is a hover-to-play muted video (poster image until hover).
- Filter chips animate using `layoutId` (smooth pill movement).
- Click → lightbox with reel + brand name.

### 4. Services — scroll-pinned story
- 3 service blocks ("Outdoor / Indoor / Street") presented as horizontally-scrolling story cards with sticky left text + right image stack that crossfades while scrolling (scroll-linked via `useScroll`).

### 5. Process timeline (new section)
- 4-step animated timeline (Brief → Shoot → Edit → Deliver) with SVG path that draws as user scrolls.

### 6. Testimonials carousel (new section)
- Auto-advancing testimonial cards with brand logos, drag-to-swipe, indicator dots.

### 7. Pricing — refined
- Keep 3 tiers but add hover tilt, animated price counter on first view, "Most popular" ribbon with shimmer.

### 8. FAQ — keep but polish
- Smoother accordion easing, plus icon rotates to minus.

### 9. CTA + Footer
- Big closing CTA band with parallax background image.
- Fix Footer hydration mismatch (the `<Mail/>` whitespace).

### 10. Global polish
- Remove leftover `/services` route file (causes confusion; site is single-page with anchors).
- Custom cursor refinement: grows + label on hover over media ("PLAY" / "VIEW").
- Page-load intro: brand mark wipe reveal (1.2s) then content fades in.
- Theme: deepen onyx, warm rose-gold accent, add subtle film-grain animated overlay.
- Respect `prefers-reduced-motion` everywhere.

## Technical notes
- Use existing stack: framer-motion, TanStack Start, Tailwind v4, lucide-react.
- Videos: hotlink small mp4s from coverr.co / pexels (CDN, no upload needed). Add `playsInline muted loop preload="metadata"`.
- New components: `VideoHero.tsx`, `ShowreelLightbox.tsx`, `HoverVideoCard.tsx`, `ProcessTimeline.tsx`, `Testimonials.tsx`, `IntroOverlay.tsx`, `MagneticButton.tsx`.
- Fix `Footer.tsx` email line: render `<Mail/> hello@reelwale.studio` without stray text node mismatch (use a single string child, no whitespace siblings).
- Delete `src/routes/services.tsx` if present; nav links use hash anchors to home sections.
- No new dependencies required.

## Out of scope
- CMS / backend (can add later via Lovable Cloud).
- Real client video assets — placeholders from free stock until user provides reels.
