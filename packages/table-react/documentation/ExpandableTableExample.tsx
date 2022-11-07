import { ExampleComponentProps, ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import {
    Table,
    TableCaption,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    ExpandableTableRowController,
    ExpandableTableRow,
} from "../src";

export const expandableTableExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Markér v/ klikk", "Tekst i ekspandérknapp"],
    choiceProps: [
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const headings = ["Kravnr", "Kravtype", "Status", "Årsakskode", "Meldt dato"];

const rows = [
    ["11102", "F", "QA", "3.2.2", "22.11.2021"],
    ["1232", "G", "QA", "3.2.2", "01.12.2021"],
    ["32312", "H", "PR", "2.2.0", "12.11.2021"],
];

const ExpandableTableExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const headless = boolValues?.["Skjul overskrift"];
    const markClickedRows = boolValues?.["Markér v/ klikk"];
    const extraText = boolValues?.["Tekst i ekspandérknapp"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true } : {};

    return (
        <Table fullWidth {...props}>
            <TableCaption srOnly>Tabell med ekspanderbare rader</TableCaption>
            <TableHead srOnly={headless}>
                <TableRow>
                    {headings.map((column) => (
                        <TableHeader key={column} density="compact" bold>
                            {column}
                        </TableHeader>
                    ))}
                    <TableHeader srOnly>Vis mer</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <ExpandableTableRow
                        key={rowIndex}
                        clickable={markClickedRows ? { onClick: (e) => console.log(e), markClickedRows } : undefined}
                        onToggle={(isOpen) => console.log({ isOpen })}
                        expandedChildren={
                            <Table fullWidth>
                                <TableHead srOnly>
                                    <TableRow>
                                        <TableHeader>Cell 1</TableHeader>
                                        <TableHeader>Cell 2</TableHeader>
                                        <TableHeader>Cell 3</TableHeader>
                                        <TableHeader>Cell 4</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Hello, world 1!</TableCell>
                                        <TableCell>Hello, world 2!</TableCell>
                                        <TableCell>Hello, world 3!</TableCell>
                                        <TableCell>Hello, world 4!</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        }
                    >
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={headings[cellIndex]}
                                verticalAlign="center"
                                align={[0, 3, 5, 7].includes(cellIndex) ? "right" : "left"}
                            >
                                {cell}
                            </TableCell>
                        ))}
                        <ExpandableTableRowController data-th="Mer informasjon" verticalAlign="center">
                            {extraText ? "Mer informasjon" : null}
                        </ExpandableTableRowController>
                    </ExpandableTableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ExpandableTableExample;

export const expandableTableExampleCode = ({ choiceValues, boolValues }: ExampleComponentProps): string => `
<Table fullWidth collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Tabell med ekspanderbare rader</TableCaption>
    <TableHead srOnly={headless}>
        <TableRow>
            {headings.map((column) => (
                <TableHeader key={column} density="compact" bold>
                    {column}
                </TableHeader>
            ))}
            <TableHeader srOnly>Vis mer</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <ExpandableTableRow
                key={rowIndex}${
                    boolValues?.["Markér v/ klikk"] || false
                        ? `
                clickable={{ onClick: (e) => console.log(e), markClickedRows }}`
                        : ``
                }
                expandedChildren={
                    <Table fullWidth>
                        <TableBody>
                            <TableRow>
                                <TableCell>Hello, world!</TableCell>
                                <TableCell>Hello, world!</TableCell>
                                <TableCell>Hello, world!</TableCell>
                                <TableCell>Hello, world!</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                }
            >
                {row.map((cell, cellIndex) => (
                    <TableCell
                        key={cellIndex}
                        data-th={headings[cellIndex]}
                        verticalAlign="center"
                        align={[0, 3, 5, 7].includes(cellIndex) ? "right" : "left"}
                    >
                        {cell}
                    </TableCell>
                ))}
                ${
                    boolValues?.["Tekst i ekspandérknapp"]
                        ? '<ExpandableTableRowController data-th="Mer informasjon" verticalAlign="center" />'
                        : '<ExpandableTableRowController data-th="Mer informasjon" verticalAlign="center">Mer informasjon</ExpandableTableRowController>'
                }
            </ExpandableTableRow>
        ))}
    </TableBody>
</Table>
`;
