import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { SecondaryButton } from "../../button/Button.js";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../index.js";

export const actionTableExampleKnobs: ExampleKnobsProps = {
    boolProps: [],
    choiceProps: [
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const headings = [
    "Kravnr",
    "Kravtype",
    "Status",
    "Årsakskode",
    "Meldt dato",
    "Avsetning",
    "Prosesser",
];

const rows = [
    ["11102", "F", "QA", "3.2.2", "22.11.2021", "233", "Ut"],
    ["1232", "G", "QA", "3.2.2", "01.12.2021", "312", "Inn"],
    ["32312", "H", "PR", "2.2.0", "12.11.2021", "1332", "Siden"],
];

const ActionTableExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const headless = boolValues?.["Skjul overskrift"];
    const type = choiceValues?.["Mobilvisning"];
    const props =
        type === "Liste"
            ? { "data-collapse": "true", collapseToList: true }
            : {};

    return (
        <Table
            caption={<TableCaption srOnly>Tabell med handlinger</TableCaption>}
            fullWidth
            {...props}
        >
            <TableHead srOnly={headless}>
                <TableRow>
                    {headings.map((column) => (
                        <TableHeader key={column} bold>
                            {column}
                        </TableHeader>
                    ))}
                    <TableHeader srOnly>Dokument</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={headings[cellIndex]}
                                verticalAlign="center"
                                align={
                                    [0, 3, 5, 7].includes(cellIndex)
                                        ? "right"
                                        : "left"
                                }
                            >
                                {cell}
                            </TableCell>
                        ))}
                        <TableCell
                            align="right"
                            data-th="Dokument"
                            verticalAlign="center"
                        >
                            <SecondaryButton onClick={(e) => console.log(e)}>
                                Åpne
                            </SecondaryButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ActionTableExample;
