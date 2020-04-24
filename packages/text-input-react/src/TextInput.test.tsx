import React from "react";
import { cleanup, render } from "@testing-library/react";
import { TextInput } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("TextInput", () => {
    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextInput label="Cool text field" />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<TextInput label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-input");
        expect(component).toHaveClass("test-class");
    });

    it("has the max-length given", () => {
        const { getByLabelText } = render(<TextInput label="testing" maxLength={10} />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("maxlength", "10");
    });

    it("renders as compact when specified", () => {
        const { getByTestId } = render(<TextInput label="testing" forceCompact />);

        const component = getByTestId("jkl-text-input");
        expect(component).toHaveClass("jkl-text-input--compact");
    });

    it("has the placeholder given", () => {
        const { getByLabelText } = render(<TextInput label="testing" placeholder="testingPlaceholder" />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("placeholder", "testingPlaceholder");
    });

    it("is read-only when specified", () => {
        const { getByLabelText } = render(<TextInput label="testing" readOnly />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("readOnly");
    });

    it("has the value given", () => {
        const { getByLabelText } = render(<TextInput label="testing" value="testValue" onChange={() => {}} />);

        const component = getByLabelText("testing");
        expect(component).toHaveValue("testValue");
    });

    it("renders errorLabel when given", () => {
        const { getByText } = render(<TextInput label="testing" errorLabel="det går nok ikke" />);

        const component = getByText("det går nok ikke");
        expect(component).toBeInTheDocument();
    });

    it("renders helpLabel when given", () => {
        const { getByText } = render(<TextInput label="testing" helpLabel="hjelp" />);

        const component = getByText("hjelp");
        expect(component).toBeInTheDocument();
    });

    it("does not render helpLabel if both helpLabel and errorLabel is given", () => {
        const { getByText, queryByText } = render(<TextInput label="testing" helpLabel="help" errorLabel="error" />);

        expect(queryByText("help")).not.toBeInTheDocument();
        expect(getByText("error")).toBeInTheDocument();
    });

    it("has the type specified", () => {
        const { getByPlaceholderText } = render(<TextInput label="testing" type="password" placeholder="test-ph" />);

        const component = getByPlaceholderText("test-ph");
        expect(component).toHaveAttribute("type", "password");
    });

    describe("with action", () => {
        it("renders the action-icon", () => {
            const { getByTestId } = render(
                <TextInput label="testing" action={{ icon: "clear", label: "testing", onClick: () => {} }} />,
            );

            const component = getByTestId("jkl-action-icon");
            expect(component).toBeInTheDocument();
        });
    });

    describe("inline", () => {
        it("renders as inline", () => {
            const { getByTestId } = render(<TextInput inline label="testing" />);

            const component = getByTestId("jkl-text-input");
            expect(component).toHaveClass("jkl-text-input--inline");
        });
    });
});

describe("a11y", () => {
    test("text-field should be a11y compliant", async () => {
        const { container } = render(<TextInput label="testing" type="text" helpLabel="some help 4 u" />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
    test("inline text-field should be a11y compliant", async () => {
        const { container } = render(<TextInput inline label="testing" type="text" helpLabel="some help 4 u" />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
