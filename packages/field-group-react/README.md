# [`@fremtind/field-group`](https://fremtind.github.io/jokul/komponenter/fieldgroup)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/fieldgroup).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-komponenten

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-field-group-react` eller `npm i @fremtind/jkl-field-group-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import "@fremtind/jkl-field-group/field-group.min.css";
```

### Bruk

Komponenten legges rundt feltene du ønsker å gruppere, og overskriften i grupperingen angis med `legend`.

```jsx
<FieldGroup legend="Personlig informasjon">
    <TextInput variant="small" label="Fornavn" />
    <TextInput variant="small" label="Etternavn" />
    <TextInput type="number" variant="small" label="Fødselsnummer" />
</FieldGroup>
```

Komponenten tar imot hjelpe- og feilmeldinger gjennom `helpLabel` og `errorLabel`. Dersom `errorLabel` finnes vises _kun_ denne. Du må selv håndtere eventuelle feilmeldinger på feltene inne i gruppen.

```jsx
const hasError = someValidityCheck();

<FieldGroup errorLabel={hasError ? "Rett opp feilen" : undefined} helpLabel="Hjelp til utfylling her">
    {/* ... */}
</FieldGroup>;
```
