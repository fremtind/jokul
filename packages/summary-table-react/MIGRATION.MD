## Til `jkl-summary-table-react@6.0.0`

`Summary Table`-komponenten har fått et nytt API som skal gjøre det mer fleksibelt å bruke den.

Følgende props er endret:
- `header` erstatter `columnDescriptions` og genererer en skjult header utifra de oppgitte verdiene.
- `body` erstatter `items` og er tabellens hovedinnhold. Den skal bygges opp med `<SummaryTableRow>`-komponenter.
- `footer` skal bygges opp med `<SummaryTableRow>`-komponenter. 
- `caption` er et nytt felt som beskriver tabellen.

Vi anbefaler at du gir en `caption` til `Summary Table`.

Under viser vi et eksempel på gammel og ny SummaryTable.

```diff

- <SummaryTable
-    columnDescriptions={["Produkt", "Pris"]}
-    items={[
-        { label: "Person", value: "", bold: true },
-        { label: "Barne${SOFT_HYPHEN}forsikring", value: "200 kr/mnd" },
-        { label: "Behandlings${SOFT_HYPHEN}forsikring", value: "200 kr/mnd" },
-        { label: "Skade", value: "", bold: true },
-        { label: "Innboforsikring", value: "100 kr/mnd" },
-        { label: "Reiseforsikring", value: "100 kr/mnd" },
-    ]}
-    footer={{ label: "Total sum", value: "600 kr/mnd" }}
- />
+ <SummaryTable
+     caption="Informasjon om produkter og pris i handlekurven"
+     header={["Produkt", "Pris"]}
+     body={
+         <>
+            <SummaryTableRow header={`Uføre${SOFT_HYPHEN}pensjon`} content="340,00 kr/mnd" />
+            <SummaryTableRow
+                className="summary-table-example__custom-row"
+                header={`Livs${SOFT_HYPHEN}forsikring`}
+                content="Tatt ut av tilbudet"
+            />
+            <SummaryTableRow header={`Innbo${SOFT_HYPHEN}forsikring`} content="122,00 kr/mnd" />
+            <SummaryTableRow header={`Reise${SOFT_HYPHEN}forsikring`} content="249,00 kr/mnd" />
+            <SummaryTableRow className="summary-table-example__custom-row" header="Rabatt" content="- 17,50 kr/mnd" />
+        </>
+     }
+     footer={
+        <>
+            <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />
+            <SummaryTableRow header="" content="8322,50 kr/mnd" />
+        </>
+     }
+ />
```