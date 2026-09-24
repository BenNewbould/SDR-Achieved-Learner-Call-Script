# Velocity Academy Design System

Velocity Academy is a UK apprenticeship training provider based on the Register of Apprenticeship Training Providers (RoATP) and regulated by Ofsted. It sells and delivers levy-funded digital and professional apprenticeships in three industries — **AI**, **IT & Digital** and **Marketing** — plus apprentice recruitment. Founder: Ben Newbould.

Two audiences, addressed differently and roughly equally:

- **Employers** — HR, L&D and department leads at levy-paying and non-levy organisations. The pitch is ROI on a tax they already pay: close skills gaps, build AI capability, improve retention, at little or no net cost. Named clients include Centrica, JCB, NHS, Hitachi Rail, Thales, Ticketmaster, Northumbria Police, Northumbrian Water, Utility Warehouse, Wakefield Council, South Tyneside Council, Reviews.io, GivEnergy and Framework Digital.
- **Students / employees** — people already in work who want in-demand skills, a recognised qualification and progression. The pitch is "earn while you learn".

Published impact figures: **£200M+** tracked customer ROI, **1000+** learners enrolled, **400+** UK customers, **92%** increase in workforce motivation and satisfaction.

## Surfaces represented here

| Surface | Where it lives |
| --- | --- |
| Marketing website (velocity-academy.co.uk) | `ui_kits/website/` |
| Social / campaign posters (1536×1024) | `posters/` |
| Square social posts (1080×1080) | `posters/social-square.html` |
| YouTube / video thumbnails (16:9) | `posters/video-thumbnail.html` |
| Sales documents (levy guide, case studies) | poster and web components; no dedicated print kit yet |

## Sources used

- **Website:** https://www.velocity-academy.co.uk — fetched as rendered text. Copy, navigation structure, client list, course descriptions, success stories and testimonials were read from it. **No access to the site's CSS, templates or WordPress/Elementor source**, so all measured values below were derived from the supplied graphics, not from production code.
- **Logos:** `uploads/Velocity Academy Logo.png`, `uploads/Velocity Academy Logo White.png` — trimmed to their bounding boxes and copied into `assets/`.
- **Brand graphics (colour, type and layout ground truth):** `uploads/Building AI Capability.png`, `Apprenticeship Pathway Infographic.png`, `Skills Progression.png`, `From Potential to AI Specialist.png`, `Invest Your Levy, Build Capability.png`, `ChatGPT Just Got More Powerful.png`, `Dylan Ord L3DT Thumbnail.png`. Originals preserved in `assets/reference/`.
- **Documents:** `uploads/Apprenticeship Funding - Explained.pdf` (13pp), `uploads/Velocity Academy Apprenticeship Case Studies.pdf` (9pp). Text extracted; embedded photography recovered into `assets/`.
- Site build credit: Hexagon Digital (hexagondigital.design).

---

## CONTENT FUNDAMENTALS

**British English, always.** "Upskill", "recognised", "specialised", "organisation", "programme", "analyse", "£". "Apprenticeship levy" is lower case in running copy; "Apprenticeship Levy" takes capitals when named as the government scheme. Programme names are title case with the level first: "Level 4 AI & Automation Practitioner", "Level 3 Information Communication Technician", "Level 4 Network Engineer".

**Second person to the reader, first person plural for Velocity.** "Turn *your* apprenticeship funding into real business capability." "*We* find and train the best new Digital and Professional Services talent for *your* organisation." Velocity is "we"; the reader's company is "your business" or "your people". Apprentices are named individuals, never "candidates" in public-facing copy.

**The headline formula is a two-clause pivot.** Clause one concedes something easy or familiar; clause two names the harder, more valuable thing — and it is set in Velocity Blue. Real examples:

> BUYING AI TOOLS IS EASY. **BUILDING AI CAPABILITY IS HARDER.**
> ONE SKILLS GAP. **TWO BUSINESS OPPORTUNITIES.**
> DON'T JUST SPEND YOUR LEVY. **INVEST IT.**
> TRAINING THAT BUILDS SKILLS. **AND EARNS A RECOGNISED QUALIFICATION.**
> YOUR NEXT **AI SPECIALIST** COULD ALREADY BE ON PAYROLL.

Poster headlines are **uppercase with full stops on every clause**. Web and document headings are mixed case. Never a question-mark headline, never a pun.

**Sub-headlines are one plain sentence of mechanism, not more selling.** "Technology investment only creates value when your people know how to use AI effectively, responsibly and consistently." "Identify existing talent, develop their skills and build a stronger, more loyal team with apprenticeships."

**Payoff lines come in twos and threes, each a two-word noun-verb pair with a full stop.** PEOPLE PROGRESS. BUSINESSES THRIVE. BRIGHTER TOMORROWS. / INVEST IN PEOPLE. BUILD STRONGER BUSINESSES. / PEOPLE DEVELOP. BUSINESSES GROW. / HARD WORK. REAL PROGRESS. BRIGHTER TOMORROWS. / REAL SKILLS. REAL PROGRESSION. The last one in a set is usually blue.

**The handwritten corner mark is a separate voice** — warmer, first-person-plural-implied, and it is the only place the brand relaxes: *Skills today. Brighter tomorrows.* / *People make AI work.* / *Same people. New possibilities.*

**Labels are two words, uppercase, stacked on two lines.** PRACTICAL / AI SKILLS. DRIVE / ADOPTION. RESPONSIBLE / USE. MEASURABLE / PRODUCTIVITY. IDENTIFY / POTENTIAL. RETAIN / GREAT PEOPLE.

**CTAs name the thing.** "Explore our AI Apprenticeships", "Read this apprentice's story", "Read this article", "Find Out More", "Contact Us", "Discover what's new". Not "Learn more", not "Click here", not "Get started".

**Numbers are specific and sourced.** £3 million pay bill threshold, 0.5% levy, 24-month expiry, 100% / 95% funding, £1,000 incentive, £20,000 NI saving, 92%. Never "hundreds" or "many".

**No emoji, anywhere.** Not on social, not in headings, not as bullets. Lists use a filled blue check-circle.

**Tone:** confident, plain, commercially literate, faintly impatient with waste ("essentially becoming an additional tax", "the best kept secret"). Warm about people, blunt about money. Quotes from clients and apprentices are reproduced verbatim, including their own phrasing and minor slips — do not tidy them.

---

## VISUAL FOUNDATIONS

### Colour

One blue does almost all the work: **`--blue-600` #006EFC**, sampled from the CTA bars in the source graphics. Headline ink is **`--navy-900` #02163F**, not black — except the logotype, which is true black. Light grounds are near-white with a blue cast (#FBFCFE → #EFF7FE); the pale-blue panel `--surface-panel` #EFF7FE carries every supporting information block. **Every neutral is cool.** There is no warm grey, no beige, no cream anywhere in the brand.

Three ramps and nothing else: blue, navy, cool grey. Semantic status colours exist in `tokens/colors.css` for forms, but only success (a blue or green check) appears in real brand assets.

**Two colours per composition, three at most.** A poster is navy + blue on white, or white + ice-blue on blue, or white + blue on navy. Never all three grounds at once.

Gradients are **blue only** — `--gradient-brand` (#0163C8 → #006EFC → #55B1FD, 135°), `--gradient-brand-soft` (white → pale blue), `--gradient-night` (a navy radial with a lighter core at 78%/42%). There is no purple, no violet, no teal, no orange. A bluish-purple gradient is off-brand.

### Type

Both real brand faces are commercial and were not supplied, so **all three families below are Google Fonts substitutions**. See "Type substitutions" at the end.

- **Archivo** (variable, `font-stretch: 88%`, weight 800) — poster and thumbnail headlines. Uppercase, tracking −0.015em, line-height 0.90–0.94, set tight and stacked three or four lines deep. This is the loudest thing on any Velocity asset.
- **Figtree** (300–900) — everything else: web headings (mixed case, tracking −0.02em), body, labels, buttons. The real brand's geometric sans has a high x-height, double-storey `a` and single-storey open-tailed `g`; Figtree is the closest free match.
- **Caveat** (700) — the handwritten corner tagline only.

Spaced uppercase (`letter-spacing: 0.16em`) is used for eyebrows and for the payoff lines on video thumbnails — `D Y L A N   O R D`, `H A R D   W O R K .`

Minimum body size 15px on screen, 12pt in print. Poster body copy never below 22px at 1536 wide.

### Layout

Fixed grids for the marketing assets: posters are **1536×1024** with a 52px margin, square social **1080×1080** with a 60px margin, thumbnails 16:9. The website uses a **1200px container** with 32px gutters and a **96px section rhythm**; all web layouts reflow (`minmax(0,1fr)` tracks, no fixed heights on text boxes).

Poster anatomy is consistent enough to be a template: logo top-left, handwritten tagline top-right (rotated −2 to −3°), headline block left with the accent rule beneath, imagery or a diagram right, a divided pale-blue benefit panel across the lower third, and a bottom row of **blue CTA bar (≈60% width) + payoff strip (≈40%)**.

### Backgrounds and imagery

Three grounds only: near-white, the blue gradient, and the navy night gradient. No patterns, no textures, no noise, no hand-drawn illustration. The one recurring graphic device is an **oversized watermark of the V roundel** bled off the bottom-right corner at 15–20% opacity.

Photography is **bright, cool, desaturated, real workplaces** — open-plan offices, laptops, people mid-conversation, natural window light. Subjects are cut out and floated on posters, or sit full-bleed behind a **white left-to-right protection fade** (`--gradient-photo-fade`). Never a dark scrim over a photo: the headline keeps full-strength navy or blue ink against white, so contrast stays above 4.5:1. Portraits on the "journey" layouts are masked into pale-blue circles.

### Cards, borders, radii

Cards are **white, 20px radius (`--radius-lg`), a 1px `#E6ECF4` hairline, and a soft cool shadow** (`0 2px 8px rgba(2,22,63,0.06)`). Pale-blue panels have no border at all. Inputs and small tiles use 14px; actions are always fully pill-shaped.

**Never a coloured left-border accent card.** Dividers inside a panel are 1px vertical hairlines, not gaps.

Shadows are low-contrast and blue-tinted; the only strong shadow is `--shadow-brand` (a blue glow under a primary button). The neon ring on night posters (`--neon-ring`) is the one glow effect, reserved for outline icons on navy.

### Transparency and blur

Used in exactly one place: **glass chips floating over photography** — white at 86% opacity, 14px backdrop blur, 70%-white hairline, 20px radius. Two to four per poster, no more. Everything else is opaque.

### Motion

Brisk and plain. 150ms for hover and press, 240ms for colour and shadow, 420ms for a scroll reveal (a short fade-and-rise, 16px). Default easing `cubic-bezier(0.22,0.61,0.36,1)`. **No bounce, no spring, no parallax, no autoplaying carousels of motion.**

- **Hover:** primary buttons darken one step (`--blue-700`); secondary buttons swap their grey hairline for blue and their ink for blue; cards lift 2px and go to `--shadow-md`; a trailing arrow or chevron nudges 3px right.
- **Press:** `translateY(1px)` and one further colour step down. **Never a scale shrink.**
- **Focus:** 2px `--blue-400` outline at 2px offset; form fields get a blue border plus a 3px translucent blue ring.
- **Disabled:** 45% opacity, shadow removed.

### Iconography

See ICONOGRAPHY below.

---

## ICONOGRAPHY

The brand's icons are a single consistent set: **rounded-terminal, medium-weight, mostly outline with a few solid glyphs**, always Velocity Blue, always inside a pale-blue circle (`IconTile`) or a neon ring on navy. They are never multicolour, never duotone, never in a square tile.

No icon files were supplied and the site's icon source was not accessible, so this system standardises on **Material Symbols Rounded** (Google Fonts, weight 500, FILL 0) — the closest match to the supplied graphics in terminal shape, stroke weight and metrics. **This is a substitution; see below.** It is loaded from the Google Fonts CDN in `tokens/fonts.css` and used via `class="vel-icon"` or the `IconTile` component.

The glyphs that actually appear in Velocity's graphics, mapped:

| In the brand assets | Material Symbols Rounded |
| --- | --- |
| Brain | `psychology` |
| Bar chart (solid) | `bar_chart` + `vel-icon--filled` |
| Three people | `groups` |
| Shield | `shield` |
| Gear | `settings` |
| Lightbulb | `lightbulb` |
| Briefcase | `work` |
| Rosette / award | `workspace_premium` |
| Graduation cap | `school` |
| AI chip | `memory` |
| Laptop | `laptop_mac` |
| Megaphone | `campaign` |
| Rising arrow | `trending_up` |
| Star | `star` |
| Stairs | `stairs` |
| Single person | `person` |
| Database | `database` |
| Play | `play_arrow` |
| Tick in a circle (solid) | `check_circle` + `vel-icon--filled` |
| Arrow / chevron | `arrow_forward`, `chevron_right` |
| Quote mark | `format_quote` |

**No emoji, ever.** Unicode characters are not used as icons. The only non-icon glyph device is the `+` between the four apprenticeship ingredients on the Skills Progression layout, set in Figtree.

Third-party product marks (the OpenAI mark in the ChatGPT post) appear at real fidelity inside a `GlassChip` — pass the real asset via `iconSrc`; do not redraw them.

---

## Type & icon substitutions — please confirm

Three substitutions were made because the real files were not supplied. **All three are flagged for your review:**

1. **Poster display face → Archivo** (variable width/weight). The real face is a heavy squarish grotesque set slightly condensed. Archivo at `font-stretch: 88%` / weight 800 is a very close match but not identical.
2. **Core sans → Figtree.** The real face looks like a commercial geometric-humanist sans (Gilroy / Museo Sans / Sofia Pro family). The logotype uses the same or a closely related face. Figtree matches x-height, weight and the open-tailed `g`; letterforms differ slightly.
3. **Icon set → Material Symbols Rounded.**

If you can send the licensed font files (woff2 preferred) and the real icon library, they drop straight into `tokens/fonts.css` — nothing else has to change. Note that because the fonts currently load from the Google Fonts CDN, the compiler reports zero `@font-face` rules in this project; self-hosting the real files will fix that too.

**No logo was drawn or reconstructed.** Both lockups are your supplied PNGs, trimmed to their bounding boxes.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Single entry point. Consumers link this. `@import` lines only. |
| `tokens/fonts.css` | Font imports and family tokens |
| `tokens/colors.css` | Blue / navy / neutral ramps, semantic aliases, brand gradients |
| `tokens/typography.css` | Weights, `--type-*` shorthands, tracking, measure |
| `tokens/spacing.css` | 4px scale, container, gutter, section rhythm |
| `tokens/radius-elevation.css` | Radii, shadows, glass, neon ring |
| `tokens/motion.css` | Durations, easings, hover/press transforms |
| `tokens/base.css` | Element defaults plus the `.vel-rule` / `.vel-eyebrow` / `.vel-poster` / `.vel-script` / `.vel-icon` motif classes |
| `assets/` | Logos (trimmed), two recovered stock photographs (`photo-open-office.png`, `photo-learners-session.png`), `reference/` originals of all supplied graphics |
| `guidelines/*.card.html` | 24 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `posters/` | Five campaign layout templates: light split, blue gradient, night neon, square social, video thumbnail |
| `ui_kits/website/` | Four-screen click-through recreation of velocity-academy.co.uk — see its README |
| `templates/campaign-poster/` | A Design Component starting point for a new 1536×1024 poster |
| `SKILL.md` | Agent Skills front matter so this folder works in Claude Code |

### Components

**`components/core/`** — `Button`, `Card`, `IconTile`, `SectionHeading`, `Tag`
**`components/brand/`** — `Logo`, `ScriptTagline`, `TaglineStrip`, `CtaBanner`, `GlassChip`
**`components/layout/`** — `PageHero`, `Section`, `SplitFeature`
**`components/content/`** — `FeatureItem`, `StatBlock`, `CourseCard`, `SuccessStoryCard`, `TestimonialCard`, `NewsCard`, `StepItem`, `ChecklistItem`, `LogoWall`
**`components/navigation/`** — `SiteHeader`, `SiteFooter`
**`components/forms/`** — `Input`, `Select`, `Checkbox`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage example, variants).

### Intentional additions

No component library, Figma file or codebase was supplied, so the inventory above was authored from the brand assets. Three entries deserve a note:

- **`ScriptTagline`, `TaglineStrip`, `CtaBanner`, `GlassChip`** are not generic primitives — they encode layout motifs that recur verbatim across every supplied graphic, so they are reproduced as components rather than described in prose.
- **`IconTile`** exists because every icon in the brand appears inside a circular tile; using a bare glyph is off-brand.
- **`LogoWall`** ships without client logo files — those are the clients' marks, not Velocity's.

Standard primitives the brand assets give no evidence for (Toast, Tooltip, Tabs, Avatar, Switch, Radio, Dialog, Breadcrumbs, Pagination) were deliberately **not** invented. Ask if you need them.
