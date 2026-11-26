---
"@fremtind/jokul": patch
---

Expander kan nå nås med tastatur når den brukes uten ExpandablePanel. Utenfor ExpandablePanel rendres den som `button` i stedet for `summary` (som bare er interaktiv inni en `details`), med `aria-expanded`, hover og synlig fokusring. Inni ExpandablePanel er den uendret.
