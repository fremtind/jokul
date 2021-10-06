import React, { VFC } from "react";
import { Table, TableRowType } from "../src";

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Sakstype", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Etterlatte", "Opprettet", "Siri Saksbehandler"],
    {
        href: "https://google.com",
        type: TableRowType.Anchor,
        hrefLabel: "Google",
        rowData: [
            "24.12.2020",
            "20-2028732",
            "010203 99887",
            "Kari Nordkvinne Nordmann",
            "Etterlatte",
            "Opprettet",
            "Freja Forsikringstaker",
        ],
    },
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Etterlatte", "Opprettet", "Siri Saksbehandler"],

    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Etterlatte", "Opprettet", "Per Persen"],
];

const Example: VFC = () => {
    return <Table columns={columns} rows={rows} className={"helloworld"} />;
};

export default Example;
