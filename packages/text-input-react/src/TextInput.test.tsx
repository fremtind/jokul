import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { TextInput } from ".";

describe("TextInput", () => {
    it("renders with correct label", () => {
        render(<TextInput label="Cool text field" />);

        expect(screen.getByLabelText("Cool text field")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        render(<TextInput label="testing" className="test-class" />);

        const component = screen.getByTestId("jkl-text-input");
        expect(component).toHaveClass("test-class");
    });

    it("has the max-length given", () => {
        render(<TextInput label="testing" maxLength={10} />);

        const component = screen.getByLabelText("testing");
        expect(component).toHaveAttribute("maxlength", "10");
    });

    it("renders as compact when specified", () => {
        render(<TextInput label="testing" density="compact" />);

        const component = screen.getByTestId("jkl-text-input");
        expect(component).toHaveAttribute("data-density", "compact");
    });

    it("has the placeholder given", () => {
        render(<TextInput label="testing" placeholder="testingPlaceholder" />);

        const component = screen.getByLabelText("testing");
        expect(component).toHaveAttribute("placeholder", "testingPlaceholder");
    });

    it("is read-only when specified", () => {
        render(<TextInput label="testing" readOnly />);

        const component = screen.getByLabelText("testing");
        expect(component).toHaveAttribute("readOnly");
    });

    it("has the value given", () => {
        render(<TextInput label="testing" value="testValue" onChange={() => {}} />);

        const component = screen.getByLabelText("testing");
        expect(component).toHaveValue("testValue");
    });

    it("renders errorLabel when given", () => {
        render(<TextInput label="testing" errorLabel="det går nok ikke" />);

        const component = screen.getByText("det går nok ikke");
        expect(component).toBeInTheDocument();
    });

    it("renders helpLabel when given", () => {
        render(<TextInput label="testing" helpLabel="hjelp" />);

        const component = screen.getByText("hjelp");
        expect(component).toBeInTheDocument();
    });

    it("does not render helpLabel if both helpLabel and errorLabel is given", () => {
        render(<TextInput label="testing" helpLabel="help" errorLabel="error" />);

        expect(screen.queryByText("help")).not.toBeInTheDocument();
        expect(screen.getByText("error")).toBeInTheDocument();
    });

    it("has the type specified", () => {
        render(<TextInput label="testing" type="password" placeholder="test-ph" />);

        const component = screen.getByPlaceholderText("test-ph");
        expect(component).toHaveAttribute("type", "password");
    });

    it("should have data-testautoid", () => {
        render(
            <TextInput
                label="testing"
                type="password"
                placeholder="test-ph"
                data-testautoid="jkl-textinput__testautoid"
            />,
        );

        const input = screen.getByLabelText("testing");
        const testAutoId = input.getAttribute("data-testautoid");
        expect(testAutoId).toEqual("jkl-textinput__testautoid");
    });

    describe("with action", () => {
        it("renders the action-icon", () => {
            render(<TextInput label="testing" action={{ icon: "clear", label: "testing", onClick: () => {} }} />);

            const component = screen.getByTestId("jkl-action-icon");
            expect(component).toBeInTheDocument();
        });
    });

    describe("inline", () => {
        it("renders as inline", () => {
            render(<TextInput inline label="testing" />);

            const component = screen.getByTestId("jkl-text-input");
            expect(component).toHaveClass("jkl-text-input--inline");
        });
    });

    it("supports labels only for screen readers", () => {
        render(<TextInput label="testing" labelProps={{ srOnly: true }} />);

        const label = screen.getByText("testing");
        expect(label).toHaveClass("jkl-label--sr-only");
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
