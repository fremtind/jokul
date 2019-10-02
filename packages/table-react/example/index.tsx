import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-table/table.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Table } from "../src";
import { TableRowAccordionData, TableRowAnchorData } from "../src/Table";

import "./index.scss";

initTabListener();

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Sakstype", "Milepæl", "Følger saken"];

const rows: Array<string[] | TableRowAnchorData | TableRowAccordionData> = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Etterlatte", "Opprettet", "Siri Saksbehandler"],
    {
        href: "https://google.com",
        type: "anchor",
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

    {
        type: "accordion",
        rowData: ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7"],
        defaultOpen: false,
        elementLabel: "Expand", // Hva er typisk verdien til en elementLabel?
        children: [
            <div key={1}>
                <h4>Test</h4>
                <span>Expand1 expand1 expand1 expand1 expand1 expand1 expand1</span>
            </div>,
            <div key={2}>
                <h4>Test</h4>
                <span>Expand2</span>
            </div>,
            <div key={3}>
                <h4>Test</h4>
                <span>Expand3</span>
            </div>,
            <div key={4}>
                <h4>Test</h4>
                <span>Expand4</span>
            </div>,
            <div key={5}>
                <h4>Test</h4>
                <span>Expand5</span>
            </div>,
            <div key={6}>
                <h4>Test</h4>
                <span>Expand6</span>
            </div>,
            <div key={7}>
                <h4>Test</h4>
                <span>Expand7</span>
            </div>,
        ],
    },

    {
        type: "accordion",
        rowData: ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7"],
        defaultOpen: false,
        elementLabel: "Expand", // Hva er typisk verdien til en elementLabel?
        children: [
            <div key={1}>
                <h4>Test</h4>
                <span>Expand1 expand1 expand1 expand1 expand1 expand1 expand1</span>
            </div>,
            <div key={2}>
                <h4>Test</h4>
                <span>Expand2</span>
            </div>,
            <div key={3}>
                <h4>Test</h4>
                <span>Expand3</span>
            </div>,
            <div key={4}>
                <h4>Test</h4>
                <span>Expand4</span>
            </div>,
            <div key={5}>
                <h4>Test</h4>
                <span>Expand5</span>
            </div>,
            <div key={6}>
                <h4>Test</h4>
                <span>Expand6</span>
            </div>,
            <div key={7}>
                <h4>Test</h4>
                <span>Expand7</span>
            </div>,
        ],
    },

    {
        type: "accordion",
        rowData: ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7"],
        defaultOpen: false,
        elementLabel: "Expand", // Hva er typisk verdien til en elementLabel?
        children: [
            <div key={1}>
                <h4>Test</h4>
                <span>Expand1 expand1 expand1 expand1 expand1 expand1 expand1</span>
            </div>,
            <div key={2}>
                <h4>Test</h4>
                <span>Expand2</span>
            </div>,
            <div key={3}>
                <h4>Test</h4>
                <span>Expand3</span>
            </div>,
            <div key={4}>
                <h4>Test</h4>
                <span>Expand4</span>
            </div>,
            <div key={5}>
                <h4>Test</h4>
                <span>Expand5</span>
            </div>,
            <div key={6}>
                <h4>Test</h4>
                <span>Expand6</span>
            </div>,
            <div key={7}>
                <h4>Test</h4>
                <span>Expand7</span>
            </div>,
        ],
    },

    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Etterlatte", "Opprettet", "Per Persen"],
];

const TableDemo = () => {
    return (
        <>
            <Table columns={columns} rows={rows} accordion={true} />
        </>
    );
};

ReactDOM.render(<TableDemo />, document.getElementById("app"));
