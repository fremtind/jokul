import { act, fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React, { useState } from "react";
import { Select } from ".";

describe("Select", () => {
    it("should render correct amount of options", () => {
        const { getAllByTestId } = render(<Select items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const options = getAllByTestId("jkl-select__option");

        expect(options.length).toBe(5);
    });

    it("should be inline when specified", () => {
        render(<Select inline items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const dropdown = screen.getByTestId("jkl-select");
        expect(dropdown).toHaveClass("jkl-select--inline");
    });

    it("should use the specified value", () => {
        const onChange = jest.fn();
        const value = "drop";
        render(<Select onChange={onChange} items={["drop", "it", "like", "its", "hot"]} label="Snoop" value={value} />);

        const button = screen.getByTestId("jkl-select__button");

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(button).toHaveTextContent(value);
    });

    it("should have default text value in button when no option selected", () => {
        render(<Select items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = screen.getByTestId("jkl-select__button");

        expect(button).toHaveTextContent("Velg");
    });

    it("can be forced into compact mode", () => {
        render(<Select items={["1", "2"]} label="test" forceCompact />);

        expect(screen.getByTestId("jkl-select")).toHaveClass("jkl-select--compact");
    });

    it("displays the ValuePair label of selected item on first render", () => {
        const valuePairs = [{ value: "datagreier", label: "Fin lesbar tekst" }];

        render(<Select label="test" items={valuePairs} value={"datagreier"} onChange={() => {}} />);

        expect(screen.getByTestId("jkl-select__button").innerHTML).toBe("Fin lesbar tekst");
    });
});

describe("Searchable select", () => {
    it("should keep search input hidden by default", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);

        expect(screen.getByLabelText("List of items")).not.toBeVisible();
    });

    it("should change the value of the select when clicking on a option", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);
        const openDropdownButtonElement = screen.getByText("Velg");

        act(() => {
            openDropdownButtonElement.click();
        });
        const selectOption1Element = screen.getByText("Item 1");
        act(() => {
            selectOption1Element.click();
        });
        expect(openDropdownButtonElement.textContent).toBe("Item 1");
    });

    it("should change visibility of search input when opening select dropdown", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        expect(searchInputElement).not.toBeVisible();

        act(() => {
            openDropdownButtonElement.click();
        });

        expect(searchInputElement).toBeVisible();
    });

    it("should keep all items visible when nothing has been typed into search input", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
                { label: "Item 4", value: "4" },
                { label: "Item 5", value: "5" },
                { label: "Item 6", value: "6" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        act(() => {
            openDropdownButtonElement.click();
        });

        expect(searchInputElement).toHaveAttribute("value", "");
        expect(screen.getByText("Item 1")).toBeVisible();
        expect(screen.getByText("Item 2")).toBeVisible();
        expect(screen.getByText("Item 3")).toBeVisible();
        expect(screen.getByText("Item 4")).toBeVisible();
        expect(screen.getByText("Item 5")).toBeVisible();
        expect(screen.getByText("Item 6")).toBeVisible();
    });

    it("should change visibility of options who's label does not match the input search value", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 11", value: "A" },
                { label: "Item 12", value: "B" },
                { label: "Item 13", value: "C" },
                { label: "Item 24", value: "D" },
                { label: "Item 25", value: "E" },
                { label: "Item 26", value: "F" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        act(() => {
            openDropdownButtonElement.click();
        });

        expect(searchInputElement).toHaveAttribute("value", "");
        expect(screen.getByText("Item 11")).toBeVisible();
        expect(screen.getByText("Item 12")).toBeVisible();
        expect(screen.getByText("Item 13")).toBeVisible();
        expect(screen.getByText("Item 24")).toBeVisible();
        expect(screen.getByText("Item 25")).toBeVisible();
        expect(screen.getByText("Item 26")).toBeVisible();

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "1" } });
        });

        expect(screen.getByText("Item 11")).toBeVisible();
        expect(screen.getByText("Item 12")).toBeVisible();
        expect(screen.getByText("Item 13")).toBeVisible();
        expect(screen.getByText("Item 24")).not.toBeVisible();
        expect(screen.getByText("Item 25")).not.toBeVisible();
        expect(screen.getByText("Item 26")).not.toBeVisible();
    });

    it("should clear search input after selecting an item and opening select options again", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 11", value: "A" },
                { label: "Item 12", value: "B" },
                { label: "Item 13", value: "C" },
                { label: "Item 24", value: "D" },
                { label: "Item 25", value: "E" },
                { label: "Item 26", value: "F" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");
        const firstOptionElement = screen.getByText("Item 11");

        act(() => {
            openDropdownButtonElement.click();
        });

        expect(searchInputElement).toHaveAttribute("value", "");

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "Item 11" } });
        });

        expect(searchInputElement).toHaveAttribute("value", "Item 11");

        act(() => {
            firstOptionElement.click();
        });

        expect(openDropdownButtonElement.textContent).toBe("Item 11");

        act(() => {
            openDropdownButtonElement.click();
        });
        expect(searchInputElement).toHaveAttribute("value", "");
    });

    it("should have a case insensitive search", () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "ITEM 1", value: "1" },
                { label: "item 2", value: "2" },
                { label: "ItEm 3", value: "3" },
                { label: "iteM 4", value: "4" },
                { label: "Item 5", value: "5" },
                { label: "Item 6", value: "6" },
            ];
            return (
                <Select searchAble label="List of items" items={items} value={state} onChange={(e) => setState(e)} />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        act(() => {
            openDropdownButtonElement.click();
        });

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "item" } });
        });

        expect(searchInputElement).toHaveAttribute("value", "item");
        expect(screen.getByText("ITEM 1")).toBeVisible();
        expect(screen.getByText("item 2")).toBeVisible();
        expect(screen.getByText("ItEm 3")).toBeVisible();
        expect(screen.getByText("iteM 4")).toBeVisible();
        expect(screen.getByText("Item 5")).toBeVisible();
        expect(screen.getByText("Item 6")).toBeVisible();

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "ITEM" } });
        });

        expect(searchInputElement).toHaveAttribute("value", "ITEM");
        expect(screen.getByText("ITEM 1")).toBeVisible();
        expect(screen.getByText("item 2")).toBeVisible();
        expect(screen.getByText("ItEm 3")).toBeVisible();
        expect(screen.getByText("iteM 4")).toBeVisible();
        expect(screen.getByText("Item 5")).toBeVisible();
        expect(screen.getByText("Item 6")).toBeVisible();
    });
});

describe("a11y", () => {
    test("searchable select should be a11y compliant", async () => {
        const { container } = render(
            <Select searchAble label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />,
        );
        const results = await axe(container, {
            rules: {
                "aria-input-field-name": { enabled: false },
                "aria-required-parent": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
    test("select should be a11y compliant", async () => {
        const { container } = render(<Select label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />);
        const results = await axe(container, {
            rules: {
                "aria-input-field-name": { enabled: false },
                "aria-required-parent": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("compact select should be a11y compliant", async () => {
        const { container } = render(
            <Select forceCompact label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />,
        );
        const results = await axe(container, {
            rules: {
                "aria-input-field-name": { enabled: false },
                "aria-required-parent": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
