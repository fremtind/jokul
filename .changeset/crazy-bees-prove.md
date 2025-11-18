---
"@fremtind/jokul": minor
"portal": patch
---

Legg til en `Search`-komponent. Før har man måttet bruke en kombinasjon av props på `TextInput` for å få den til å se ut som et søkefelt. Med denne komponenten slipper du det, og den blir semantisk riktigere.

I tillegg følger det med:

- en `Search.Button`, som er en egen knapp tiltenkt kun søkefeltet.
- en knapp som enkelt tømmer søkefeltet.

Du kan bruke komponenten enten med eller uten et `form`-element, avhengig av behov. Husk at dersom du wrapper søkefeltet i et skjema kan du også sette `type="submit"` på `Search.Button` for å håndtere søking (uten et tredjepartsbibliotek).

**OBS**: `Search` bruker `InputGroup`, og støtter derfor alle props som også finnes i den. Vær oppmerksom på at `label` er skjult by default. Dette kan du endre med `labelProps`-propen.
