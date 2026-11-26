# Design: Jonathan Jiménez, engineering portfolio

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Map / Diagram (the DSR.Architecture layers carry the home page)
- Theme: Rim, night colourway
- Axes: dark/grotesk-sans/warm · posture: committed
- Chrome: nav edge-aligned bar · footer statement · hero Banner on every route

## Tokens
`src/styles/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(9% 0.008 75);  --color-paper-2: oklch(12.5% 0.009 75);  --color-paper-3: oklch(6.5% 0.007 75);
  --color-ink: oklch(94% 0.010 80);  --color-ink-2: oklch(84% 0.011 80);  --color-muted: oklch(68% 0.012 80);  --color-muted-2: oklch(50% 0.010 80);
  --color-rule: oklch(25% 0.010 78);  --color-rule-2: oklch(16% 0.009 78);
  --color-accent: oklch(72% 0.17 45);  --color-accent-ink: oklch(10% 0.02 45);  --color-accent-2: oklch(74% 0.12 250);  --color-focus: oklch(78% 0.15 45);
  --font-display: "Switzer", ui-sans-serif, system-ui, sans-serif;  --font-body: var(--font-display);  --font-outlier: "Geist Mono", ui-monospace, monospace;
  --radius-card: 0;  --radius-pill: 0;  --rule-hair: 1px;  --rule-heavy: 1px;  --shadow-card: none;
  --head-case: none;  --color-current: var(--color-accent);  --color-planned: var(--color-accent-2);
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Print (the résumé PDFs) swaps the same roles to white paper.

## Type
- Switzer 500 for every head, sentence case, tight tracking; Switzer 400 for prose; labels Switzer 500 a step smaller, muted.
- Geist Mono 400 only for periods, years, index numbers, hosts, package names and code.

## Surfaces
- Hairlines divide; nothing is round; depth by lightness only (paper-2 lifts a well, paper-3 sinks one).
- Figures carry a 1px inset ring and two 12px corner ticks outside the frame.
- Orange marks the action and the current state (the current post, the current nav item); sky blue marks what is planned.
- Client-site captures in natural colour; the portrait slightly desaturated.

## Controls
- Primary: orange fill, near-black text · square · 48px
- Secondary: 1px rule outline · same radius and height
- Links: ink with a muted underline that turns ink on hover

## Motion
- Character: still. A state changes over the short duration; nothing reveals, pulses or loops.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request.
