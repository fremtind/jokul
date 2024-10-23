import React, { FC } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../index.js";

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const MobileScrollTableExample: FC = () => {
    return (
        <div
            style={{
                maxWidth: "100%",
                overflowX: "scroll",
            }}
        >
            <Table fullWidth>
                <TableCaption srOnly>Tabell som scroller horisontalt på mobil</TableCaption>
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHeader key={index} bold>
                                {column}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    data-th={columns[cellIndex]}
                                    align={[1, 2].includes(cellIndex) ? "right" : "left"}
                                >
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default MobileScrollTableExample;
