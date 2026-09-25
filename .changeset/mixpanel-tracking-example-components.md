---
"@fremtind/jokul": minor
---

Instrumenterer de fire første komponentene med Mixpanel-sporing (se `@fremtind/jokul/cookie-consent`) - ett eksempel per sporingsmønster:

- `Button` - enkelt klikk. Merker seg selv automatisk med `data-jkl-tracked="Button"`, ingen ekstra props trengs.
- `Checkbox` - av/på-tilstand (`data-jkl-checked`).
- `Select` - dropdown/valgt-tilstand (`data-jkl-selected`), både på triggerknappen og dropdown-alternativene (`Option`).
- `Search` - tekstfelt: selve søkefeltet (`data-jkl-variant="input"`) og "tøm felt"-knappen (`data-jkl-variant="clear"`) er merket. `autocapture` leser aldri `.value` fra input-elementer, kun de eksplisitt tillagte `data-jkl-*`-attributtene - se ["Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?"](../packages/jokul/TRACKING.md#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet) i TRACKING.md.

Komponenter som støtter `WithTracking` tar også imot en felles `tracking`-prop for egne, teamspesifikke felter som kun sendes til eget prosjekt. Ingen endring i eksisterende oppførsel eller API for øvrig. Se oppdatert komponenttabell i [TRACKING.md](../packages/jokul/TRACKING.md#komponenter-med-sporing).

De resterende 24 komponentene i biblioteket, samt hele tekstfelt-familien, er instrumentert på nøyaktig samme mønster i en egen, oppfølgende PR.
