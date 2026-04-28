---
"@fremtind/jokul": patch
---

Justerte oppsettet for fonter i branding:

- Inter-fontene ligger nå også i `src/fonts/` (ved siden av `src/fonts/brands/`) slik at de stemmer med URL-ene i `styles/theme/_fonts.scss`.
- "Brandet" Fremtind refereres nå til som `fremtind` overalt – både i mappestruktur (`src/fonts/brands/fremtind`, `src/styles/theme/brands/fremtind`), token-filer (`typography.fremtind.tokens.json`) og `data-brand`-selectorer (`[data-brand="fremtind"]`).
- Antallet `@font-face`-definisjoner per brand er ryddet opp så vi ikke har fler enn nødvendig. Den globale `_fonts.scss` er konsolidert tilsvarende.
