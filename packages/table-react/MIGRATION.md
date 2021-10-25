# Migrasjonsguide

## Til `jkl-table-react@4.0.0`

`Table`-komponenten er nå toppnivåkomponenten i det nye flerkomponents-APIet til tabeller.

Du kan fremdeles bruke `DataTable` med `columns` og `rows` om du vil. Merk at vi har fjernet `TableAnchorRowData` og `TableRowType`. Om du trenger en klikkbar rad må du bygge denne
selv med de nye komponentene. Vi har et ferdig eksempel i `documentation/ClickableTableExample.tsx`.

Vi anbefaler at du gir en `caption` til `DataTable`.

```diff
- import { Table } from "@fremtind/jkl-table-react";
+ import { DataTable } from "@fremtind/jkl-table-react";

  const cols = ["Dato", "Saksnummer", "Kundenummer"]
  const rows = [
      ["24.02.2020", "20-1234567", "010203 99887"],
      ["13.04.2019", "20-8382811", "010203 99887"]
  ]

- <Table columns={cols} rows={rows} />
+ <DataTable columns={cols} rows={rows} caption="Saksliste" />
```
