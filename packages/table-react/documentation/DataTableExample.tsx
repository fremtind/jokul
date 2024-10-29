import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { DataTable } from "../src";

export const dataTableExampleKnobs: ExampleKnobsProps = {
    boolProps: [],
    choiceProps: [
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const columns = ["Dato", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const DataTableExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const type = choiceValues?.["Mobilvisning"];
    const props =
        type === "Liste"
            ? { "data-collapse": "true", collapseToList: true }
            : {};

    return (
        <DataTable
            caption="Saksliste"
            columns={columns}
            rows={rows}
            {...props}
        />
    );
};

export default DataTableExample;

export const dataTableExampleCode = ({
    choiceValues,
}: ExampleComponentProps): string => `
<DataTable
    caption="Saksliste"
    collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}
    columns={columns}
    rows={rows}
/>
`;
