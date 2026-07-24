---
"@fremtind/jokul": major
---

**`Select` — komplett omskriving**

- Ny implementasjon basert på det native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) i stedet for egendefinert listeboks
- Støtter nå `multiple` (multiselect) med checkboxer og bekreft-knapp
- `onChange` / `onBlur` / `onFocus` bruker nå standard DOM-events (`React.ChangeEvent<HTMLSelectElement>`) i stedet for egne typer
- `defaultPrompt` er omdøpt til `placeholder`; ny standardverdi er `"Ingen valgt"`
- `searchable` er forenklet til kun `boolean` — egendefinert søkefunksjon støttes ikke lenger
- `inline` og `maxShownOptions` er fjernet
- Bedre integrasjon med react-hook-form: `register()` fungerer nå uten workarounds

Se egen migrasjonsguide i Select-komponenten for informasjon om hvordan du tar denne i bruk.

**`NativeSelect` — fjernet**

- Komponenten er slettet; bruk den nye `Select` i stedet

**`BETA_Select` — fjernet**

- Erstattet av ny stabil `Select`

**`useListNavigation` — refaktorert**

- Bruker nå `useEffect` i stedet for `useLayoutEffect`; fått støtte for `disableTypeahead`

**`ValuePair` — bakoverkompatibel utvidelse**

- Nytt valgfritt felt `media?: ReactNode`
