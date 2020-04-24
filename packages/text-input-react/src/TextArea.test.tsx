import React from "react";
import { cleanup, render } from "@testing-library/react";
import { TextArea } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("TextArea", () => {
    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextArea label="Cool text area" />);

        expect(getByLabelText("Cool text area")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<TextArea label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-area");
        expect(component).toHaveClass("test-class");
    });
});

describe("a11y", () => {
    test("text-area should be a11y compliant", async () => {
        const { container } = render(<TextArea label="testing" helpLabel="tips" />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
