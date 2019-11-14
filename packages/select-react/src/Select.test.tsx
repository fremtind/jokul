import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Select } from ".";

describe("Select", () => {
    afterEach(cleanup);

    it("should render correct amount of options", () => {
        const { getAllByTestId } = render(<Select items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const options = getAllByTestId("jkl-select__option");

        expect(options.length).toBe(5);
    });

    it("should be inline when specified", () => {
        const { getByTestId } = render(<Select inline items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const dropdown = getByTestId("jkl-select");
        expect(dropdown).toHaveClass("jkl-select--inline");
    });

    it("should use the specified value", () => {
        const onChange = jest.fn();
        const value = "drop";
        const { getByTestId } = render(
            <Select onChange={onChange} items={["drop", "it", "like", "its", "hot"]} label="Snoop" value={value} />,
        );

        const button = getByTestId("jkl-select__value");

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(button).toHaveTextContent(value);
    });

    it("should have default text value in button when no option selected", () => {
        const { getByTestId } = render(<Select items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = getByTestId("jkl-select__value");

        expect(button).toHaveTextContent("Velg");
    });

    it("can be forced into compact mode", () => {
        const { getByTestId } = render(<Select items={["1", "2"]} label="test" forceCompact />);

        expect(getByTestId("jkl-select")).toHaveClass("jkl-select--compact");
    });
});
