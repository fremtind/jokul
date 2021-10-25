import React, { VFC } from "react";
import { DataTable } from "../src";

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const MobileScrollTableExample: VFC = () => {
    return (
        <div
            style={{
                maxWidth: "100%",
                overflowX: "scroll",
            }}
        >
            <DataTable caption="Tabell som scroller horisontalt på mobil" compact columns={columns} rows={rows} />
        </div>
    );
};

export default MobileScrollTableExample;

export const mobileScrollTableExampleCode = `
    <div
        style={{
            maxWidth: "100%",
            overflowX: "scroll",
        }}
    >
        <DataTable caption="Tabell som scroller horisontalt på mobil" compact columns={columns} rows={rows} />
    </div>
`;
