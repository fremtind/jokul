---
"@fremtind/jokul": major
---

BREAKING CHANGE: Fjerner flere komponenter so har vært merket som deprecated lenge, samt spacing-variabler basert på t-skjortestørrelser og tallbaserte typografivariabler.

- Fjerner komponentene `Accordion` og `AccordionItem`, som har vært merket som deprecated ganske lenge. I stedet for disse komponentene kan man bruke `ExpandablePanel`.
- Fjerner komponentene `NavCard`, `InfoCard` og `TaskCard`, som har vært merket som deprecated ganske lenge. I stedet for disse komponentene kan man bygge opp tilsvarende kort ved hjelp av den generelle `Card`-komponenten, `CardImage`-komponenten, og andre Jøkul-komponenter. Se eksemplene i portalen/Storybook for hvordan dette kan gjøres.
- Fjerner den utgåtte versjonen av `Expander`, samt `ExpandButton`-komponenten. Nye `Expander` kan brukes i stedet.
- Spacingvariabler og hjelpeklasser basert på t-skjortestørrelser (f.eks. `spacing-xl`) er fjernet. Bruk heller variablene på formen `spacing-40` eller den nye `unit`-skalaen.
- Gamle, nummererte typografivariabler for størrelse og linjehøyde. Disse bør ikke ha vært i direkte bruk ute i løsningene deres.
