---
"@fremtind/jokul": patch
---

Justerer typografiskalaen for `title` og `title-small` slik at de matcher oppdatert heading-skala fra design (#5837).

- `title` bruker nå `--jkl-font-size-8` (tidligere `--jkl-font-size-10`), tilsvarende nivå som `heading-1`.
- `title-small` bruker nå `--jkl-font-size-7` (tidligere `--jkl-font-size-9`), tilsvarende nivå som `heading-2`.

Endrer input-group-description fra `text-medium` til `text-small` for å bedre matche designet. Dette påvirker beskrivelsen under input-felt i skjemakomponenter, og gjør teksten litt mindre for bedre visuell balanse.
