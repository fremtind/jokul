import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Search } from "./Search.js";

describe("Search", () => {
    it("renders with default label", () => {
        render(<Search />);

        expect(screen.getByLabelText("Søk")).toBeInTheDocument();
    });

    describe("Mixpanel-sporing", () => {
        it("marks the input as tracked with variant 'input'", () => {
            render(<Search />);

            const input = screen.getByRole("searchbox");
            expect(input).toHaveAttribute("data-jkl-tracked", "Search");
            expect(input).toHaveAttribute("data-jkl-variant", "input");
        });

        it("marks the clear button as tracked with variant 'clear'", () => {
            render(<Search />);

            const clearButton = screen.getByRole("button", {
                name: "Tilbakestill søkefeltet",
            });
            expect(clearButton).toHaveAttribute("data-jkl-tracked", "Search");
            expect(clearButton).toHaveAttribute("data-jkl-variant", "clear");
        });
    });
});
