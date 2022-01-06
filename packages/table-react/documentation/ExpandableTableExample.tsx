import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Table, TableCaption, TableHead, TableRow, TableHeader, TableBody, TableCell } from "../src";
import { ExpandableTableRowCell } from "../src/ExpandableTableRowCell";
import { ExpandableTableRow } from "../src/ExpandableTableRow";

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
                        <ExpandableTableRowCell data-th="Mer informasjon" verticalAlign="center" compact={compact} />
                    </ExpandableTableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ExpandableTableExample;
