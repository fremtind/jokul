---
"@fremtind/jokul": major
---

Refaktorerer `FileInput`til en enklere wrapper rundt native `<input type="file">`. `FileInput`håndterer nå kun valg av filer og bruker native input-props som `accept`,`multiple`, `disabled`og `onChange`. Visning av valgte filer, filvalidering, opplastningsstatus og drag-and-drop må håndteres utenfor komponenten. Følgende props og intern funksjonalitet er fjernet: `value`, `variant`,`maxSizeBytes`, intern filliste via `children`, innebygd dropzone, intern context for filer og validering. Komponenten har nå egne props for feltnavn, beskrivele og knappetekst.
