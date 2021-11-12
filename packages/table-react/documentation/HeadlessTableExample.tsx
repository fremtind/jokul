import { ExampleComponentProps } from "doc-utils";
import React, { VFC } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../src";

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Milepæl", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Opprettet", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Opprettet", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Opprettet", "Per Persen"],
];

const HeadlessTableExample: VFC<ExampleComponentProps> = ({ choiceValues }) => {
    const type = choiceValues ? choiceValues["Mobilvisning"] : "";
    const props = type === "Liste" ? { "data-collapse": "true", compact: true, collapseToList: true } : {};
    return (
        <Table {...props} fullWidth>
            <TableCaption srOnly>Tabell uten synlig header</TableCaption>
            <TableHead srOnly>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={index}>{column}</TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((row, cellIndex) => (
                            <TableCell key={cellIndex}>{row}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default HeadlessTableExample;

export const headlessTableExampleCode = ({ choiceValues }: ExampleComponentProps): string => `
<Table fullWidth collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Tabell uten synlig header</TableCaption>
    <TableHead srOnly>
        <TableRow>
            {columns.map((column, index) => (
                <TableHeader key={index}>
                    {column}
                </TableHeader>
            ))}
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
                {row.map((row, cellIndex) => (
                    <TableCell key={cellIndex}>{row}</TableCell>
                ))}
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
