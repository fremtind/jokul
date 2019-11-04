import React from "react";
import { cleanup, render } from "@testing-library/react";
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
        const { getByText } = render(<TextField label="testing" errorLabel="det går nok ikke" />);

        const component = getByText("det går nok ikke");
        expect(component).toBeInTheDocument();
    });

    it("renders helpLabel when given", () => {
        const { getByText } = render(<TextField label="testing" helpLabel="hjelp" />);

        const component = getByText("hjelp");
        expect(component).toBeInTheDocument();
    });

    it("does not render helpLabel if both helpLabel and errorLabel is given", () => {
        const { getByText, queryByText } = render(<TextField label="testing" helpLabel="help" errorLabel="error" />);

        expect(queryByText("help")).not.toBeInTheDocument();
        expect(getByText("error")).toBeInTheDocument();
    });

    it("has the type specified", () => {
        const { getByPlaceholderText } = render(<TextField label="testing" type="password" placeholder="test-ph" />);

        const component = getByPlaceholderText("test-ph");
        expect(component).toHaveAttribute("type", "password");
    });
});
