import { H1 } from "@fremtind/jkl-typography-react";
import React from "react";
import { Example } from "../components";
import { Table } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";

// @ts-ignore
import tableType from "!raw-loader!@fremtind/jkl-table-react/build/Table.d.ts";

const example = `() => {
    const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Sakstype", "Milepæl", "Følger saken"];

    function navigateToGoogle(href) {
        window.location.href = href;
    }

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

    const anchorRows = [
        {
            href: "https://google.com",
            type: "anchor",
            hrefLabel: "Google",
            onClickRow: navigateToGoogle,
            rowData: [
                "24.02.2020",
                "20-1234567",
                "010203 99887",
                "Ola Nordmann",
                "Etterlatte",
                "Opprettet",
                "Siri Saksbehandler",
            ],
        },
        {
            href: "https://google.com",
            type: "anchor",
            hrefLabel: "Google",
            onClickRow: navigateToGoogle,
            rowData: [
                "24.12.2020",
                "20-2028732",
                "010203 99887",
                "Kari Nordkvinne",
                "Etterlatte",
                "Opprettet",
                "Freja Forsikringstaker",
            ],
        },
        {
            href: "https://google.com",
            type: "anchor",
            hrefLabel: "Google",
            onClickRow: navigateToGoogle,
            rowData: [
                "13.04.2019",
                "20-8382811",
                "010203 99887",
                "Kari Nordkvinne",
                "Etterlatte",
                "Opprettet",
                "Siri Saksbehandler",
            ],
        },
        {
            href: "https://google.com",
            type: "anchor",
            hrefLabel: "Google",
            onClickRow: navigateToGoogle,
            rowData: [
                "31.07.2017",
                "20-1111",
                "010203 99887",
                "Kari Nordkvinne",
                "Etterlatte",
                "Opprettet",
                "Per Persen",
            ],
        },
    ];
    return (
        <>
            <H1>Enkel tabell</H1>
            <Table rows={rows} columns={columns} />

            <H1 className="jkl-spacing--top-4">Enkel tabell med lenker</H1>
            <Table rows={anchorRows} columns={columns} />
        </>
    );
};`;

const exampleImport = `import { Table } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";`;

const TableExample = () => (
    <Example exampleComponents={{ Table, H1 }} exampleCode={example} type={tableType} exampleImport={exampleImport} />
);

export default TableExample;
