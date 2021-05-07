import React from "react";
import { render, screen } from "@testing-library/react";
import { NativeSelect } from ".";
import { axe } from "jest-axe";

const dummyFunc = () => {};

describe("NativeSelect", () => {
    it("should render the correct label", () => {
        render(<NativeSelect label="testing" items={["test"]} onChange={dummyFunc} />);

        expect(screen.getByText("testing")).toBeInTheDocument();
    });

    it("should render the correct number of options", () => {
        const { getAllByTestId } = render(
            <NativeSelect label="testing" items={["1", "2", "3"]} onChange={dummyFunc} />,
        );

        expect(getAllByTestId("jkl-select__option")).toHaveLength(3);
    });

    it("should render correct label and value when given values as strings", () => {
        const items = ["item 1", "item 2", "item 3"];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} onChange={dummyFunc} />);

        expect(getAllByTestId("jkl-select__option")[0]).toHaveAttribute("value", "item 1");
        expect(getAllByTestId("jkl-select__option")[0]).toHaveTextContent("item 1");
    });

    it("should render correct label and value when given values as objects", () => {
        const items = [
            { value: "item1", label: "Item 1" },
            { value: "item2", label: "Item 2" },
        ];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} onChange={dummyFunc} />);

        expect(getAllByTestId("jkl-select__option")[1]).toHaveAttribute("value", "item2");
        expect(getAllByTestId("jkl-select__option")[1]).toHaveTextContent("Item 2");
    });

    it("should render placeholder when given and field has no value", () => {
        const items = ["item 1", "item 2", "item 3"];
        render(<NativeSelect label="testing" items={items} placeholder="Please choose" onChange={dummyFunc} />);

        expect(screen.getByText("Please choose")).toBeInTheDocument();
    });

    it("can be forced into compact mode", () => {
        render(<NativeSelect items={["1", "2"]} label="test" onChange={dummyFunc} forceCompact />);

        expect(screen.getByTestId("jkl-select")).toHaveClass("jkl-select--compact");
    });

    it("readonly mode enabled", () => {
        const items = [
            { value: "item1", label: "Item 1" },
            { value: "item2", label: "Item 2" },
        ];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} onChange={dummyFunc} readOnly />);
        expect(getAllByTestId("jkl-select__option")[1].hasAttribute("disabled")).toBe(true);
    });

    it("readonly mode disabled", () => {
        const items = [
            { value: "item1", label: "Item 1" },
            { value: "item2", label: "Item 2" },
        ];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} onChange={dummyFunc} />);
        expect(getAllByTestId("jkl-select__option")[1].hasAttribute("disabled")).toBe(false);
    });
});

describe("a11y", () => {
    test("native select should be a11y compliant", async () => {
        const { container } = render(
            <NativeSelect label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" onChange={dummyFunc} />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact native select should be a11y compliant", async () => {
        const { container } = render(
            <NativeSelect
                forceCompact
                label="Select"
                items={["1", "2"]}
                value="1"
                helpLabel="Velg en av to"
                onChange={dummyFunc}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
