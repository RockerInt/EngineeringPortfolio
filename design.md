# Design: Jonathan Jiménez, engineering portfolio

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: atmospheric
- Shape of the first page: Map / Diagram (the DSR.Architecture layers carry the home page)
- Theme: Ribbon, two-in-the-morning colourway (the night drawn as a blue-black sky with one amber horizon behind the home hero and the footer)
- Axes: dark/grotesk-sans/warm · posture: committed
- Chrome: nav edge-aligned bar · footer statement on the night · hero Banner on every route

## Tokens
`src/styles/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(13.2% 0.022 258);  --color-paper-2: oklch(16.4% 0.024 258);  --color-paper-3: oklch(10.5% 0.02 258);
  --color-ink: oklch(93.5% 0.012 85);  --color-ink-2: oklch(84% 0.014 85);  --color-muted: oklch(72% 0.02 255);
  --color-rule: oklch(27% 0.024 258);  --color-rule-2: oklch(20.5% 0.022 258);
  --color-accent: oklch(82% 0.095 68);  --color-accent-ink: oklch(20% 0.03 62);  --color-focus: oklch(85% 0.1 68);
  --color-band: oklch(10% 0.024 258);
  --font-display: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;  --font-body: "Figtree", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "JetBrains Mono", ui-monospace, monospace;
  --radius-card: 20px;  --radius-part: 6px;  --radius-pill: 999px;  --rule-hair: 1px;
  --shadow-part / --shadow-panel / --edge-light: machined parts lit from above, shadows from near-black
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Print (the résumé PDFs) swaps the same roles to white paper.

## Type
- Instrument Sans 400 for every head, sentence case, tight tracking; periods and figures in the display face, tabular.
- Figtree 400 for prose, 500 for labels a step smaller, muted.
- JetBrains Mono only for package names and code.

## Surfaces
- Reading sections use hairlines, not boxes. The architecture drawing sits in one machined panel (gradient, edge light, panel shadow); its layers are rounded wells, its parts pills.
- The night: the home hero and the footer sit on a deeper band, a sky-to-land gradient with generated grain and one amber horizon line; `.night` swaps the colour roles inside it.
- Figures rounded at the card radius, unbordered; captures in natural colour, the portrait muted toward sepia.
- Amber, the lit window, marks the action, the current nav item, the current post and the domain layer of the drawing; nothing else is coloured.

## Controls
- Primary: amber pill, 52px, lit from above, dark text.
- Secondary: machined pill, same height. Links underlined in muted grey.

## Motion
- Character: calm. No ambient canvas and no loop in this build; states change over the short duration.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request.
