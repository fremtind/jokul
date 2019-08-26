import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { AutosuggestTypeahed } from "./AutoSuggestTypeahed";

interface Props {
    onChange?: (item: string | null) => void;
    allItems?: string[];
}

const defaultProps = {
    label: "Velg land",
    onChange: () => null,
    allItems: ["Afghanistan", "Aland Islands", "Algeria", "Australia"],
};

const mount = (props?: Props) => render(<AutosuggestTypeahed {...defaultProps} {...props} />);

describe("Autosuggest", () => {
    afterEach(cleanup);

    it("fires on change event each time the input field updates", () => {
        const onChange = jest.fn();
        const { getByTestId, getAllByTestId } = mount({ onChange });

        const input = getByTestId("jkl-autosuggest__input");
        fireEvent.change(input, { target: { value: "A" } });
        fireEvent.change(input, { target: { value: "Af" } });
        fireEvent.change(input, { target: { value: "Afg" } });

        const items = getAllByTestId("jkl-autosuggest__item");
        expect(items.length).toBe(1);
        fireEvent.click(items[0]);
        expect(onChange).toHaveBeenCalledTimes(4);
        expect(onChange).toHaveBeenCalledWith("A");
        expect(onChange).toHaveBeenCalledWith("Af");
        expect(onChange).toHaveBeenCalledWith("Afg");
        expect(onChange).toHaveBeenCalledWith("Afghanistan");
    });
});
