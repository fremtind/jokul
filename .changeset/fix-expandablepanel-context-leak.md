---
"@fremtind/jokul": patch
---

Fiks: `Expander` plukket opp open-state fra et omkringliggende `ExpandablePanel`. Konsekvensen var at f.eks. ekspanderbare tabellrader inne i et åpent panel viste pil opp selv om raden var lukket.

Eksplisitt `open`-prop på `Expander` overstyrer nå alltid context-verdien. Context brukes bare når `open`-propen er utelatt. Lukker [#5565](https://github.com/fremtind/jokul/issues/5565).
