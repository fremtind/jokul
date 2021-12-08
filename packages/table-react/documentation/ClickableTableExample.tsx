import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../src";

const headings = ["Kravnr", "Kravtype", "Status", "Årsakskode", "Meldt dato", "Avsetning", "Prosesser"];

const rows = [
    ["11102", "F", "QA", "3.2.2", "22.11.2021", "233", "Ut"],
    ["1232", "G", "QA", "3.2.2", "01.12.2021", "312", "Inn"],
    ["32312", "H", "PR", "2.2.0", "12.11.2021", "1332", "Siden"],
];

const ClickableTableExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const compact = boolValues?.["Kompakt"];
    const headless = boolValues?.["Skjul overskrift"];
    const markClickedRows = boolValues?.["Markér v/ klikk"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true, compact: true } : {};

    return (
        <Table compact={compact} fullWidth {...props}>
            <TableCaption srOnly>Tabell med klikkbare rader</TableCaption>
            <TableHead srOnly={headless}>
                <TableRow>
                    {headings.map((column) => (
                        <TableHeader key={column} compact bold>
                            {column}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex} clickable={{ onClick: (e) => console.log(e), markClickedRows }}>
                        {row.map((cell, cellIndex) => (
                            <TableCell
                                key={cellIndex}
                                data-th={headings[cellIndex]}
                                align={[0, 3, 5].includes(cellIndex) ? "right" : "left"}
                            >
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ClickableTableExample;

export const clickableTableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<Table fullWidth compact={${boolValues?.["Kompakt"]}} collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Tabell med klikkbare rader</TableCaption>
    <TableHead srOnly={${boolValues?.["Skjul overskrift"]}}>
        <TableRow>
            {headings.map((column) => (
                <TableHeader key={column} compact bold>{column}</TableHeader>
            ))}
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} clickable={{ onClick, markClickedRows: ${
                boolValues?.["Markér v/ klikk"] || false
            } }}>
                {row.rowData.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} data-th={columns[cellIndex]}>{cell}</TableCell>
                ))}
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
