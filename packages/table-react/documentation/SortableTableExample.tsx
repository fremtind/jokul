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
    useSortableTableHeader,
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

    const handleSortChange = (sortKey: string, sortDirection: TableSortDirection) => {
        setSortBy(sortKey);
        setDirection(sortDirection);
    };

    const { getSortProps } = useSortableTableHeader(sortBy, direction, handleSortChange);

    return (
        <Table fullWidth {...props}>
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
            <TableHead srOnly={headless}>
                <TableRow>
                    <TableHeader bold {...getSortProps("dato")}>
                        Dato
                    </TableHeader>
                    <TableHeader bold {...getSortProps("sak")}>
                        Saksnummer
                    </TableHeader>
                    <TableHeader bold {...getSortProps("kunde")}>
                        Kundenummer
                    </TableHeader>
                    <TableHeader bold {...getSortProps("navn")}>
                        Kundenavn
                    </TableHeader>
                    <TableHeader bold {...getSortProps("behandler")}>
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
                            const timeA = parseDateString(a[0])?.getTime() ?? 0;
                            const timeB = parseDateString(b[0])?.getTime() ?? 0;

                            if (direction === "asc") {
                                return timeA - timeB;
                            } else {
                                return timeB - timeA;
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

                        if (sorta === sortb) {
                            return 0;
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
