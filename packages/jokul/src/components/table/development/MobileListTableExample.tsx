import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../index.js";

export const mobileListTableExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const columns = [
    "Dato",
    "Saksnummer",
    "Kundenummer",
    "Kundenavn",
    "Milepæl",
    "Følger saken",
];

const rows = [
    [
        "24.02.2020",
        "20-1234567",
        "010203 99887",
        "Ola Nordmann",
        "Opprettet",
        "Siri Saksbehandler",
    ],
    [
        "13.04.2019",
        "20-8382811",
        "010203 99887",
        "Kari Nordkvinne",
        "Opprettet",
        "Siri Saksbehandler",
    ],
    [
        "31.07.2017",
        "20-1111",
        "010203 99887",
        "Kari Nordkvinne",
        "Opprettet",
        "Per Persen",
    ],
];

const MobileListTableExample: FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true" } : {};
    return (
        <Table
            caption={
                <TableCaption srOnly>
                    Tabell som vises som liste på mobil
                </TableCaption>
            }
            {...props}
            collapseToList
            fullWidth
        >
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
                        {row.map((row, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={columns[cellIndex]}
                                align={
                                    [1, 2].includes(cellIndex)
                                        ? "right"
                                        : "left"
                                }
                            >
                                {row}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default MobileListTableExample;
