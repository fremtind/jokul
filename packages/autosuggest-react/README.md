# [`@fremtind/jkl-autosuggest-react`](https://fremtind.github.io/jokul/components/autosuggest/)

## Beskrivelse

En søkbar dropdown som filtrerer forslag etterhvert som brukeren fyller inn i input feltet. 

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

```
const proffessions = [
    "3D Designer",
    "Abonnementselger",
    "Bussjåfør",
    "Cafemedarbeider",
];

<Autosuggest
    label="Velg yrke"
    allItems={proffessions}
    onChange={(selected: string | null) =>
        selected ? console.log(`Selected: ${selected}`) : console.log("Input cleared")
    }
/>;
```

Hvis du ønsker å lage din egen label må du sende inn:
* `labelId` id for labelen du selv lager.
* `inputId` id du ønsker på input feltet som rendres av `Autosuggest`.
```
<label id="custom-label" htmlFor="autosuggest-input">
    Velg yrke
</label>
<Autosuggest
    labelId="custom-label"
    inputId="autosugget-input"
    allItems={proffessions}
    onChange={(selected: string | null) =>
        selected ? console.log(`Selected: ${selected}`) : console.log("Input cleared")
    }
/>;
```

Du kan også sende inn en liste med objekter i `allItems`.
Da må man i tillegg sende med:
* `itemToString` En funksjon som oversettet objektet til teksten som skal vises i dropdown.
* `keys` En liste med nøkler som brukes for å rangere hvilke felter i objektet man skal bruke ved filtrering.
```
interface Country {
    id: number;
    country: string;
    continent: string;
}

const items: Country[] = [
    { id: 1, country: "Albania", continent:'Europe' },
    { id: 2, country: "Austria", continent: 'Europe' },
    { id: 3, country: "Angola", continent: 'Africa' },
    { id: 4, country: "Algeria", continent: 'Africa' },
    { id: 5, country: "Argentina", continent: 'South America' },
];

/* 
Vil først prøve å matche input verdien med country propertien.
Deretter vil den prøve å matche input verdien med continent propertien.
*/
const keys = ["country", "continent"];

const ObjectsAutosuggest = () => (
    <Autosuggest
        allItems={items}
        label="Velg land"
        placeholder="Søk etter land"
        keys={keys}
        itemToString={(item: Country | null) => item ? item.country : ''}
        onChange={(item: Country | null) => item ? console.log("Item selected:", item) : console.log("Input cleared")}
    />
);
```

Det er også noen valgfrie props:
* `isInvalid` Boolean som indikerer at input er ugyldig.
* `errorText` Feilmelding vises dersom `isInvalid` er satt til true.
* `placeholder` Placeholder som vises i input felt.
* `noHitsMessage` React node som vises ved null treff.
* `maxNumberOfHits` Begrenser antall synlige treff.
* `onInputChange` Callback som kalles hver gang brukeren skriver no i input feltet. 

---

Med `Autosuggest` kan man kun velge en av verdiene i listen du sender inn.
Hvis du ønsker at brukeren skal kunne velge en av verdiene i listen **eller** det brukeren taster inn kan du bruke
`AutosuggestTypeahed`. Da må `allItems` være en string array og `onChange` vil kalles hver gang brukeren skriver i 
input feltet.