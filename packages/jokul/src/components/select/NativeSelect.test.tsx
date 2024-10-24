import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { NativeSelect } from "./NativeSelect.js";

describe("NativeSelect", () => {
    it("should render the correct label", () => {
        render(<NativeSelect label="testing" items={["test"]} />);

        expect(screen.getByText("testing")).toBeInTheDocument();
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
        const items = [
            { value: "item1", label: "Item 1" },
            { value: "item2", label: "Item 2" },
        ];
        const { getAllByTestId } = render(<NativeSelect label="testing" items={items} />);

        expect(getAllByTestId("jkl-select__option")[1]).toHaveAttribute("value", "item2");
        expect(getAllByTestId("jkl-select__option")[1]).toHaveTextContent("Item 2");
    });

    it("should render placeholder when given and field has no value", () => {
        const items = ["item 1", "item 2", "item 3"];
        render(<NativeSelect label="testing" items={items} placeholder="Please choose" />);

        expect(screen.getByText("Please choose")).toBeInTheDocument();
    });

    it("can be forced into compact mode", () => {
        render(<NativeSelect items={["1", "2"]} label="test" density="compact" />);

        expect(screen.getByTestId("jkl-select")).toHaveAttribute("data-density", "compact");
    });

    it("supports labels only for screen readers", () => {
        render(<NativeSelect name="count" items={["1", "2"]} label="test" labelProps={{ srOnly: true }} />);

        const label = screen.getByText("test");
        expect(label).toHaveClass("jkl-label--sr-only");
    });
});

describe("a11y", () => {
    it("native select should be a11y compliant", async () => {
        const onChange = vi.fn();
        const { container } = render(
            <NativeSelect label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" onChange={onChange} />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("compact native select should be a11y compliant", async () => {
        const onChange = vi.fn();
        const { container } = render(
            <NativeSelect
                density="compact"
                label="Select"
                items={["1", "2"]}
                value="1"
                helpLabel="Velg en av to"
                onChange={onChange}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
