import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
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
        const handleClick = jest.fn();
        render(
            <Chip variant="input" onClick={handleClick}>
                Input
            </Chip>,
        );
        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
