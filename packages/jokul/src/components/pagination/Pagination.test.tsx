import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Pagination } from "./Pagination.js";

describe("Pagination", () => {
    describe("tracking", () => {
        it("merker sideknappene som sporbare og aktiv side som valgt", () => {
            render(
                <Pagination
                    currentPage={2}
                    numberOfPages={5}
                    onPageChange={() => {}}
                />,
            );

            const activePage = screen.getByRole("button", { name: "side 2" });
            const inactivePage = screen.getByRole("button", { name: "side 1" });

            expect(activePage).toHaveAttribute(
                "data-jkl-tracked",
                "PageButton",
            );
            expect(activePage).toHaveAttribute("data-jkl-selected", "true");
            expect(inactivePage).toHaveAttribute(
                "data-jkl-tracked",
                "PageButton",
            );
            expect(inactivePage).not.toHaveAttribute("data-jkl-selected");
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender } = render(
                <Pagination
                    currentPage={1}
                    numberOfPages={3}
                    onPageChange={() => {}}
                />,
            );

            expect(
                screen.getByRole("button", { name: "side 1" }),
            ).not.toHaveAttribute("data-jkl-tracking");

            rerender(
                <Pagination
                    currentPage={1}
                    numberOfPages={3}
                    onPageChange={() => {}}
                    tracking={{ flow: "checkout" }}
                />,
            );

            expect(
                screen.getByRole("button", { name: "side 1" }),
            ).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ flow: "checkout" }),
            );
        });
    });
});
