import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { parseDateString } from "../../datepicker-react/src";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    type TableSortDirection,
} from "../src";

export const sortableTableExamplesProps: ExampleKnobsProps = {
    boolProps: ["Med snarvei"],
    choiceProps: [],
};

const columns = ["Dato", "Saksnummer", "Kundenummer", "Kundenavn", "Følger saken"];

const rows = [
    ["24.02.2020", "20-1234567", "010203 99887", "Ola Nordmann", "Siri Saksbehandler"],
    ["13.04.2019", "20-8382811", "010203 99887", "Kari Nordkvinne", "Siri Saksbehandler"],
    ["31.07.2017", "20-1111", "010203 99887", "Kari Nordkvinne", "Per Persen"],
];

export const SortableTableExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const headless = boolValues?.["Skjul overskrift"];
    const type = choiceValues?.["Mobilvisning"];
    const props = type === "Liste" ? { "data-collapse": "true", collapseToList: true } : {};

    const [sortBy, setSortBy] = useState("dato");
    const [direction, setDirection] = useState<TableSortDirection>("desc");

    return (
        <Table fullWidth {...props}>
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
            <TableHead srOnly={headless}>
                <TableRow>
                    <TableHeader
                        bold
                        direction={sortBy === "dato" ? direction : undefined}
                        onClick={() => {
                            if (sortBy === "dato") {
                                if (direction === "desc") {
                                    setDirection("asc");
                                } else {
                                    setDirection("desc");
                                }
                            } else {
                                setSortBy("dato");
                                setDirection("desc");
                            }
                        }}
                    >
                        Dato
                    </TableHeader>
                    <TableHeader
                        bold
                        direction={sortBy === "sak" ? direction : undefined}
                        onClick={() => {
                            if (sortBy === "sak") {
                                if (direction === "desc") {
                                    setDirection("asc");
                                } else {
                                    setDirection("desc");
                                }
                            } else {
                                setSortBy("sak");
                                setDirection("desc");
                            }
                        }}
                    >
                        Saksnummer
                    </TableHeader>
                    <TableHeader
                        bold
                        direction={sortBy === "kunde" ? direction : undefined}
                        onClick={() => {
                            if (sortBy === "kunde") {
                                if (direction === "desc") {
                                    setDirection("asc");
                                } else {
                                    setDirection("desc");
                                }
                            } else {
                                setSortBy("kunde");
                                setDirection("desc");
                            }
                        }}
                    >
                        Kundenummer
                    </TableHeader>
                    <TableHeader
                        bold
                        direction={sortBy === "navn" ? direction : undefined}
                        onClick={() => {
                            if (sortBy === "navn") {
                                if (direction === "desc") {
                                    setDirection("asc");
                                } else {
                                    setDirection("desc");
                                }
                            } else {
                                setSortBy("navn");
                                setDirection("desc");
                            }
                        }}
                    >
                        Kundenavn
                    </TableHeader>
                    <TableHeader
                        bold
                        direction={sortBy === "behandler" ? direction : undefined}
                        onClick={() => {
                            if (sortBy === "behandler") {
                                if (direction === "desc") {
                                    setDirection("asc");
                                } else {
                                    setDirection("desc");
                                }
                            } else {
                                setSortBy("behandler");
                                setDirection("desc");
                            }
                        }}
                    >
                        Følger saken
                    </TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                    .sort((a, b) => {
                        let sorta = "";
                        let sortb = "";
                        if (sortBy === "dato") {
                            if (direction === "asc") {
                                return parseDateString(a[0]).getTime() - parseDateString(b[0]).getTime();
                            } else {
                                return parseDateString(b[0]).getTime() - parseDateString(a[0]).getTime();
                            }
                        }
                        if (sortBy === "sak") {
                            sorta = a[1];
                            sortb = b[1];
                        }
                        if (sortBy === "kunde") {
                            sorta = a[2];
                            sortb = b[2];
                        }
                        if (sortBy === "navn") {
                            sorta = a[3];
                            sortb = b[3];
                        }
                        if (sortBy === "behandler") {
                            sorta = a[4];
                            sortb = b[4];
                        }
                        let order = 0;
                        if (sorta === sortb) {
                            return order;
                        }
                        if (sorta > sortb) {
                            if (direction === "desc") {
                                return -1;
                            } else {
                                return 1;
                            }
                        } else {
                            if (direction === "desc") {
                                return 1;
                            } else {
                                return -1;
                            }
                        }
                    })
                    .map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
};

export const sortableTableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<Table fullWidth collapseToList={${choiceValues?.["Mobilvisning"] === "Liste"}}>
    <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
    <TableHead srOnly={${boolValues?.["Skjul overskrift"]}}>
        <TableRow>
            {columns.map((header, index) => ( bold>
                    {header}
                </TableHeader>
            ))}
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <TableCell
                        key={cellIndex}
                        data-th={columns[cellIndex]}
                        align={[1, 2].includes(cellIndex) ? "right" : "left"}
                    >
                        {cell}
                    </TableCell>
                ))}
            </TableRow>
        ))}
    </TableBody>
</Table>
`;
