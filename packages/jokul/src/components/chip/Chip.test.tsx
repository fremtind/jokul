import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Chip } from "./Chip.js";

describe("Chip-komponenten", () => {
    it("rendrer input-varianten riktig", () => {
        render(<Chip variant="input">Input Chip</Chip>);
        expect(screen.getByText("Input Chip")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveClass("jkl-chip--input");
    });

    it("rendrer filter-varianten riktig", () => {
        render(<Chip variant="filter">Filter Chip</Chip>);
        expect(screen.getByText("Filter Chip")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveClass("jkl-chip--filter");
    });

    it("viser CheckIcon når filter-varianten er valgt", () => {
        render(
            <Chip variant="filter" selected>
                Filter
            </Chip>,
        );
        expect(screen.getByRole("button")).toHaveAttribute(
            "aria-pressed",
            "true",
        );
        expect(screen.getByTestId("jkl-check-icon")).toBeInTheDocument();
    });

    it("viser CloseIcon når input-varianten er rendret", () => {
        render(<Chip variant="input">Input Chip</Chip>);
        expect(screen.getByTestId("jkl-close-icon")).toBeInTheDocument();
    });

    it("håndterer onClick-hendelsen", () => {
        const handleClick = vi.fn();
        render(
            <Chip variant="input" onClick={handleClick}>
                Input
            </Chip>,
        );
        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    describe("tracking", () => {
        it("merker chipen som sporbar med komponentnavn og variant", () => {
            render(<Chip variant="filter">Filter Chip</Chip>);

            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-tracked",
                "Chip",
            );
            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-variant",
                "filter",
            );
        });

        it("setter data-jkl-selected og data-jkl-has-icon basert på propene", () => {
            const { rerender } = render(
                <Chip variant="filter">Filter Chip</Chip>,
            );

            expect(screen.getByRole("button")).not.toHaveAttribute(
                "data-jkl-selected",
            );
            expect(screen.getByRole("button")).not.toHaveAttribute(
                "data-jkl-has-icon",
            );

            rerender(
                <Chip variant="filter" selected>
                    Filter Chip
                </Chip>,
            );

            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-selected",
                "true",
            );
            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-has-icon",
                "true",
            );

            rerender(<Chip variant="input">Input Chip</Chip>);

            expect(screen.getByRole("button")).not.toHaveAttribute(
                "data-jkl-selected",
            );
            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-has-icon",
                "true",
            );
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender } = render(<Chip variant="filter">Filter</Chip>);

            expect(screen.getByRole("button")).not.toHaveAttribute(
                "data-jkl-tracking",
            );

            rerender(
                <Chip variant="filter" tracking={{ chipId: "42" }}>
                    Filter
                </Chip>,
            );

            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ chipId: "42" }),
            );
        });
    });
});
