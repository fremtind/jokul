import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { Dropdown } from ".";

describe("Dropdown", () => {
    afterEach(cleanup);

    it("should render correct amount of options", () => {
        const { getAllByTestId } = render(<Dropdown items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const options = getAllByTestId("jkl-dropdown__option");

        expect(options.length).toBe(5);
    });

    it("should set inital value as input value", () => {
        const onChange = jest.fn();
        const initialInput = "drop";
        const { getByTestId } = render(
            <Dropdown
                onChange={onChange}
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
                initialInputValue={initialInput}
            />,
        );

        const button = getByTestId("jkl-dropdown__value");

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(button).toHaveTextContent(initialInput);
    });

    it("should have default text value in button when no option selected", () => {
        const { getByTestId } = render(<Dropdown items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = getByTestId("jkl-dropdown__value");

        expect(button).toHaveTextContent("Velg");
    });
});
