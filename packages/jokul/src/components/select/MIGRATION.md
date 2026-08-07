🔴 Breaking changes

#### `Select` — komplett redesign av API

Den egendefinerte listeboks-implementasjonen er erstattet med en ny løsning basert på det native HTML [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). Dette medfører en rekke breaking changes:

| Fjernet eller endret prop       | Kommentar                                                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onChange`, `onBlur`, `onFocus` | Hadde egne typer (`SelectChangeEventHandler` / `SelectPartialChangeEvent`). Nå brukes standard DOM-events via `ComponentPropsWithoutRef<"select">`. |
| `name` (var påkrevd)            | Nå valgfri, arves fra native `<select>`-props.                                                                                                      |
| `defaultPrompt`                 | Erstattet av `placeholder` (som allerede fantes i `NativeSelect`).                                                                                  |
| `maxShownOptions`               | Fantes ikke i `NativeSelect`. Forsvinner uten direkte erstatning.                                                                                   |
| `inline`                        | Fjernet fra `Select` (var støttet tidligere).                                                                                                       |
| `searchable` som funksjon       | `searchable` er nå kun `boolean`. Egendefinert søkefunksjon støttes ikke lenger.                                                                    |     |
| `invalid`                       | Ikke en egen prop i ny `Select`. Feilmelding signaliseres via `errorLabel` (arvet fra `InputGroupProps`).                                           |

Typer som er fjernet fra eksporten:

- `SelectChangeEventHandler`
- `SelectPartialChangeEvent`
- `NativeSelectProps`

#### `NativeSelect` — fjernet

Komponenten er slettet helt og eksporteres ikke lenger. Brukere som bruker `NativeSelect` må migrere til den nye `Select`.

#### `BETA_Select` / `BETA_SelectProps` — fjernet

Erstattet av ny `Select`.

---

### 🟡 Endringer med migrasjonsbehov

#### Ny prop: `multiple`

`Select` støtter nå `multiple` (multiselect) via en enkelt prop. Dropdown-en viser da checkboxer og en «Bekreft»-knapp for å lukke panelet.

#### `placeholder` endret oppførsel

Ny standardverdi er `"Ingen valgt"` (tidligere `"Velg"` i `defaultPrompt`). For `multiple=true` vises aldri placeholder som deaktivert `<option>`.

#### `searchable` endret

Kun `boolean` — egendefinert søkefunksjon (`(searchValue, item) => boolean`) sendes i stedet inn med `filterFunction`.

#### Ny prop: `onSearch`

Funksjon som lytter på endringer i søkefeltet (hvis `searchable` er satt). Får inn verdien til søkefeltet.

---

### 🟢 Internt / lite merkbart for brukere

- **`ValuePair`** har fått nytt felt `media?: ReactNode` — bakoverkompatibelt.
- **`useListNavigation`** er refaktorert med `useEffect` i stedet for `useLayoutEffect`, og har fått `disableTypeahead`-støtte. Dette er en intern hook, men er eksponert i pakken, så endringen kan berøre de som bruker den direkte.
- **`Search`** har fått en intern refaktor (`handleClick` → `clearInput` + `useCallback`, `value`-prop destructures ikke lenger). Liten risiko for brukere, men `value`-prop vil nå sendes gjennom `...rest` i stedet for å håndteres eksplisitt.

---

### Oppsummert

Det største migrasjonsarbeidet ligger i:

1. **Alle som bruker `NativeSelect`** → må byttes ut.
2. **Alle som bruker `Select` med `onChange`/`onBlur`/`onFocus`** (særlig via react-hook-form med `SelectChangeEventHandler`) → må oppdatere til standard `<select>`-events.
3. **Alle som bruker `defaultPrompt`** → rename til `placeholder`.
4. **Alle som bruker `searchable` som funksjon** → må finne alternativ løsning.

## react-hook-form og nye `Select`

### Den gamle implementasjonen

Den gamle `Select` hadde en egendefinert custom event-mekanisme. Valg i listboxen trigget `onChange` via en intern `useEffect` som konstruerte et falskt event-objekt:

```ts
onChange({
    type: "change",
    target: { name, value: selectedValue },
});
```

Dette var ikke et ekte DOM-event, og react-hook-form (spesielt etter v7.41.1) hadde problemer med å oppdage verdien. Løsningen var en rotete to-trinns prosess: sett state → vent på neste render → dispatch `change` på det skjulte `<select>`-elementet. Koden hadde til og med en kommentar om dette:

_«La komponenten rendre `<select>` med den valgte verdien før `onChange` trigges, slik at react-hook-form@>7.41.1 behandler feltet som at det har en verdi.»_

Det var også nødvendig å sende `name` som påkrevd prop, fordi react-hook-form brukte `event.target.name` for å matche feltet.

### Den nye implementasjonen

Den nye `Select` er bygget rundt et _ekte_ `<select>`-element. Når brukeren klikker en option i popoveren, oppdateres det native `<select>`-elementet og et ekte `change`-event dispatches:

```ts
selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
```

Dette er et ekte DOM-event med `bubbles: true`, som react-hook-form plukker opp akkurat som med et vanlig `<input>`. Det betyr:

- **`name` trenger ikke lenger å settes eksplisitt** som påkrevd prop — det settes bare som et vanlig HTML-attributt via `...elementProps`.
- **`register()` fra react-hook-form fungerer direkte** uten noen spesialtilpasning, siden `ref`-forwarding mot `<select>` nå er rent.
- **`Controller`-wrapperen** vil også fungere bedre siden `onChange` nå er standard `React.ChangeEvent<HTMLSelectElement>`.

### Hva som faktisk endres for brukere med react-hook-form

|                          | Før                                 | Etter                                           |
| ------------------------ | ----------------------------------- | ----------------------------------------------- |
| `onChange`-type          | `SelectChangeEventHandler` (custom) | Standard `React.ChangeEvent<HTMLSelectElement>` |
| `name`-prop              | Påkrevd                             | Valgfri (vanlig HTML-attributt)                 |
| `register()`-integrasjon | Krevde workarounds / kjente bugs    | Fungerer som vanlig `<select>`                  |
| `Controller`-integrasjon | Krevde type-casting av event        | Standard                                        |

### Migrasjonskonsekvens

Det som _ser ut som_ en breaking change (endring av `onChange`-signatur) er i praksis en forenkling. Kode som så slik ut:

```tsx
// Før
<Select name="land" onChange={(e) => setValue("land", e.target.value)} />
```

Vil nå fungere identisk, men med korrekt typing. Kode som brukte `SelectChangeEventHandler` som eksplisitt type vil imidlertid få kompileringsfeil og må oppdateres til `React.ChangeEventHandler<HTMLSelectElement>`.
