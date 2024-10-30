# Migrasjonsguide

## Til `jkl-datepicker-react@10.0.0`

Denne versjonen kommer ikke med noen store visuelle endringer eller endringer i interaksjon,
men er et forsøk på å luke ut kjente bugs. For å gjøre det kom vi ikke unna noen breaking changes.

De viktigste endringene i komponenten går på _input_ og _output_.

-   Alle inputs som før tok `Date`-objekter tar nå `string`, siden det underliggende skjemafeltet er et tekstfelt.
-   Eventlyttere (`onChange`, `onBlur` etc.) får nå `Event` som første parameter for å spille bedre på lag med for eksempel React Hook Form. `Date | null` kommer nå som andre parameter, og de får fremdeles `DatePickerMetadata` som tredje

```tsx
const [value, setValue] = useState("");

return (
    <DatePicker
        label="Velg startdato for forsikringen"
        value={value}
        onChange={(e, date, meta) => {
            setValue(e.target.value);
        }}
    />
);
```

### Endring i input

Alle inputs som før tok `Date`-objekter tar nå `string`, siden det underliggende skjemafeltet er et tekstfelt. Formatet på `string` inputs er `dd.mm.yyyy`.

Du kan bruke `formatInput` fra `@fremtind/jkl-datepicker-react` for å få datoer på dette formatet.

Om resten av koden din fungerer best med `Date` så er dette den minimale endringen du trenger å gjøre for å få satt riktig `value`:

```diff
+ import { DatePicker, formatInput } from "@fremtind/jkl-datepicker-react";

  <DatePicker
-    value={value}
+    value={formatInput(value)}
  />
```

### Endring i output

Endringen i rekkefølge på eventlyttere gjør at `register()` fungerer med React Hook Form.

Om resten av koden din fungerer best med `Date` så er dette den minimale endringen du trenger å gjøre i `onChange`:

```diff
  <DatePicker
    value={formatInput(value)}
-   onChange={(date, event, meta) => {
+   onChange={(event, date, meta) => {
      setValue(date);
    }}
  />
```

### Endringer i `onBlur`

Hvis du bruker `onBlur` til å gjøre noe i dag er det endringer som treffer deg.

tl;dr – du må ha `onBlur` to steder – på inputfeltet og på kalenderknappen (`action`) – og bruke `isBlurTargetOutside`:

```tsx
import {
    DatePicker,
    isBlurTargetOutside,
} from "@fremtind/jkl-datepicker-react";

<DatePicker
    label="Velg startdato for forsikringen"
    value={value}
    onBlur={(e, date, meta) => {
        if (isBlurTargetOutside(e)) {
            // Brukeren har forlatt DatePicker. Gjør noe her.
        } else {
            // Ignorer blurs som går til kalenderknapper
        }
    }}
    action={{
        onBlur: (e) => {
            if (isBlurTargetOutside(e)) {
                // Brukeren har forlatt DatePicker. Gjør noe her.
            } else {
                // Ignorer blurs som går tilbake til inputfeltet
            }
        },
    }}
/>;
```

#### OK, men hvorfor?

`blur` er et global event som skjer hver gang et fokuserbart element _mister_ fokus. `DatePicker` består av flere fokuserbare elementer.

De to viktigste fokuserbare elementene i `DatePicker` er _inputfeltet_ og _kalenderknappen_. Hvis en tastaturbruker trykker `Tab` gjennom en `DatePicker` vil det alltid skje to `blur`-events i nettleseren:

-   `onBlur` på inputfeltet, fokus flytter seg til kalenderknappen
-   `onBlur` på kalenderknappen, fokus har forlatt `DatePicker`

Men, en bruker kan åpne kalenderen. Da vil `onBlur` skje på kalenderknappen, men fokus er fortsatt i `DatePicker` – fokuset er flyttet til kalenderen. Derfor har vi laget en utility-funksjon `isBlurTargetOutside` som sjekker i `blur`-eventet hvor fokus har havnet. Om vi ser at det er på et element i `DatePicker` så svarer den `false`.

`DatePicker` er kodet sånn at fokus alltid flyttes tilbake til enten inputfeltet eller kalenderknappen etter at kalenderen har vært aktiv. På den måten får vi alltid minst ett `blur`-event hvis brukeren har vært innom `DatePicker`.

Grunnen til at vi ikke ønsker å samle disse to handlerene under samme `onBlur` er at det er uventet for de fleste å motta to `onBlur`-events i den samme handleren, fra ulike kilder.

### Andre breaking changes

-   `disableBeforeDate` og `disableAfterDate` tar en string i samme format som `value`
-   `variant` som var merket `@deprecated` er nå flyttet til `labelProps`, for eksempel `labelProps={{ variant }}`
-   `calendarButtonTitle` som var merket `@deprecated` er fjernet. Bruk `showCalendarLabel` og `hideCalendarLabel` om du vil overstyre standardtekster.
-   Ikke breaking ennå, men propen `onKeyDown` er merket `@deprecated` fordi `onChange` nå kalles hver gang inputfeltet endres.
