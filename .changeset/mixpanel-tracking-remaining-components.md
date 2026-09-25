---
"@fremtind/jokul": minor
---

Utvider Mixpanel-sporingen (se `@fremtind/jokul/cookie-consent`) til 24 flere interaktive komponenter, i tillegg til `Button`/`Checkbox`/`Select`/`Search` fra en tidligere PR: `IconButton`, `RadioButton`, `ToggleSwitch`, `Chip`, `Link`, `NavLink`, `SegmentedControlButton`, `Tab`, `Expander`, `PageButton`, `MenuItem`, `MenuItemCheckbox`, `LinkListLink`, `TableOfContentsLink`, `Combobox`, `Autosuggest`, `NumberInput`, `SearchButton`, `DismissButton`, `Card`, `TableHeader`, `TablePagination`, `SmileyQuestion` og `DateInput`. Samme mønster som tidligere: komponentene merker seg selv med `data-jkl-tracked` (og relevante `data-jkl-*`-attributter for tilstand/variant) og tar imot en `tracking`-prop for egne, teamspesifikke felter der komponentens typer tillater det.

I tillegg instrumenteres hele tekstfelt-familien: `TextInput`, `TextArea` og `FileInput` (nye), samt de interne søkefeltene i `Combobox`/`Autosuggest` (`data-jkl-variant="search-input"`) og `DateInput` sitt skrivbare datofelt (`data-jkl-variant="input"`). Ingen av disse sender selve tekst-/fil-innholdet - `autocapture` leser aldri `.value`/`.files` fra input-elementer, kun de eksplisitt tillagte `data-jkl-*`-attributtene (se ["Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?"](../packages/jokul/TRACKING.md#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet) i TRACKING.md). `TextInput` gjør et unntak: `type="password"`-felter merkes bevisst ikke som sporbare, som et ekstra forsvarslag.

Ingen endring i eksisterende oppførsel eller API for øvrig. Se oppdatert komponenttabell i [TRACKING.md](../packages/jokul/TRACKING.md#komponenter-med-sporing).
