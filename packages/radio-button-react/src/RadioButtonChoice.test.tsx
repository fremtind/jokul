import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RadioButtonChoice } from "./index";

describe("RadioButtonChoice", () => {
    afterEach(cleanup);

    it("renders a legend with the correct value", () => {
        const choices = ["yes", "no"];
        const { getByText } = render(
            <RadioButtonChoice
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
            <RadioButtonChoice
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
            <RadioButtonChoice choices={choices} legend="Test" name="test" onChange={(f) => f} selectedValue="two" />,
        );

        const secondButton = getByLabelText("two");
        expect(secondButton).toHaveAttribute("checked");
    });

    it("does not preselect a value if empty", () => {
        const choices = ["one", "two"];
        const { getByLabelText } = render(
            <RadioButtonChoice choices={choices} legend="Test" name="test" onChange={(f) => f} selectedValue="" />,
        );

        const firstButton = getByLabelText("one");
        const secondButton = getByLabelText("two");
        expect(firstButton).not.toHaveAttribute("checked");
        expect(secondButton).not.toHaveAttribute("checked");
    });

    it("executes handleChange function correctly", () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <RadioButtonChoice
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
