import { act, render, RenderOptions } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React, { useState } from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import {
    ExpandableTableRow,
    ExpandableTableRowController,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./index.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

const TableUnderTest = () => (
    <Table
        caption={
            <TableCaption srOnly>Tabell med ekspanderbare rader</TableCaption>
        }
        fullWidth
    >
        <TableHead>
            <TableRow>
                <TableHeader>Header 1</TableHeader>
                <TableHeader>Header 2</TableHeader>
                <TableHeader>Header 3</TableHeader>
                <TableHeader>Header 4</TableHeader>
                <TableHeader srOnly>Vis mer</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            <ExpandableTableRow
                expandedChildren={
                    <Table
                        caption={
                            <TableCaption srOnly>
                                Tabell med ekspanderbare rader
                            </TableCaption>
                        }
                        fullWidth
                    >
                        <TableHead srOnly>
                            <TableRow>
                                <TableHeader>Ekspandert 1</TableHeader>
                                <TableHeader>Ekspandert 2</TableHeader>
                                <TableHeader>Ekspandert 3</TableHeader>
                                <TableHeader>Ekspandert 4</TableHeader>
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
                <TableCell data-th="Header 1">Celle 1</TableCell>
                <TableCell data-th="Header 2">Celle 2</TableCell>
                <TableCell data-th="Header 3">Celle 3</TableCell>
                <TableCell data-th="Header 4">Celle 4</TableCell>
                <ExpandableTableRowController data-th="Mer informasjon" />
            </ExpandableTableRow>
        </TableBody>
    </Table>
);

describe("ExpandableTableRow", () => {
    it("should render", () => {
        const { getAllByTestId } = setup(<TableUnderTest />);

        const rows = getAllByTestId("jkl-clickable-table-row");
        expect(rows).toHaveLength(1);
    });

    it("should expand when clicked", async () => {
        const { getByTestId, getAllByRole, user } = setup(<TableUnderTest />);

        let tableRows = getAllByRole("row");
        expect(tableRows).toHaveLength(2); // 1 header row + 1 data row

        await act(async () => {
            await user.click(getByTestId("jkl-clickable-table-row"));
        });

        tableRows = getAllByRole("row");
        expect(tableRows).toHaveLength(5); // to tabeller med hver sin synlige header og data row, og visuelt usynlig tr som ekspanderes
    });

    it("should expand when passed isOpen prop", async () => {
        const ControlledTable = () => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <>
                    <button
                        data-testid="controller"
                        onClick={() => setIsOpen((value) => !value)}
                    >
                        Toggle
                    </button>
                    <Table
                        caption={
                            <TableCaption srOnly>
                                Tabell med ekspanderbare rader
                            </TableCaption>
                        }
                        fullWidth
                    >
                        <TableHead>
                            <TableRow>
                                <TableHeader>Header 1</TableHeader>
                                <TableHeader>Header 2</TableHeader>
                                <TableHeader>Header 3</TableHeader>
                                <TableHeader>Header 4</TableHeader>
                                <TableHeader srOnly>Vis mer</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <ExpandableTableRow
                                isOpen={isOpen}
                                expandedChildren={
                                    <Table
                                        caption={
                                            <TableCaption srOnly>
                                                Tabell med ekspanderbare rader
                                            </TableCaption>
                                        }
                                        fullWidth
                                    >
                                        <TableHead srOnly>
                                            <TableRow>
                                                <TableHeader>
                                                    Ekspandert 1
                                                </TableHeader>
                                                <TableHeader>
                                                    Ekspandert 2
                                                </TableHeader>
                                                <TableHeader>
                                                    Ekspandert 3
                                                </TableHeader>
                                                <TableHeader>
                                                    Ekspandert 4
                                                </TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    Hello, world 1!
                                                </TableCell>
                                                <TableCell>
                                                    Hello, world 2!
                                                </TableCell>
                                                <TableCell>
                                                    Hello, world 3!
                                                </TableCell>
                                                <TableCell>
                                                    Hello, world 4!
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                }
                            >
                                <TableCell data-th="Header 1">
                                    Celle 1
                                </TableCell>
                                <TableCell data-th="Header 2">
                                    Celle 2
                                </TableCell>
                                <TableCell data-th="Header 3">
                                    Celle 3
                                </TableCell>
                                <TableCell data-th="Header 4">
                                    Celle 4
                                </TableCell>
                                <ExpandableTableRowController data-th="Mer informasjon" />
                            </ExpandableTableRow>
                        </TableBody>
                    </Table>
                </>
            );
        };

        const { getByTestId, getAllByRole, user } = setup(<ControlledTable />);
        let tableRows = getAllByRole("row");
        expect(tableRows).toHaveLength(2); // 1 header row + 1 data row

        await act(async () => {
            await user.click(getByTestId("controller"));
        });
        tableRows = getAllByRole("row");
        expect(tableRows).toHaveLength(5); // to tabeller med hver sin synlige header og data row, og visuelt usynlig tr som ekspanderes

        await act(async () => {
            await user.click(getByTestId("controller"));
        });
        tableRows = getAllByRole("row");
        expect(tableRows).toHaveLength(2); // 1 header row + 1 data row
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = setup(<TableUnderTest />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
