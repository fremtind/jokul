import React from "react";
import { cleanup, render } from "@testing-library/react";
import { RadioButton } from "./index";

describe("RadioButton", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByText } = render(
            <RadioButton
                value="choice"
                label="The only choice"
                onChange={(f) => f}
                name=""
                checked={true}
                inline={true}
            />,
        );

        expect(getByText("The only choice")).toBeInTheDocument();
    });

    it("executes handleChange when clicked", () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <RadioButton
                value="choice"
                label="The only choice"
                onChange={handleChange}
                name=""
                checked={false}
                inline={true}
            />,
        );

        const button = getByLabelText("The only choice");
        button.click();

        expect(handleChange).toHaveBeenCalled();
    });

    it("executes handleChange when label is clicked", () => {
        const handleChange = jest.fn();
        const { getByTestId } = render(
            <RadioButton
                value="choice"
                label="The only choice"
                onChange={handleChange}
                name=""
                checked={false}
                inline={true}
            />,
        );

        const button = getByTestId("jkl-radio-button__label-tag");
        button.click();

        expect(handleChange).toHaveBeenCalled();
    });
});
