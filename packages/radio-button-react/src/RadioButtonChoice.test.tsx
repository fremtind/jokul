import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RadioButtonChoice } from "./index";

describe("RadioButtonChoice", () => {
    afterEach(cleanup);

    it("renders a legend with the correct value", () => {
        const choices = ["yes", "no"];
        const { getByText } = render(
            <RadioButtonChoice choices={choices} name="Does this work?" onChange={(f) => f} selectedValue="yes" />,
        );

        expect(getByText("Does this work?")).toBeInTheDocument();
    });

    it("renders radio buttons for each choice", () => {
        const choices = ["yes", "no"];
        const { getByText } = render(
            <RadioButtonChoice choices={choices} name="Does this work?" onChange={(f) => f} selectedValue="yes" />,
        );

        expect(getByText("yes")).toBeInTheDocument();
        expect(getByText("no")).toBeInTheDocument();
    });

    it("selects the correct value from given props", () => {
        const choices = ["one", "two"];
        const { getByLabelText } = render(
            <RadioButtonChoice choices={choices} name="test" onChange={(f) => f} selectedValue="two" />,
        );

        const secondButton = getByLabelText("two");
        expect(secondButton).toHaveAttribute("checked");
    });

    it("does not preselect a value if empty", () => {
        const choices = ["one", "two"];
        const { getByLabelText } = render(
            <RadioButtonChoice choices={choices} name="test" onChange={(f) => f} selectedValue="" />,
        );

        const firstButton = getByLabelText("one");
        const secondButton = getByLabelText("two");
        expect(firstButton).not.toHaveAttribute("checked");
        expect(secondButton).not.toHaveAttribute("checked");
    });

    it("executes handleChange function correctly", () => {
        const handleChange = jest.fn();
        const choices = ["one", "two"];
        const { getByText } = render(
            <RadioButtonChoice choices={choices} name="test" onChange={handleChange} selectedValue={choices[0]} />,
        );

        const twoButton = getByText("two");
        twoButton.click();

        expect(handleChange).toHaveBeenCalled();
    });
});
