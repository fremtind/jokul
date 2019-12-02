import React from "react";
import { Example } from "../components";
import { Table, TableRowType } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";

import tableType from "!raw-loader!@fremtind/jkl-table-react/build/Table.d.ts";

const example = `() => {
    const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Sakstype", "Milepæl", "Følger saken"];

    const anchorRows = [
        {
            href: "https://google.com",
            type: TableRowType.Anchor,
            hrefLabel: "Google",
            onRowClick: navigateToLink,
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
            type: TableRowType.Anchor,
            hrefLabel: "Google",
            onRowClick: navigateToLink,
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
            type: TableRowType.Anchor,
            hrefLabel: "Google",
            onRowClick: navigateToLink,
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
            type: TableRowType.Anchor,
            hrefLabel: "Google",
            onRowClick: navigateToLink,
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

    function navigateToLink(href) {
        window.location.href = href;
    }

    return <Table rows={anchorRows} columns={columns} />;
};`;

const exampleImport = `import { Table, TableRowType } from "@fremtind/jkl-table-react";
import "@fremtind/jkl-table/table.min.css";`;

export function AnchorTableExample() {
    return (
        <Example
            exampleComponents={{ Table, TableRowType }}
            exampleCode={example}
            type={tableType}
            exampleImport={exampleImport}
        />
    );
}
