import React, { FC, useRef, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TablePagination,
    TableRow,
} from "../src";
import { columns, rows } from "./paginated-table-data";

export const paginatedTableExamplesProps: ExampleKnobsProps = {
    boolProps: ["Med snarvei", "Med custom labels"],
    choiceProps: [],
};

export const PaginatedTableExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const ref = useRef<HTMLTableElement>(null);

    const [activePage, setActivePage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const startIndex = activePage * rowsPerPage;

    const visibleRows = rows.slice(startIndex, startIndex + rowsPerPage);

    return (
        <Table fullWidth ref={ref}>
            <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHeader key={index} bold>
                            {column}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {visibleRows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex} data-th={columns[cellIndex]}>
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>
                        <TablePagination
                            activePage={activePage}
                            totalNumberOfRows={rows.length}
                            rowsPerPage={rowsPerPage}
                            rowsPerPageItems={[10, 25, 50, 100, 150, { label: "Alle", value: -1 }]}
                            onChangeRowsPerPage={(e) => {
                                const newRowsPerPage = Number.parseInt(e.target.value);
                                setRowsPerPage(newRowsPerPage);
                                setActivePage(0); // TODO: beregne oss fram til riktig side?
                                if (ref.current) {
                                    ref.current.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            onChange={(_, toPage) => {
                                setActivePage(toPage);
                                if (ref.current) {
                                    ref.current.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            withGoToPage={
                                boolValues?.["Med snarvei"]
                                    ? boolValues?.["Med custom labels"]
                                        ? { gotoLabel: "Label for hopp til side" }
                                        : true
                                    : false
                            }
                            labels={
                                boolValues?.["Med custom labels"]
                                    ? {
                                          rowsPerPage: "Label for rader per side",
                                          next: "Label for neste side",
                                          previous: "Label for forrige side",
                                      }
                                    : undefined
                            }
                        />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export const paginatedTableExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
const ref = useRef<HTMLTableElement>(null);

const [activePage, setActivePage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(25);
const startIndex = activePage * rowsPerPage;

const visibleRows = rows.slice(startIndex, startIndex + rowsPerPage);

return (
    <Table ref={ref} fullWidth>
        <TableCaption srOnly>Overskrift for skjermlesere</TableCaption>
        <TableHead>
            <TableRow>
                {columns.map((header, index) => (
                    <TableHeader key={index} bold>
                        {header}
                    </TableHeader>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {visibleRows.map((row, rowIndex) => (
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
        <TableFooter>
            <TableRow>
                <TableCell colSpan={5}>
                    <TablePagination
                        activePage={activePage}
                        totalNumberOfRows={rows.length}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageItems={[10, 25, 50, 100, 150, { label: "Alle", value: -1 }]}
                        onChangeRowsPerPage={(e) => {
                            const newRowsPerPage = Number.parseInt(e.target.value);
                            setRowsPerPage(newRowsPerPage);
                            setActivePage(0);
                            if (ref.current) {
                                ref.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }
                        }}
                        onChange={(_, toPage) => {
                            setActivePage(toPage);
                            if (ref.current) {
                                ref.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }
                        }}${
                            boolValues?.["Med snarvei"]
                                ? `
                        withGoToPage`
                                : ""
                        }
                    />
                </TableCell>
            </TableRow>
        </TableFooter>
    </Table>
);
`;
