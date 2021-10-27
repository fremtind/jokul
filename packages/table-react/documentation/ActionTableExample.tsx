import faker from "faker/locale/nb_NO";
import { SecondaryButton } from "../../button-react/src";
import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../src";

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

const ActionTableExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const compact = boolValues && boolValues["Kompakt"];
    const type = choiceValues ? choiceValues["Mobilvisning"] : "";
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true, compact: true } : {};

    return (
        <Table compact={compact} fullWidth {...props}>
            <TableCaption srOnly>Tabell med handlinger</TableCaption>
            <TableHead>
                <TableRow>
                    {headings.map((column) => (
                        <TableHeader key={column} compact bold>
                            {column}
                        </TableHeader>
                    ))}
                    <TableHeader srOnly>Dokument</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.rowData.map((cell, cellIndex) => (
                            <TableCell key={cellIndex} data-th={headings[cellIndex]}>
                                {cell}
                            </TableCell>
                        ))}
                        <TableCell align="right" data-th="Dokument">
                            <SecondaryButton onClick={(e) => console.log(e)} forceCompact={compact || props.compact}>
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

export const actionTableExampleCode = `
<Table compact={compact} fullWidth={true}>
    <TableCaption srOnly>Tabell med handlinger</TableCaption>
    <TableHead>
        <TableRow>
            {headings.map((column) => (
                <TableHeader key={column} compact bold>
                    {column}
                </TableHeader>
            ))}
            <TableHeader srOnly>Dokument</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
                {row.rowData.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
                <TableCell align="right">
                    <SecondaryButton onClick={onClick} forceCompact={compact}>
                        Åpne
                    </SecondaryButton>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
