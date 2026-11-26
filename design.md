# Design: Jonathan Jiménez, engineering portfolio

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Map / Diagram (the DSR.Architecture layer drawing carries the home page)
- Theme: Blueprint, cyanotype sheet
- Axes: mid/geometric-sans/neutral · posture: drenched
- Chrome: nav slab · footer statement · hero Banner on every route

## Tokens
`src/styles/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(35% 0.105 256);  --color-paper-2: oklch(31% 0.10 257);  --color-paper-3: oklch(26.5% 0.095 258);
  --color-ink: oklch(97% 0.012 240);  --color-ink-2: oklch(90% 0.025 242);  --color-muted: oklch(80% 0.045 244);
  --color-rule: oklch(93% 0.02 240 / 0.85);  --color-rule-2: oklch(93% 0.02 240 / 0.32);
  --color-accent: oklch(97% 0.012 240);  --color-accent-ink: oklch(33% 0.105 256);  --color-focus: oklch(97% 0.012 240);
  --font-display: "Chakra Petch", ui-sans-serif, sans-serif;  --font-body: "IBM Plex Sans", ui-sans-serif, sans-serif;
  --font-outlier: "IBM Plex Mono", ui-monospace, monospace;
  --radius-card: 0;  --radius-pill: 0;  --rule-hair: 1px;  --rule-heavy: 2px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Print (the résumé PDFs) swaps the same roles to the theme's whiteprint sheet.

## Type
- Chakra Petch 600 for every head; h1 and h2 uppercase, h3 and h4 sentence case.
- IBM Plex Sans 400 for prose, 500 for labels and controls. Labels are sentence case, untracked.
- IBM Plex Mono 500 only for periods, index numbers, hosts, package names and code.

## Surfaces
- Lines only: 1px keylines, a 2px line to open a register, a second keyline 5px inside a figure. No radius, no shadow, no filled card.
- The drafting grid appears only under the architecture drawing.
- Client-site captures stay in natural colour inside the double keyline; the portrait is printed as a cyanotype.

## Controls
- Primary: ink fill, sheet-coloured text · square · 48px
- Secondary: 1px ink outline · same radius and height
- Links: ink with a 1px underline that clears on hover

## Motion
- Character: still. No reveal; hover darkens a linked row one step; under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request.
