import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Dropdown } from ".";

describe("Dropdown", () => {
    afterEach(cleanup);

    it("should call onChange and set input value to selected value", () => {
        const onChange = jest.fn();
        const { getByText, getByTestId } = render(
            <Dropdown onChange={onChange} items={["drop", "it", "like", "its", "hot"]} label="Snoop" />,
        );

        getByTestId("jkl-dropdown-button").click();
        getByText("hot").click();

        const input = getByTestId("jkl-dropdown-input");

        expect(onChange).toHaveBeenCalled();
        expect(input).toHaveProperty("value", "hot");
    });

    it("should set inital value as input value", () => {
        const onChange = jest.fn();
        const { getByTestId } = render(
            <Dropdown
                onChange={onChange}
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
                initialInputValue="it"
            />,
        );

        const input = getByTestId("jkl-dropdown-input");

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(input).toHaveProperty("value", "it");
    });

    it("should show open button when closed and close while dropdown is open", () => {
        const onChange = jest.fn();
        const { getByTestId } = render(
            <Dropdown
                onChange={onChange}
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
                initialInputValue="it"
            />,
        );

        const button = getByTestId("jkl-dropdown-button");

        expect(button.textContent).toBe("Åpne");

        button.click();
        expect(button.textContent).toBe("Lukk");
    });
});
