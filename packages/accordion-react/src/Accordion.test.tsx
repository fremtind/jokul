import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Accordion } from ".";

afterEach(cleanup);

describe("Accordion", () => {
    it("should render without exploding", () => {
        render(<Accordion>Hello</Accordion>);

        expect(screen.getByTestId("jkl-accordion")).toBeInTheDocument();
    });
    it("should render its children", () => {
        render(<Accordion>Hello</Accordion>);

        expect(screen.getByText("Hello")).toBeInTheDocument();
    });
});
