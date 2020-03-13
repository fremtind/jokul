# [`@fremtind/jkl-typography-react`](https://fremtind.github.io/jokul/komponenter/typography)

Denne pakken inneholder komponenter for spesifikke typografiske komponenter, slik som `Label`, `SupportLabel` og `Link`, som brukes av flere av komponentene i Jøkul. Bruk av andre typografiske elementer, som overskrifter og avsnittstiler, se s[iden om typografi](https://fremtind.github.io/jokul/profil/typografi) i portalen.

**NB!** React-komponentene for overskrifter og avsnittstiler i denne pakken er utgående. Se [migrasjonsguiden](https://github.com/fremtind/jokul/blob/master/packages/core/MIGRATION.md#typografielementer) for `jkl-core@3.0.0` for nærmere informasjon.

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/typography).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/komigang/utvikling)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-typography-react` eller `npm i @fremtind/jkl-typography-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer komponenten(e) du trenger i prosjektet ditt. Stilen hentes fra `jkl-core`:

```js
import { Label, SupportLabel, Link } from "@fremtind/jkl-typography-react";
import "@fremtind/jkl-core/core.min.css";
```

### Bruk

#### `Label`

Denne komponenten brukes for å lage etiketter for skjemafelter. Du velger størrelse på labelet ved hjelp av `variant`-prop-en, som kan ha verdiene "small", "medium" og "large". `Label` har to forskjellige typer bruk.

1. Du kan plassere den inne i et `<label>`-element _sammen med_ feltet den skal være etikett for:

```tsx
<label>
    <Label>Fødselsnummer</Label> // returnerer et <span>-element
    <input type="number" name="fnr" value="" />
</label>
```

2. Du kan bruke den frittstående, rendret som et `<label>`-element for et spesifisert skjemaelement:

```tsx
<Label standAlone htmlFor="mitt-skjemafelt">Fornavn</Label>
<input type="text" id="mitt-skjemafelt" name="fornavn" value="" />
```

**NB!** Alle skjemafelter i Jøkul (unntatt `BaseInputField`) bruker allerede `Label`. Du trenger kun denne komponenten om du lager dine egne typer skjemafelter.

#### `SupportLabel`

Denne komponenten brukes for å vise hjelpetekst og feilmelding i tilknytning til et skjemafelt. Begge meldingene tas som props til komponenten, og dersom `errorLabel` er gitt vil _kun_ denne vises.

```tsx
<label>
    <Label>Fødselsnummer</Label> // returnerer et <span>-element
    <input type="number" name="fnr" value="" />
    <SupportLabel helpLabel="Elleve siffer" errorMessage={isInvalid ? "Fødselsnummer må inneholde akkurat elleve siffer" : undefined} />
</label>
```

**NB!** Alle skjemafelter i Jøkul (unntatt `BaseInputField`) bruker allerede `SupportLabel`. Du trenger kun denne komponenten om du lager dine egne typer skjemafelter.

#### Link

Denne komponenten genererer en tekstlenke med riktig formatering. Bruk prop-en `negative` om den skal vises på mørk bakgrunn.

```tsx
<p>Les <Link href="/vilkar">vilkårene</Link> nøye før du signerer</p>

<div className="dark-bg">
    <p>Les <Link negative href="/vilkar">vilkårene</Link> nøye før du signerer</p>
</div>
```
