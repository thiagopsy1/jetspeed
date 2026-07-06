# Design System: JetSpeed Fibra Óptica

## 1. Visual Theme & Atmosphere

A kinetic, conversion-focused ISP landing page with confident asymmetric layouts and fluid spring-physics motion. The atmosphere is bold yet approachable — deep navy paired with high-energy green signals performance and trust. Density is balanced (5/10): generous whitespace in institutional sections, information-dense in plan cards. Variance is medium-high (6/10): split-screen hero, asymmetric institutional layout, no three-equal-cards trap. Motion is fluid (6/10): spring physics on interactive elements, staggered waterfall reveals, perpetual pulse on the WhatsApp CTA.

## 2. Color Palette & Roles

- **Midnight Navy** (`#001c71`) — Primary: hero backgrounds, navbar glass, card gradients, footer
- **Deep Space** (`#000C40`) — Hero gradient start, darkest surfaces
- **Fiber Green** (`#00a84e`) — Secondary: primary CTA, navbar background, conversion points — use sparingly
- **Light Green** (`#78dc77`) — Secondary dim: headline accent, hover states
- **Solar Yellow** (`#ffba20`) — Tertiary/Accent: "Mais popular" badge, notification dots
- **Pure White** (`#ffffff`) — App toggle panels, form backgrounds, text on dark
- **Gallery White** (`#f3f3f7`) — Surface low: section backgrounds, card interiors, value boxes
- **Charcoal Ink** (`#18181b`) — Primary text on light backgrounds
- **Steel Muted** (`#71717a`) — Secondary text, descriptions, metadata, disclaimers

No pure black (`#000000`). No purple neon glows. One accent (yellow) used only at two points.

## 3. Typography Rules

- **Font**: Manrope exclusively (400, 500, 600, 700, 800 weights via Google Fonts)
- **Display/Speed**: 800 weight, `letter-spacing: -0.03em`, `line-height: 1`. Used only for plan speed numerals
- **Headlines**: 700–800 weight, `letter-spacing: -0.01em to -0.02em`. `clamp(2.5rem, 5vw, 3.75rem)` for hero H1
- **Body**: 400 weight, `line-height: 1.6`, max 65ch per line
- **Labels**: 600 weight, `letter-spacing: 0.05em`, used for metadata, badges, tab labels
- **Banned**: Inter, system-ui for headlines, any serif font, pure uppercase body copy

## 4. Component Stylings

- **Navbar**: Fiber Green solid when at top, glassmorphism (`backdrop-blur-20, bg-primary/65`) on scroll. Smooth `y` translate on scroll-hide. Desktop: centered logo + flanking nav links + right CTA pill. Mobile: left WhatsApp number + right social icons + hamburger
- **Buttons**: Rounded full (`border-radius: 9999px`). Primary: Fiber Green fill, white text, `shadow-green`. Ghost: `border border-white/20`, no fill. Active state: `scale(0.98)` tactile push. No outer glow
- **Plan Cards**: Gradient backgrounds (`card-gradient` blue or `card-green` for featured). Static internal stroke: `box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12)`. Hover: deeper inset stroke + outer shadow + `-4px` Y translate via Framer Motion. `border-radius: 1.5rem`
- **App Toggles**: White panel inside cards. `border-radius: 0.75rem` per toggle. Selected: `border-primary/30 bg-primary/8`. Locked (max reached): `opacity: 30%`, `cursor: not-allowed`. Tap: spring `scale(0.92)` feedback
- **Form Inputs**: `bg-white/10 border-white/15` on dark hero. Focus: `border-secondary/60`. No floating labels — static label above input
- **Tab Switcher**: Animated `motion.div` layout spring pill (`stiffness: 400, damping: 35`). White pill on dark container

## 5. Layout Principles

- Container max-width: `1280px`, centered, `padding: 0 1.5rem`
- Hero: CSS Grid `1fr 1fr` on `lg:` (1024px+). Left: copy + CTAs. Right: lead-gen form. Single column below `lg:`
- Plans: CSS Grid `2fr` on `md:`, `4fr` on `lg:`. Mobile: horizontal scroll snap carousel, `width: 82vw` per card
- Institutional: CSS Grid `1fr 1fr` on `lg:`. Image left, copy + values grid right
- Apps: CSS Grid `4fr` on `md:`, `2fr` on mobile
- No `calc()` percentage hacks. No overlapping elements. No 3-equal-cards trap
- Sections use `min-h-[100dvh]` for hero only (iOS Safari safe). Other sections: `py-section` (`5rem`)

## 6. Motion & Interaction

- **Spring physics default**: `stiffness: 100, damping: 20` for page reveals; `stiffness: 260, damping: 20` for FAB entrance; `stiffness: 400, damping: 35` for tab switcher pill
- **Hero entrance**: Staggered `fadeUp` — each element delays `0.12s × index`. `y: 32 → 0`, `opacity: 0 → 1`, `duration: 0.6s`, `ease: [0.25, 0.1, 0.25, 1]`
- **Plan cards**: `whileInView` scroll trigger, `once: true`. Stagger `delay: index × 0.1`. `whileHover: { y: -4 }`
- **Institutional**: `x: ±32 → 0` slide-in on scroll
- **Values grid**: Individual stagger `delay: index × 0.08`
- **App toggle**: `whileTap: { scale: 0.92 }` spring
- **Navbar**: `motion.animate({ y: visible ? 0 : -100 })`, `duration: 0.3`
- **FAB**: Entrance `delay: 1.0–1.2s`, spring pop. WhatsApp: perpetual `pulse-green` CSS animation
- **Performance**: All motion via `transform` and `opacity` only. No `width/height/top/left` animations

## 7. Anti-Patterns (Banned)

- No emojis anywhere in UI
- No `Inter` font
- No pure black (`#000000`) — use Charcoal Ink (`#18181b`) or Midnight Navy
- No neon purple/blue outer glows
- No oversaturated gradient text on large headlines
- No custom mouse cursors
- No 3-column equal card grid — plans use 4-col asymmetric with featured highlight
- No centered hero on desktop — split-screen left/right layout enforced
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionary"
- No filler text: "Scroll to explore", bouncing chevrons, scroll arrows
- No fabricated statistics or uptime percentages — only real business data
- No overlapping elements — every element occupies a clean spatial zone
- No horizontal scroll on mobile (except intentional plan carousel with `overflow-x: auto`)
- No `h-screen` — use `min-h-[100dvh]` for hero section
