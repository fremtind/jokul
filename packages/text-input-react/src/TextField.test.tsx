import React from "react";
import { cleanup, render } from "@testing-library/react";
import { TextField } from ".";

describe("TextField", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextField label="Cool text field" />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });

    it("renders as inline when specified", () => {
        const { getByTestId } = render(<TextField inline label="testing" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("jkl-text-field--inline");
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<TextField label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("test-class");
    });
});
