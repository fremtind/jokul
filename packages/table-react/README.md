# [`@fremtind/jkl-table-react`](https://jokul.fremtind.no/komponenter/table)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/table).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-komponenten

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-table-react` eller `npm i @fremtind/jkl-table-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Table } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";
```

Tabellen benyttes som en tom komponent, som tar inn kolonner og rader som props. Kolonnene (`columns`) er et array av `string`-verdier, mens radene (`rows`) er et array av `string`-arrayer og/eller `TableAnchorRowData`-verdier (se under):

```jsx
const cols = ["Dato", "Saksnummer", "Kundenummer"]
const rows = [
    ["24.02.2020", "20-1234567", "010203 99887"],
    ["13.04.2019", "20-8382811", "010203 99887"]
]

<Table columns={cols} rows={rows} />
```

En eller flere av radene i tabellen kan være klikkbare, med en `href` og en valgfri `onRowClick`-funksjon. Om ingen funksjon er gitt, vil klikk på raden gå til URLen i `href`-verdien. Typen for `AnchorRowData` er tilgjengelig gjennom `enum`en `TableRowType`, som kan importeres med `import { TableRowType } from "@fremtind/jkl-table-react;"`.

```ts
interface TableAnchorRowData {
    rowData: string[];
    type: TableRowType.Anchor;
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
}
```

Du kan blande vanlige og klikkbare rader i en tabell:

```jsx
const cols = ["Avtalenavn", "Pris pr. år"];
const rows = [
    ["Innbo", "kr 1 997"],
    {
        rowData: ["Bil Kasko", "kr 7 021"],
        type: TableRowType.Anchor,
        href: `/avtaledetaljer/${avtaleId}`,
        hrefLabel: `Se detaljer om avtale ${avtaleId}`,
    },
];

<Table columns={cols} rows={rows} />;
```
