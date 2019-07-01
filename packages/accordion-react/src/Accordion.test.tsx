import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Accordion } from ".";

afterEach(cleanup);

describe("Accordion", () => {
    it("should render without exploding", () => {
        const { getByTestId } = render(<Accordion>Hello</Accordion>);

        expect(getByTestId("jkl-accordion")).toBeInTheDocument();
    });
    it("should render its children", () => {
        const { getByText } = render(<Accordion>Hello</Accordion>);

        expect(getByText("Hello")).toBeInTheDocument();
    });
});
