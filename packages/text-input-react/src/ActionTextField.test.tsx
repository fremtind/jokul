import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ActionTextField } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("InlineTextField", () => {
    it("renders as compact when specified", () => {
        const { getByTestId } = render(
            <ActionTextField
                label="testing"
                action={{ icon: "clear", label: "testing", onClick: () => {} }}
                forceCompact
            />,
        );

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("jkl-text-field--compact");
    });

    it("renders the action-icon", () => {
        const { getByTestId } = render(
            <ActionTextField label="testing" action={{ icon: "clear", label: "testing", onClick: () => {} }} />,
        );

        const component = getByTestId("jkl-action-icon");
        expect(component).toBeInTheDocument();
    });

    it("has the placeholder given", () => {
        const { getByPlaceholderText } = render(
            <ActionTextField
                label="testing"
                action={{ icon: "clear", label: "testing", onClick: () => {} }}
                placeholder="33"
            />,
        );

        const component = getByPlaceholderText("33");
        expect(component).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(
            <ActionTextField
                label="testing"
                action={{ icon: "clear", label: "testing", onClick: () => {} }}
                className="test-class"
            />,
        );

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("test-class");
    });

    it("renders with correct label", () => {
        const { getByText } = render(
            <ActionTextField label="The best label" action={{ icon: "clear", label: "testing", onClick: () => {} }} />,
        );

        const component = getByText("The best label");
        expect(component).toBeInTheDocument();
    });

    it("has the value given", () => {
        const { getByDisplayValue } = render(
            <ActionTextField
                label="testing"
                action={{ icon: "clear", label: "testing", onClick: () => {} }}
                value="3"
                onChange={() => {}}
            />,
        );

        const component = getByDisplayValue("3");
        expect(component).toBeInTheDocument();
    });
});

describe("a11y", () => {
    test("action-text-field should be a11y compliant", async () => {
        const { container } = render(
            <ActionTextField
                label="testing"
                helpLabel="tips"
                action={{ icon: "clear", label: "testing", onClick: jest.fn() }}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact action-text-field should be a11y compliant", async () => {
        const { container } = render(
            <ActionTextField
                forceCompact
                label="testing"
                action={{ icon: "clear", label: "testing", onClick: jest.fn() }}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
