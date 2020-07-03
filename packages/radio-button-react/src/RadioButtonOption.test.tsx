import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadioButtonOption } from "./index";

describe("RadioButtonOption", () => {
    it("renders with correct label", () => {
        render(
            <RadioButtonOption
                value="choice"
                label="The only choice"
                onChange={(f) => f}
                name=""
                checked={true}
                inline={true}
            />,
        );

        expect(screen.getByText("The only choice")).toBeInTheDocument();
    });

    it("executes handleChange when clicked", () => {
        const handleChange = jest.fn();
        render(
            <RadioButtonOption
                value="choice"
                label="The only choice"
                onChange={handleChange}
                name=""
                checked={false}
                inline={true}
            />,
        );

        const button = screen.getByLabelText("The only choice");
        fireEvent.click(button);

        expect(handleChange).toHaveBeenCalled();
    });

    it("executes handleChange when label is clicked", () => {
        const handleChange = jest.fn();
        render(
            <RadioButtonOption
                value="choice"
                label="The only choice"
                onChange={handleChange}
                name=""
                checked={false}
                inline={true}
            />,
        );

        const button = screen.getByTestId("jkl-radio-button__label-tag");
        fireEvent.click(button);

        expect(handleChange).toHaveBeenCalled();
    });
});
