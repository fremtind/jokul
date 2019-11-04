import React from "react";
import { cleanup, render } from "@testing-library/react";
import { NativeSelect } from ".";

describe("NativeSelect", () => {
    afterEach(cleanup);

    it("should render the correct label", () => {
        const { getByText } = render(<NativeSelect label="testing" items={["test"]} />);

        expect(getByText("testing")).toBeInTheDocument();
    });

    it("should render the correct number of options", () => {
        const { getAllByTestId } = render(<NativeSelect label="testing" items={["1", "2", "3"]} />);

        expect(getAllByTestId("jkl-select__option")).toHaveLength(3);
    });

    it("should render correct label and value when given values as strings", () => {
        const items = ["item 1", "item 2", "item 3"];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} />);

        expect(getAllByTestId("jkl-select__option")[0]).toHaveAttribute("value", "item 1");
        expect(getAllByTestId("jkl-select__option")[0]).toHaveTextContent("item 1");
    });

    it("should render correct label and value when given values as objects", () => {
        const items = [{ value: "item1", label: "Item 1" }, { value: "item2", label: "Item 2" }];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} />);

        expect(getAllByTestId("jkl-select__option")[1]).toHaveAttribute("value", "item2");
        expect(getAllByTestId("jkl-select__option")[1]).toHaveTextContent("Item 2");
    });

    it("should render placeholder when given and field has no value", () => {
        const items = ["item 1", "item 2", "item 3"];
        const { getByText } = render(<NativeSelect label="testing" items={items} placeholder="Please choose" />);

        expect(getByText("Please choose")).toBeInTheDocument();
    });

    it("can be forced into compact mode", () => {
        const { getByTestId } = render(<NativeSelect items={["1", "2"]} label="test" forceCompact />);

        expect(getByTestId("jkl-select")).toHaveClass("jkl-select--compact");
    });
});
