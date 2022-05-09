# Migrasjonsguide

Fra `jkl-text-input-react@2.x.x` til `jkl-text-input-react@3.x.x`

## Oversikt over endringer

I versjon `3.0.0` av `@forbrukerradet/jkl-text-input-react` har vi endret navn på komponenten til å matche pakkenavnet, og kombinert funksjonaliteten i flere komponenter til én komponent for tekstfelter.

Dette innebærer at komponenten `TextField` endrer navn til `TextInput`. Komponentene `ActionTextField` og `InlineTextInput` eksisterer ikke lenger, og funksjonaliteten deres er tilgjengelig i `TextInput`.

## Fremgangsmåte for å oppgradere komponentene

Vi har beholdt APIet for alle variantene, så det skal i utgangspunktet være nok å bytte ut instanser av `TextField`, `ActionTextField` og `InlineTextField` med `TextInput`, med samme props som før. Instanser av `InlineTextField` må i tillegg ha prop-en `inline` definert.

```jsx
// Før: <TextField label="Navn" />
<TextInput label="Navn" />

// Før:
// <ActionTextField label="Søk" action={{
//     icon: "clear",
//     label: "Nullstill søkefelt",
//     onClick: () => resetValue(),
// }} />
<TextInput label="Søk" action={{
    icon: "clear",
    label: "Nullstill søkefelt",
    onClick: () => resetValue(),
}} />

// Før: <p>Jeg er <InlineTextField label="Alder"> år gammel.</p>
<p>Jeg er <TextField inline label="Alder" /> år gammel.</p>
```

`TextArea` er uendret i bruk.

## Ny funksjonalitet

Vi har lagt inn støtte for referanser med `React.forwardRef` i både `TextInput` og `TextArea`. Det vil si at du kan sende inn et `Ref`-objekt via prop-en `ref`, og gjennom det få tilgang til selve `<input>`-elementet i komponenten. Dette er nyttig f.eks. ved bruk av valideringsbiblioteker.

Siden vi nå har lagt all funksjonalitet inn i én komponent, kan man nå kombinere funksjonalitet på andre måter enn før, for eksempel ha et inline tekstfelt med handling.
