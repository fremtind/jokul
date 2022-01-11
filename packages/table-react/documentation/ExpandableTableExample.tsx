import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Table, TableCaption, TableHead, TableRow, TableHeader, TableBody, TableCell } from "../src";
import { ExpandableTableRowController, ExpandableTableRow } from "../src/";

const headings = ["Kravnr", "Kravtype", "Status", "Årsakskode", "Meldt dato"];

const rows = [
    ["11102", "F", "QA", "3.2.2", "22.11.2021"],
    ["1232", "G", "QA", "3.2.2", "01.12.2021"],
    ["32312", "H", "PR", "2.2.0", "12.11.2021"],
];

const ExpandableTableExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const compact = boolValues?.["Kompakt"];
    const headless = boolValues?.["Skjul overskrift"];
    const clickable = boolValues?.["Klikkbar"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true, compact: true } : {};

    return (
        <Table compact={compact} fullWidth {...props}>
            <TableCaption srOnly>Tabell med ekspanderbare rader</TableCaption>
            <TableHead srOnly={headless}>
                <TableRow>
                    {headings.map((column) => (
                        <TableHeader key={column} compact bold>
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
                        clickable={clickable ? { onClick: (e) => console.log(e) } : undefined}
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
                        <ExpandableTableRowController
                            data-th="Mer informasjon"
                            verticalAlign="center"
                            compact={compact}
                        />
                    </ExpandableTableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ExpandableTableExample;

export const expandableTableExampleCode = ({ choiceValues }: ExampleComponentProps): string => `
<Table fullWidth collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Tabell med ekspanderbare rader</TableCaption>
    <TableHead srOnly={headless}>
        <TableRow>
            {headings.map((column) => (
                <TableHeader key={column} compact bold>
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
                <ExpandableTableRowController data-th="Mer informasjon" verticalAlign="center" />
            </ExpandableTableRow>
        ))}
    </TableBody>
</Table>
`;
