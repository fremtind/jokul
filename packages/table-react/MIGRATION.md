# Migrasjonsguide

## Til `jkl-table-react@7.0.0`

Feilaktig merket som majorversjon. Ingen breaking change.

## Til `jkl-table-react@6.0.0`

`Table`-komponenten er nå toppnivåkomponenten i det nye flerkomponents-APIet til tabeller.

Du kan fremdeles bruke `DataTable` med `columns` og `rows` om du vil. Merk at vi har fjernet `TableAnchorRowData` og `TableRowType`. Om du trenger en klikkbar rad må du bygge denne
selv med de nye komponentene. Vi har et ferdig eksempel i `documentation/ClickableTableExample.tsx`.

Vi anbefaler at du gir en `caption` til `DataTable`.

```diff
- import { Table } from "@forbrukerradet/jkl-table-react";
+ import { DataTable } from "@forbrukerradet/jkl-table-react";

  const cols = ["Dato", "Saksnummer", "Kundenummer"]
  const rows = [
      ["24.02.2020", "20-1234567", "010203 99887"],
      ["13.04.2019", "20-8382811", "010203 99887"]
  ]

- <Table columns={cols} rows={rows} />
+ <DataTable columns={cols} rows={rows} caption="Saksliste" />
```

## Til `jkl-table-react@5.0.0`

Oppgrader til `@forbrukerradet/jkl-core@^8.0.0`
