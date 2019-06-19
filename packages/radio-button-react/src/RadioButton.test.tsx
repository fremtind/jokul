import React from "react";
import { cleanup, render } from "@testing-library/react";
import { RadioButton } from "./index";

describe("RadioButton", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByText } = render(
            <RadioButton value="The only choice" onChange={(f) => f} name="" checked={true} inline={true} />,
        );

        expect(getByText("The only choice")).toBeInTheDocument();
    });

    it("executes handleChange when label is clicked", () => {
        const handleChange = jest.fn();
        const { getByText } = render(
            <RadioButton value="The only choice" onChange={handleChange} name="" checked={false} inline={true} />,
        );

        const label = getByText("The only choice");
        label.click();

        expect(handleChange).toHaveBeenCalled();
    });

    it("has a unique id", () => {
        const { getByLabelText } = render(
            <>
                <RadioButton value="one" onChange={(f) => f} name="" />
                <RadioButton value="two" onChange={(f) => f} name="" />
            </>,
        );

        const buttonOne = getByLabelText("one");
        const buttonTwo = getByLabelText("two");

        expect(buttonOne.id).not.toBe(buttonTwo.id);
    });
});
