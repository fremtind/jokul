import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { Autosuggest } from "./Autosuggest";

interface Props {
    onChange?: (item: string) => void;
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
    value: "",
};

const renderMount = (props?: Props) => render(<Autosuggest {...defaultProps} {...props} />);

describe("Autosuggest", () => {
    it("renders with menu closed by default", () => {
        const { queryAllByTestId } = renderMount();
        expect(queryAllByTestId("autosuggest__menu")).toHaveLength(0);
    });

    it("opens menu with a keydown of ArrowDown on input element", () => {
        const { getByTestId, queryAllByTestId } = renderMount();

        const input = getByTestId("autosuggest__input");
        fireEvent.keyDown(input, { key: "ArrowDown", keyCode: 40 });

        expect(queryAllByTestId("autosuggest__menu")).toHaveLength(1);
        expect(queryAllByTestId("autosuggest__item")).toHaveLength(10);
    });

    it("is possible to search and select a item", () => {
        const onChange = jest.fn();
        const { getByTestId, queryAllByTestId } = renderMount({ onChange });

        const input = getByTestId("autosuggest__input");
        fireEvent.change(input, { target: { value: "Afg" } });

        const items = queryAllByTestId("autosuggest__item");
        expect(items).toHaveLength(1);
        fireEvent.click(items[0]);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith("Afghanistan");
    });

    it("sorts hits correctly according to ranking system", () => {
        const allItems = ["Argentina the country", "argentina", "Argentina"];
        const { getByTestId, queryAllByTestId } = renderMount({ allItems });

        const input = getByTestId("autosuggest__input");
        fireEvent.change(input, { target: { value: "Argentina" } });

        const items = queryAllByTestId("autosuggest__item");
        // 1. Case sensitive equals
        expect(items[0]).toHaveTextContent("Argentina");
        // 2. Case insensitive equals
        expect(items[1]).toHaveTextContent("argentina");
        // 3. Starts with
        expect(items[2]).toHaveTextContent("Argentina the country");
    });
});
