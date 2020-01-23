import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RadioButtons } from "./index";
import { axe } from "jest-axe";

describe("RadioButtons", () => {
    afterEach(cleanup);

    it("renders a legend with the correct value", () => {
        const choices = ["yes", "no"];
        const { getByText } = render(
            <RadioButtons
                choices={choices}
                legend="Does this work?"
                name="doeswork"
                onChange={(f) => f}
                selectedValue="yes"
            />,
        );

        expect(getByText("Does this work?")).toBeInTheDocument();
    });

    it("renders radio buttons for each choice", () => {
        const choices = ["yes", "no"];
        const { getByText } = render(
            <RadioButtons
                choices={choices}
                legend="Does this work?"
                name="doeswork"
                onChange={(f) => f}
                selectedValue="yes"
            />,
        );

        expect(getByText("yes")).toBeInTheDocument();
        expect(getByText("no")).toBeInTheDocument();
    });

    it("selects the correct value from given props", () => {
        const choices = ["one", "two"];
        const { getByLabelText } = render(
            <RadioButtons choices={choices} legend="Test" name="test" onChange={(f) => f} selectedValue="two" />,
        );

        const secondButton = getByLabelText("two");
        expect(secondButton).toHaveAttribute("checked");
    });

    it("does not preselect a value if empty", () => {
        const choices = ["one", "two"];
        const { getByLabelText } = render(
            <RadioButtons choices={choices} legend="Test" name="test" onChange={(f) => f} selectedValue="" />,
        );

        const firstButton = getByLabelText("one");
        const secondButton = getByLabelText("two");
        expect(firstButton).not.toHaveAttribute("checked");
        expect(secondButton).not.toHaveAttribute("checked");
    });

    it("executes handleChange function correctly", () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <RadioButtons
                legend="Test"
                choices={["one", "two"]}
                name="test"
                onChange={handleChange}
                selectedValue="one"
            />,
        );

        const twoButton = getByLabelText("two");
        twoButton.click();

        expect(handleChange).toHaveBeenCalled();
    });
});

describe("a11y", () => {
    test("radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtons legend="Test" choices={["one", "two"]} name="test" onChange={() => {}} selectedValue="one" />,
        );
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("inline radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtons
                inline
                legend="Test"
                choices={["one", "two"]}
                name="test"
                onChange={() => {}}
                selectedValue="one"
            />,
        );
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("compact radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtons
                forceCompact
                legend="Test"
                choices={["one", "two"]}
                name="test"
                onChange={() => {}}
                selectedValue="one"
            />,
        );
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("invalid radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtons
                errorLabel="err"
                legend="Test"
                choices={["one", "two"]}
                name="test"
                onChange={() => {}}
                selectedValue="one"
            />,
        );
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
