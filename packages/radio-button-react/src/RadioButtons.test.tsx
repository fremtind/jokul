import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RadioButtons } from "./index";
import { axe } from "jest-axe";

describe("RadioButtons", () => {
    it("renders a legend with the correct value", () => {
        const choices = ["yes", "no"];
        render(
            <RadioButtons
                choices={choices}
                legend="Does this work?"
                name="doeswork"
                onChange={(f) => f}
                selectedValue="yes"
            />,
        );

        expect(screen.getByText("Does this work?")).toBeInTheDocument();
    });

    it("renders radio buttons for each choice", () => {
        const choices = ["yes", "no"];
        render(
            <RadioButtons
                choices={choices}
                legend="Does this work?"
                name="doeswork"
                onChange={(f) => f}
                selectedValue="yes"
            />,
        );

        expect(screen.getByText("yes")).toBeInTheDocument();
        expect(screen.getByText("no")).toBeInTheDocument();
    });

    it("selects the correct value from given props", () => {
        const choices = ["one", "two"];
        render(<RadioButtons choices={choices} legend="Test" name="test" onChange={(f) => f} selectedValue="two" />);

        const secondButton = screen.getByLabelText("two");
        expect(secondButton).toHaveAttribute("checked");
    });

    it("does not preselect a value if empty", () => {
        const choices = ["one", "two"];
        render(<RadioButtons choices={choices} legend="Test" name="test" onChange={(f) => f} selectedValue="" />);

        const firstButton = screen.getByLabelText("one");
        const secondButton = screen.getByLabelText("two");
        expect(firstButton).not.toHaveAttribute("checked");
        expect(secondButton).not.toHaveAttribute("checked");
    });

    it("executes handleChange function correctly", () => {
        const handleChange = jest.fn();
        render(
            <RadioButtons
                legend="Test"
                choices={["one", "two"]}
                name="test"
                onChange={handleChange}
                selectedValue="one"
            />,
        );

        const buttons = screen.getAllByTestId("jkl-radio-button__label-tag");
        fireEvent.click(buttons[1]); // Click second button

        expect(handleChange).toHaveBeenCalled();
    });
    it("should have data-testautoid", () => {
        render(
            <RadioButtons
                choices={["yes", "no"]}
                legend="Does this work?"
                name="doeswork"
                onChange={(f) => f}
                selectedValue="yes"
                data-testautoid="jkl-radiobuttons__testautoid"
            />,
        );

        const component = document.getElementsByClassName("jkl-field-group")[0] as HTMLInputElement;
        const testAutoId = component.getAttribute("data-testautoid");
        expect(testAutoId).toEqual("jkl-radiobuttons__testautoid");
    });
});

describe("a11y", () => {
    test("radio buttons should be a11y compliant", async () => {
        const { container } = render(
            <RadioButtons legend="Test" choices={["one", "two"]} name="test" onChange={() => {}} selectedValue="one" />,
        );
        const results = await axe(container);

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
        const results = await axe(container);

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
        const results = await axe(container);

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
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
