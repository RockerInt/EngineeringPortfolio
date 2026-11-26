# Design: Jonathan Jiménez, engineering portfolio

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: atmospheric
- Shape of the first page: Map / Diagram (the DSR.Architecture layers carry the home page)
- Theme: Ribbon, dawn colourway (the night drawn on the teal band behind the home hero and the footer)
- Axes: light/grotesk-sans/chromatic-teal · posture: committed
- Chrome: nav edge-aligned bar · footer statement on the night · hero Banner on every route

## Tokens
`src/styles/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(98.2% 0.008 82);  --color-paper-2: oklch(95.8% 0.011 82);  --color-paper-3: oklch(92.3% 0.014 82);
  --color-ink: oklch(18% 0.006 80);  --color-ink-2: oklch(30% 0.008 80);  --color-muted: oklch(47% 0.012 80);
  --color-rule: oklch(89.5% 0.011 82);  --color-rule-2: oklch(93.5% 0.009 82);
  --color-accent: oklch(44% 0.075 190);  --color-accent-soft: oklch(92% 0.028 190);  --color-accent-ink: oklch(98% 0.006 85);
  --color-band: oklch(26% 0.045 195);  --color-band-ink: oklch(94% 0.012 85);
  --font-display: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;  --font-body: "Figtree", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "JetBrains Mono", ui-monospace, monospace;
  --radius-card: 20px;  --radius-part: 6px;  --radius-pill: 999px;  --rule-hair: 1px;
  --shadow-part / --shadow-panel / --edge-light: machined parts lit from above
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Print (the résumé PDFs) swaps the same roles to white paper.

## Type
- Instrument Sans 400 for every head, sentence case, tight tracking; periods and figures in the display face, tabular.
- Figtree 400 for prose, 500 for labels a step smaller, muted.
- JetBrains Mono only for package names and code.

## Surfaces
- Reading sections use hairlines, not boxes. The architecture drawing sits in one machined panel (gradient, edge light, panel shadow); its layers are rounded wells, its parts pills.
- The night: the home hero and the footer sit on the teal band, a sky-to-land gradient with generated grain and one horizon line; `.night` swaps the colour roles inside it.
- Figures rounded at the card radius, unbordered; captures in natural colour, the portrait muted toward sepia.
- Teal marks the action, the current nav item and the current post; the pale teal is the primary on the night.

## Controls
- Primary: teal pill, 52px, lit from above; on the night, pale teal with dark teal text.
- Secondary: machined pill, same height. Links underlined in muted grey.

## Motion
- Character: calm. No ambient canvas and no loop in this build; states change over the short duration.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request.
