---
"@fremtind/jokul": minor
---

Legg til ny versjon av Description List som beta-komponent:

- `DescriptionList` bygges opp av en ny komponent `DescriptionListItem`.
- `DescriptionListItem` tar inn title og value, og har en valgfri `supportText`, som alltid ligger nederst i raden.
- `DescriptionList` får mulighet til å vise skillelinjer mellom hvert item.
- `DescriptionList` får en `alignment`-prop, med mulighet for å vise items `horizontal`, `vertical` og `justified`. I smale visninger vil den alltid brekke til vertikalt, som den gamle også gjorde.

Legg til ny versjon av NavLink som beta-komponent:

- NavLink får nytt utseende, basert på `LinkListLink` med en pil til høyre.
- NavLink tar inn `title`, og en valgfri `description`.
