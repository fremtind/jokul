import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { SecondaryButton } from "../../button-react/src";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../src";

export const actionTableExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Compact"],
    choiceProps: [
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const headings = ["Kravnr", "Kravtype", "Status", "Årsakskode", "Meldt dato", "Avsetning", "Prosesser"];

const rows = [
    ["11102", "F", "QA", "3.2.2", "22.11.2021", "233", "Ut"],
    ["1232", "G", "QA", "3.2.2", "01.12.2021", "312", "Inn"],
    ["32312", "H", "PR", "2.2.0", "12.11.2021", "1332", "Siden"],
];

const ActionTableExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const compact = boolValues?.["Compact"];
    const headless = boolValues?.["Skjul overskrift"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true, compact: true } : {};

    return (
        <Table compact={compact} fullWidth {...props}>
            <TableCaption srOnly>Tabell med handlinger</TableCaption>
            <TableHead srOnly={headless}>
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
                        <TableCell align="right" data-th="Dokument" verticalAlign="center">
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

export const actionTableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<Table fullWidth compact={${boolValues?.["Compact"]}} collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Tabell med handlinger</TableCaption>
    <TableHead srOnly={${boolValues?.["Skjul overskrift"]}}>
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
                    <TableCell
                        key={cellIndex}
                        data-th={headings[cellIndex]}
                        verticalAlign="center"
                        align={[0, 3, 5, 7].includes(cellIndex) ? "right" : "left"}
                    >
                        {cell}
                    </TableCell>
                ))}
                <TableCell align="right" data-th="Dokument" verticalAlign="center">
                    <SecondaryButton onClick={onClick} forceCompact={compact}>
                        Åpne
                    </SecondaryButton>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
