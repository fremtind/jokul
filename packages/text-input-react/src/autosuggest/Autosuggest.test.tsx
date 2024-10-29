import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Autosuggest, AutosuggestProps } from "./Autosuggest";

const renderMount = (props?: Partial<AutosuggestProps>) =>
    render(
        <Autosuggest
            label="Velg land"
            onChange={() => null}
            allItems={[
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
            ]}
            value=""
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(props as any)}
        />,
    );

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

    it("supports labels only for screen readers", () => {
        const { getByText } = renderMount({ labelProps: { srOnly: true } });

        const label = getByText("Velg land");
        expect(label).toHaveClass("jkl-label--sr-only");
    });

    it("shows no hits message and fallback options", () => {
        const { getByTestId, queryAllByTestId, getByText } = renderMount({
            noHits: {
                text: (
                    <p className="jkl-body">
                        No countries found, do you want one of these
                    </p>
                ),
                items: ["Norway", "Sweden", "Denmark"],
            },
        });

        const input = getByTestId("autosuggest__input");
        fireEvent.change(input, { target: { value: "gibberish" } });

        expect(
            getByText("No countries found, do you want one of these"),
        ).toBeInTheDocument();

        const items = queryAllByTestId("autosuggest__item");
        expect(queryAllByTestId("autosuggest__item")).toHaveLength(3);
        expect(items[0]).toHaveTextContent("Norway");
        expect(items[1]).toHaveTextContent("Sweden");
        expect(items[2]).toHaveTextContent("Denmark");
    });

    it("shows no hits message without fallback options", () => {
        const { getByTestId, queryAllByTestId, getByText } = renderMount({
            noHits: {
                text: <p className="jkl-body">No countries found</p>,
                items: [],
            },
        });

        const input = getByTestId("autosuggest__input");
        fireEvent.change(input, { target: { value: "gibberish" } });

        expect(getByText("No countries found")).toBeInTheDocument();
        expect(queryAllByTestId("autosuggest__item")).toHaveLength(0);
    });
});
