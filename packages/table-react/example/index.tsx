import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-table/table.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Table } from "../src";
import { TableAnchorRowData } from "../src/TableRow";

import "./index.scss";

initTabListener();

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Sakstype", "Milepæl", "Følger saken"];

const rows: Array<string[] | TableAnchorRowData> = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Etterlatte", "Opprettet", "Siri Saksbehandler"],
    {
        href: "https://google.com",
        type: "anchor",
        hrefLabel: "Google",
        rowData: [
            "24.12.2020",
            "20-2028732",
            "010203 99887",
            "Frida Nordkvinne Nordmann",
            "Etterlatte",
            "Opprettet",
            "Freja Forsikringstaker",
        ],
    },
    {
        href: "",
        type: "anchor",
        hrefLabel: "Google",
        rowData: [
            "24.12.2020",
            "20-2028732",
            "010203 99887",
            "Eduardo Nordkvinne Nordmann",
            "Etterlatte",
            "Opprettet",
            "Freja Forsikringstaker",
        ],
        customRowClick: () => alert("Customized on row click"),
    },
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Etterlatte", "Opprettet", "Siri Saksbehandler"],

    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Etterlatte", "Opprettet", "Per Persen"],
];

const TableDemo = () => {
    return (
        <>
            <Table columns={columns} rows={rows} className={"helloworld"} />
        </>
    );
};

ReactDOM.render(<TableDemo />, document.getElementById("app"));
