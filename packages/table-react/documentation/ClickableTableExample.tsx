import faker from "faker/locale/nb_NO";
import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../src";

function formatDate(date: Date): string {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    return `${day}.${month}.${date.getFullYear()}`;
}

const headings = ["Kravnr", "Kravtype", "Status", "Årsakskode", "Meldt dato", "Avsetning", "Prosesser"];

const rows = Array.from(Array(3)).map(() => ({
    rowData: [
        String(faker.datatype.number()),
        faker.address.stateAbbr(),
        faker.lorem.word(),
        faker.system.semver(),
        formatDate(faker.date.past()),
        faker.finance.amount(),
        faker.lorem.word(),
    ],
}));

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
                        {row.rowData.map((cell, cellIndex) => (
                            <TableCell key={cellIndex} data-th={headings[cellIndex]}>
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
