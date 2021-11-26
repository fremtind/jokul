import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import { Slider } from ".";

describe("Slider", () => {
    it("renders correct label", () => {
        render(<Slider label="Velg verdi" name="verdi" />);

        expect(screen.getByText("Velg verdi")).toBeInTheDocument();
    });

    it("renders default values as standard", () => {
        render(<Slider label="Velg verdi" name="verdi" />);

        expect(screen.queryByText("0")).not.toBeInTheDocument();
        // check for numbers 1 to 5 inclusive
        [...Array(5).keys()].forEach((number) => {
            expect(screen.getByText(number + 1)).toBeInTheDocument();
        });
        expect(screen.queryByText("6")).not.toBeInTheDocument();
    });

    it("renders with given values", () => {
        render(<Slider label="Velg verdi" from={4} to={6} name="verdi" />);

        expect(screen.queryByText("2")).not.toBeInTheDocument();

        expect(screen.getByText("4")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("6")).toBeInTheDocument();

        expect(screen.queryByText("7")).not.toBeInTheDocument();
    });

    it("fires the given onChange method on change", () => {
        const mockFn = jest.fn();
        render(<Slider label="Velg verdi" name="verdi" onChange={mockFn} />);

        // TODO: Find better way of testing <input type="range" />
        fireEvent.change(screen.getByLabelText("Velg verdi"), { target: { value: 4 } });

        expect(mockFn).toHaveBeenCalled();
    });

    it("is a11y compliant", async () => {
        const { container } = render(<Slider label="Velg verdi" name="verdi" />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
