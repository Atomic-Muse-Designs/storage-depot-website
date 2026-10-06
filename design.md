# Storage Depot — Design

Marketing site for Storage Depot, a climate-controlled indoor self-storage facility at 277 Joseph Street, Alexander City, AL. Web only. Industrial / utilitarian: ink-black and concrete surfaces, safety-amber accents, corrugated-metal line textures, condensed all-caps display type. Real property photos (daylight exteriors) sit under dark gradients in heroes so the dark/amber identity holds.

## Colors
- ink `#0f1113` (top bar, footer, dark sections), steel `#2a2e33` (feature section), foreground `#17191b`
- concrete `#f2f0ec` (page background), secondary `#e7e3db` (alt bands), border `#dad6ce`, input `#cdc8bf`
- primary / amber `#f09a16`, hover `#ffab24`; muted text `#6b6f74`; destructive `#c0392b`
- Radius: 0 everywhere. Hard edges.

## Typography
- Display: Barlow Condensed 500/600/700, uppercase. `.display-xl` clamp(3.25rem, 8.5vw, 7.5rem), `.display-lg` clamp(2.5rem,5.5vw,4.75rem), `.display-md` clamp(2rem,3.6vw,3.25rem). Line-height ~0.92.
- Body: Jost 300–600. Body copy 1rem–1.125rem, line-height 1.65.
- Eyebrow: Barlow Condensed 600, 0.78rem, tracking 0.22em, amber.

## Components
- `.shell` max-width 84rem, padding 1.25rem / 2.5rem md.
- Buttons: `.btn-amber`, `.btn-outline-light`, `.btn-outline-dark` — condensed uppercase, 0.95rem × 1.75rem padding, lift 1px on hover.
- Unit cards: white, border, footprint diagram with corrugated amber fill scaled to sq ft.
- Feature grids: hairline-bordered cells on steel.
- FAQ accordion: condensed question, square +/− toggle.

## Pages
Home, Units & Pricing, Facility & Security, Contact. Sticky header with amber "Reserve Online" → U-Haul listing.

## Facts (source: U-Haul listing 1039057)
- Office: Mon–Fri 8 AM–5 PM, Sat–Sun closed. Storage access: 7 days, 24 hours.
- Units (interior, 1st floor, climate, roll-up, 10 ft ceiling): 5×10 $75, 10×10 $90, 10×15 $115, 10×20 $135.
- Features: 24-hour access, alarm system, climate controlled (65–85°F), electronic gate access, interior units, online payments.
- Phone (256) 369-1198. Managed by 3H Management. U-Haul Self-Storage Affiliate.

## Motion
Staggered fade-up on hero load; scroll reveals on sections (IntersectionObserver, CSS transitions). Respect reduced motion.
