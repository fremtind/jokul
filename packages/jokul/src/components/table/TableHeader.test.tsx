import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { TableHeader } from "./TableHeader.js";

const renderTableHeader = (props?: React.ComponentProps<typeof TableHeader>) =>
    render(
        <table>
            <thead>
                <tr>
                    <TableHeader {...props}>Status</TableHeader>
                </tr>
            </thead>
        </table>,
    );

describe("TableHeader", () => {
    describe("tracking", () => {
        it("merker sorterbare kolonneknapper som sporbare", () => {
            renderTableHeader({
                sortable: { direction: "asc", onClick: vi.fn() },
            });

            const button = screen
                .getByRole("columnheader")
                .querySelector("button");

            expect(button).toHaveAttribute("data-jkl-tracked", "TableHeader");
            expect(button).toHaveAttribute("data-jkl-selected", "true");
        });

        it("setter ikke data-jkl-selected for inaktiv sortering", () => {
            renderTableHeader({
                sortable: { direction: "none", onClick: vi.fn() },
            });

            const button = screen
                .getByRole("columnheader")
                .querySelector("button");

            expect(button).toHaveAttribute("data-jkl-tracked", "TableHeader");
            expect(button).not.toHaveAttribute("data-jkl-selected");
        });

        it("beholder klikkoppførselen for sorterbare kolonner", () => {
            const onSort = vi.fn();
            renderTableHeader({
                sortable: { direction: "desc", onClick: onSort },
            });

            const button = screen
                .getByRole("columnheader")
                .querySelector("button");
            expect(button).toBeTruthy();

            fireEvent.click(button as HTMLButtonElement);

            expect(onSort).toHaveBeenCalledTimes(1);
        });
    });
});
