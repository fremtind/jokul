---
"@fremtind/jokul": major
---

Oppdaterer til Jøkul til React 19, og forenkler polymorfe komponenter slik at de ikke lenger bruker `forwardRef`. Dette gjør at disse komponentene ikke lenger vil fungere med eldre versjoner av React. Flere av dem har også fått fjernet utgåtte egenskaper.

Følgende komponenter **UTGÅR** og kan ikke lenger brukes:

- `PrimaryButton`: Bruk heller `<Button variant="primary" />`
- `SecondaryButton`: Bruk heller `<Button />`
- `TertiaryButton`
- `GhostButton`: Bruk heller `<Button variant="ghost" />`

Følgende komponenter støtter ikke lenger React 17/18, og kan ha mistet utgåtte egenskaper

- `Button`: `iconLeft` og `iconRight` utgår, bruk heller `icon` og `iconPlacement`
- `Card`
- `Expander`
- `ExpandablePanel`
- `Flex`
- `Icon` (og alle spesifikke ikonkomponenter)
- `Link`
- `LinkListLink`
- `MenuItem`
- `NavLink`
- `Pagination`
- `TableOfContentsLink`
- `NavTab`
- `BETA_NavLink`
