import React from "react";
import { Example } from "../components";
import { Table } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";

// @ts-ignore
import tableType from "!raw-loader!@fremtind/jkl-table-react/build/Table.d.ts";

const example = `() => {
    const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Sakstype", "Milepæl", "Følger saken"];
    const rows = [
        ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Etterlatte", "Opprettet", "Siri Saksbehandler"],
        [
            "24.12.2020",
            "20-2028732",
            "010203 99887",
            "Kari Nordkvinne",
            "Etterlatte",
            "Opprettet",
            "Freja Forsikringstaker",
        ],
        [
            "13.04.2019",
            "20-8382811",
            "010203 99887",
            "Kari Nordkvinne",
            "Etterlatte",
            "Opprettet",
            "Siri Saksbehandler",
        ],
        ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Etterlatte", "Opprettet", "Per Persen"],
    ];

    return <Table rows={rows} columns={columns} />;
};`;

const exampleImport = `import { Table } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";`;

const TableExample = () => (
    <Example exampleComponents={{ Table }} exampleCode={example} type={tableType} exampleImport={exampleImport} />
);

export default TableExample;
