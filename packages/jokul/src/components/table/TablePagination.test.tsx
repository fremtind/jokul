import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { TablePagination } from "./TablePagination.js";

const defaultProps = {
    totalNumberOfRows: 50,
    rowsPerPage: 10,
    rowsPerPageItems: [10, 25, 50],
    onChange: vi.fn(),
    onChangeRowsPerPage: vi.fn(),
};

const renderTablePagination = (
    props?: Partial<React.ComponentProps<typeof TablePagination>>,
) => render(<TablePagination {...defaultProps} {...props} />);

describe("TablePagination", () => {
    describe("tracking", () => {
        it("merker forrige, neste og aktive sidetall i den kompakte varianten", () => {
            renderTablePagination({ activePage: 1 });

            expect(
                screen.getByRole("button", { name: "Forrige" }),
            ).toHaveAttribute("data-jkl-variant", "previous");
            expect(
                screen.getByRole("button", { name: "Neste" }),
            ).toHaveAttribute("data-jkl-variant", "next");

            const activePage = screen.getByRole("button", { name: "2" });
            const inactivePage = screen.getByRole("button", { name: "1" });

            expect(activePage).toHaveAttribute(
                "data-jkl-tracked",
                "TablePagination",
            );
            expect(activePage).toHaveAttribute("data-jkl-variant", "page");
            expect(activePage).toHaveAttribute("data-jkl-selected", "true");
            expect(inactivePage).toHaveAttribute(
                "data-jkl-tracked",
                "TablePagination",
            );
            expect(inactivePage).toHaveAttribute("data-jkl-variant", "page");
            expect(inactivePage).not.toHaveAttribute("data-jkl-selected");
        });

        it("merker nummererte sideknapper også når ellipser vises", () => {
            renderTablePagination({
                activePage: 5,
                totalNumberOfRows: 100,
            });

            const activePage = screen.getByRole("button", { name: "6" });
            const firstPage = screen.getByRole("button", { name: "1" });
            const lastPage = screen.getByRole("button", { name: "10" });

            expect(activePage).toHaveAttribute("data-jkl-variant", "page");
            expect(activePage).toHaveAttribute("data-jkl-selected", "true");
            expect(firstPage).toHaveAttribute("data-jkl-variant", "page");
            expect(lastPage).toHaveAttribute("data-jkl-variant", "page");
        });
    });
});
