---
"@fremtind/jokul": minor
---

Nye typografikomponenter `Text` og `Title` under `@fremtind/jokul/typography`. Disse vil gjøre det lettere for teamene å gjennomføre migrasjon til Jøkul 5.0 fordi de abstraherer typografistilene, på samme måte som hjelpeklassene i CSS allerede gjør.

`Text` er polymorf med `as` begrenset til typografisk relevante elementer (`p`, `span`, `label`, `legend`, `small`, `strong`, `em`, `code`, `kbd`, `samp`, `var`), `size` på t-shirt-skala (`xs`, `s`, `m`, `l`) med default `m`, og boolean-toggles `bold`, `short` og `srOnly`. `code`/`kbd`/`samp`/`var` får automatisk Fremtind Grotesk Mono.

`Title` er polymorf med `as` begrenset til `h1`–`h6` pluss skjema-elementene `label` og `legend`, `size` på `xs`, `s`, `m`, `l`, `xl` med default `l`, og `srOnly`-toggle. `as` og `size` er bevisst frakoblet — semantikk styres via `as`, visuell størrelse via `size`.

Nye hjelpeklasser `.jkl-heading-xs` til `.jkl-heading-xl` fra `components/typography` er ekvivalenter til `<Title size="…">` brukt på et vilkårlig element.

Eksisterende `.jkl-title`-utility-klasse er scoped med `:not([data-text-size])` slik at den ikke overstyrer Title-komponenten, men fortsatt fungerer som standalone hjelpeklasse på elementer uten `data-text-size`-attributtet.
