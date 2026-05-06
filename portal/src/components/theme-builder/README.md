# Theme Builder

Temabyggeren er delt etter ansvar:

- `ThemeBuilder.tsx` og `ThemeBuilderProvider.tsx` eier side- og applikasjonsstate.
- `tokens/` er domenelaget for color tokens: definisjoner fra `color.tokens.json`, serialisering, validering og filtrering.
- `contrast/` er domenelaget for kontrast: WCAG-måling, naturlige token-par og oppsummering.
- `editor/` er redigeringsflaten i modalen.
- `tokens-list/` er leselisten med swatches og kontrastvisning.
- `preview/` er live-preview av komponenter med de redigerte CSS-variablene.
- `browser/` inneholder nettleser-IO: localStorage-draft og kopi/nedlasting av eksport.
- `layout/` inneholder sideheader, tabs og display-innstillinger.

Hold komponenter tynne: ren token-, kontrast-, filtrerings- og eksportlogikk skal ligge i domenemappene over, ikke i React-komponentene.
