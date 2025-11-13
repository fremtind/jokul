---
"@fremtind/jokul": minor
---

Legg til ny versjon av Description List som beta-komponent:

- `DescriptionList` får nytt utseende, med streker mellom hvert item.
- `DescriptionList` bygges opp av en ny komponent `DescriptionListItem`.
- `DescriptionListItem` tar inn title og value, og har en valgfri `description`, som legger seg nederst i raden.
- `DescriptionList` kan settes til `alwaysJustified`, som skrur av responsivitet.

Legg til ny versjon av NavLink som beta-komponent:

- NavLink får nytt utseende, basert på `Card` med en pil til høyre.
- NavLink tar inn `title`, og en valgfri `description`.
