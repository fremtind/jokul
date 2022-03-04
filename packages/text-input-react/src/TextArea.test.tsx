import React from "react";
import { render, screen } from "@testing-library/react";
import { TextArea } from ".";
import { axe } from "jest-axe";

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
