import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Autosuggest } from "./Autosuggest";

interface Props {
    onChange?: (item: string | null) => void;
    allItems?: string[];
    maxNumberOfHits?: number;
}

const defaultProps = {
    label: "Velg land",
    onChange: () => null,
    allItems: [
        "Afghanistan",
        "Aland Islands",
        "Algeria",
        "Australia",
        "Austria",
        "Bahrain",
        "Bangladesh",
        "Benin",
        "Bermuda",
        "Bhutan",
    ],
};

const mount = (props?: Props) => render(<Autosuggest {...defaultProps} {...props} />);

describe("Autosuggest", () => {
    afterEach(cleanup);

    it("renders with menu closed by default", () => {
        const { queryByTestId } = mount();
        expect(queryByTestId("jkl-autosuggest__menu")).toBeNull();
    });

    it("opens menu with a keydown of ArrowDown on input element", () => {
        const { getByTestId, getAllByTestId } = mount();

        const input = getByTestId("jkl-autosuggest__input");
        fireEvent.keyDown(input, { key: "ArrowDown", code: 40, charCode: 40 });

        expect(getByTestId("jkl-autosuggest__menu")).not.toBeNull();
        expect(getAllByTestId("jkl-autosuggest__item").length).toBe(10);
    });

    it("limits number of items based on maxNumberOfItems prop", () => {
        const { getByTestId, getAllByTestId } = mount({ maxNumberOfHits: 4 });

        const input = getByTestId("jkl-autosuggest__input");
        fireEvent.keyDown(input, { key: "ArrowDown", code: 40, charCode: 40 });

        expect(getByTestId("jkl-autosuggest__menu")).not.toBeNull();
        expect(getAllByTestId("jkl-autosuggest__item").length).toBe(4);
    });

    it("is possible to search and select a item", () => {
        const onChange = jest.fn();
        const { getByTestId, getAllByTestId } = mount({ onChange });

        const input = getByTestId("jkl-autosuggest__input");
        fireEvent.change(input, { target: { value: "Afg" } });

        const items = getAllByTestId("jkl-autosuggest__item");
        expect(items.length).toBe(1);
        fireEvent.click(items[0]);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith("Afghanistan", expect.any(Object));
    });

    it("sorts hits correctly according to ranking system", () => {
        const allItems = ["Argentina the country", "argentina", "Argentina"];

        const { getByTestId, getAllByTestId } = mount({ allItems });

        const input = getByTestId("jkl-autosuggest__input");
        fireEvent.change(input, { target: { value: "Argentina" } });

        const items = getAllByTestId("jkl-autosuggest__item");
        expect(items.length).toBe(3);
        // 1. Case sensitive equals
        expect(items[0]).toHaveTextContent("Argentina");
        // 2. Case insensitive equals
        expect(items[1]).toHaveTextContent("argentina");
        // 3. Starts with
        expect(items[2]).toHaveTextContent("Argentina the country");
    });

    it("clears input on keyDown of Escape", () => {
        const { getByTestId } = mount();

        const input = getByTestId("jkl-autosuggest__input");
        fireEvent.change(input, { target: { value: "Afg" } });
        fireEvent.keyDown(input, { key: "Escape", code: 27, charCode: 27 });

        expect(input).toHaveValue("");
    });
});
