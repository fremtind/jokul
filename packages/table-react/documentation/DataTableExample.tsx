import React, { VFC } from "react";
import { DataTable } from "../src";
import { ExampleComponentProps } from "../../../doc-utils";

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const DataTableExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const compact = boolValues?.["Kompakt"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true, compact: true } : {};

    return <DataTable caption="Saksliste" compact={compact} columns={columns} rows={rows} {...props} />;
};

export default DataTableExample;

export const dataTableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<DataTable
    caption="Saksliste"
    compact={${boolValues?.["Kompakt"]}}
    collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}
    columns={columns}
    rows={rows}
/>
`;
