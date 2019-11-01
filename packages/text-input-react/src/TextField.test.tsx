import React from "react";
import { cleanup, render, getByText } from "@testing-library/react";
import { TextField } from ".";

describe("TextField", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextField label="Cool text field" />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<TextField label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("test-class");
    });

    it("has the max-length given", () => {
        const { getByLabelText } = render(<TextField label="testing" maxLength={10} />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("maxlength", "10");
    });

    it("renders as compact when specified", () => {
        const { getByTestId } = render(<TextField label="testing" forceCompact />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("jkl-text-field--compact");
    });

    it("has the placeholder given", () => {
        const { getByLabelText } = render(<TextField label="testing" placeholder="testingPlaceholder" />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("placeholder", "testingPlaceholder");
    });

    it("is read-only when specified", () => {
        const { getByLabelText } = render(<TextField label="testing" readOnly />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("readOnly");
    });

    it("has the value given", () => {
        const { getByLabelText } = render(<TextField label="testing" value="testValue" onChange={() => {}} />);

        const component = getByLabelText("testing");
        expect(component).toHaveValue("testValue");
    });

    it("renders errorLabel when given", () => {
        const { getByTestId } = render(<TextField label="testing" errorLabel="help" />);

        const component = getByTestId("jkl-text-field").children;
        expect(component[2]).toHaveClass("jkl-form-support-label--error");
    });

    it("renders helpLabel when given", () => {
        const { getByTestId } = render(<TextField label="testing" helpLabel="help" />);

        const component = getByTestId("jkl-text-field").children;
        expect(component[2]).toHaveClass("jkl-form-support-label--help");
    });

    it("does not render helpLabel if both helpLabel and errorLabel is given", () => {
        const { getByTestId } = render(<TextField label="testing" helpLabel="help" errorLabel="error" />);

        const component = getByTestId("jkl-text-field").children;
        expect(component[2]).not.toHaveClass("jkl-form-support-label--help");
    });

    it("has the type specified", () => {
        const { getByTestId } = render(<TextField label="testing" type="password" />);

        const component = getByTestId("jkl-text-field").children;
        expect(component[1]).toHaveAttribute("type", "password");
    });
});
