import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { TextArea } from "./TextArea.js";

describe("TextArea", () => {
    it("renders with correct label", () => {
        render(<TextArea label="Cool text area" />);

        expect(screen.getByLabelText("Cool text area")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        render(<TextArea label="testing" className="test-class" />);

        const component = screen.getByTestId("jkl-text-area");
        expect(component).toHaveClass("test-class");
    });

    it("supports labels only for screen readers", () => {
        render(<TextArea label="testing" labelProps={{ srOnly: true }} />);

        const label = screen.getByText("testing");
        expect(label).toHaveClass("jkl-label--sr-only");
    });

    it("renders with an empty placeholder for CSS selector reasons, so expand animation works", () => {
        const { getByRole } = render(<TextArea label="Cool text area" />);

        const textArea = getByRole("textbox");

        expect(textArea.getAttribute("placeholder")).toEqual(" ");
    });
});

describe("a11y", () => {
    test("text-area should be a11y compliant", async () => {
        const { container } = render(<TextArea label="testing" helpLabel="tips" />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("text-area with counter should be a11y compliant", async () => {
        const { container } = render(<TextArea label="testing" helpLabel="tips" counter={{ maxLength: 200 }} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
