# [`@fremtind/jkl-table-react`](https://jokul.fremtind.no/komponenter/table)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/table).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-komponenten

Se gjerne [bloggposten om tabellkomponentene](https://jokul.fremtind.no/blog/tabeller/tabeller-i-2021/)

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-table-react` eller `npm i @fremtind/jkl-table-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

### Datatabeller

```js
import { DataTable } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";

// For ekspanderbare rader må du også ha denne CSSen importert
import "@fremtind/jkl-icons/animated-icons.min.css";
import "@fremtind/jkl-expand-button/expand-button.min.css";
```

Den enkleste tabellen benyttes som en tom komponent, som tar inn kolonner og rader som props. Kolonnene (`columns`) er et array av `string`-verdier, mens radene (`rows`) er et array av `string`-arrayer:

```jsx
const cols = ["Dato", "Saksnummer", "Kundenummer"]
const rows = [
    ["24.02.2020", "20-1234567", "010203 99887"],
    ["13.04.2019", "20-8382811", "010203 99887"]
]

<DataTable columns={cols} rows={rows} caption="Saksliste" />
```

### Større fleksibilitet

Jøkul tilbyr enkeltkomponenter tilsvarende de du kjenner fra HTML. Hvert tabell-element har sin egen Jøkul-motpart du kan ta i bruk:

<table>
    <thead>
        <tr>
            <th>HTML</th>
            <th>Jøkul</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table">
                    <code>&lt;table /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;Table /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead">
                    <code>&lt;thead /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableHead /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody">
                    <code>&lt;tbody /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableBody /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot">
                    <code>&lt;tfoot /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableFooter /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr">
                    <code>&lt;tr /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableRow /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th">
                    <code>&lt;th /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableHeader /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td">
                    <code>&lt;td /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableCell /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption">
                    <code>&lt;caption /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableCaption /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup">
                    <code>&lt;colgroup /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableColumnGroup /&gt;</code>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col">
                    <code>&lt;col /&gt;</code>
                </a>
            </td>
            <td>
                <code>&lt;TableColumn /&gt;</code>
            </td>
        </tr>
    </tbody>
</table>

#### Kompakt

Sett `<Table compact={true}>`, så sørger en intern React context for å sende `compact`-variabelen dit den skal. Du slipper med andre ord sette `<TableCell compact={true}>` og så videre i tillegg. Du kan velge å overstyre dette selv på komponentnivå for å få ønsket størrelse.

#### Klikkbare rader

```jsx
<TableRow clickable={{ onClick, markClickedRows }}>{/* X antall TableCells */}</TableRow>
```

Se for øvrig eksempelet på [Table | Jøkul](https://jokul.fremtind.no/komponenter/table).
