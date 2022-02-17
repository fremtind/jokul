import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import React, { useState } from "react";
import { Select } from ".";

describe("Select", () => {
    it("should render correct amount of options", () => {
        const { getAllByTestId } = render(
            <Select name="snoop" items={["drop", "it", "like", "its", "hot"]} label="Snoop" />,
        );

        const options = getAllByTestId("jkl-select__option");

        expect(options.length).toBe(5);
    });

    it("should be inline when specified", () => {
        render(<Select name="snoop" inline items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const dropdown = screen.getByTestId("jkl-select");
        expect(dropdown).toHaveClass("jkl-select--inline");
    });

    it("should open when clicked", () => {
        render(<Select name="snoop" inline items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = screen.getByTestId("jkl-select__button");

        act(() => {
            userEvent.click(button);
        });
        expect(screen.getByText("drop")).toBeVisible();
    });

    it("should open when arrow down is pressed", () => {
        // Testen produserer en tom DOMException. Undersøkelser i jsdom ga ikke noe hint om årsak.

        render(<Select name="snoop" inline items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = screen.getByTestId("jkl-select__button");

        act(() => {
            userEvent.type(button, "{arrowdown}");
        });
        expect(screen.getByText("drop")).toBeVisible();
    });

    it("should use the specified value", () => {
        const onChange = jest.fn();
        const value = "drop";
        render(
            <Select
                name="snoop"
                onChange={onChange}
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
                value={value}
            />,
        );

        const button = screen.getByTestId("jkl-select__button");

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(button).toHaveTextContent(value);
    });

    it("should have default text value in button when no option selected", () => {
        render(<Select name="snoop" items={["drop", "it", "like", "its", "hot"]} label="Snoop" />);

        const button = screen.getByTestId("jkl-select__button");

        expect(button).toHaveTextContent("Velg");
    });

    it("can be forced into compact mode", () => {
        render(<Select name="count" items={["1", "2"]} label="test" forceCompact />);

        expect(screen.getByTestId("jkl-select")).toHaveClass("jkl-select--compact");
    });

    it("displays the ValuePair label of selected item on first render", () => {
        const valuePairs = [{ value: "datagreier", label: "Fin lesbar tekst" }];

        render(<Select name="datagreier" label="test" items={valuePairs} value={"datagreier"} onChange={() => {}} />);

        expect(screen.getByTestId("jkl-select__button").innerHTML).toBe("Fin lesbar tekst");
    });

    it("should call onFocus when clicking on select dropdown", () => {
        const onFocus = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select
                    name="items"
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onFocus={onFocus}
                />
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when clicking on something outside Select", () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <>
                    <button>OUTSIDE BUTTON</button>
                    <Select
                        name="items"
                        label="List of items"
                        items={items}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        onBlur={onBlur}
                    />
                </>
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const outsideSelectButtonElement = screen.getByText("OUTSIDE BUTTON");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        act(() => {
            userEvent.click(outsideSelectButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should not call onBlur when clicking on a dropdown item", () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <>
                    <button>OUTSIDE BUTTON</button>
                    <Select
                        name="items"
                        label="List of items"
                        items={items}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        onBlur={onBlur}
                    />
                </>
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const firstItemButton = screen.getByText("Item 1");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        act(() => {
            userEvent.click(firstItemButton);
        });

        expect(onBlur).not.toHaveBeenCalled();
    });

    it("should support toggling a Select inside an AccordionItem without getting stuck in a render-loop (#1466)", () => {
        render(
            <Accordion>
                <AccordionItem title="Velg tingen" startExpanded>
                    <Select name="items" items={[{ label: "Item 3", value: "3" }]} label="Ting" />
                </AccordionItem>
            </Accordion>,
        );

        act(() => {
            const button = screen.getByTestId("jkl-select__button");
            userEvent.click(button);
        });

        expect(screen.getByTestId("jkl-select__button")).toBeVisible();
    });

    it("supports controlled value state", () => {
        const TestControlledSelect = () => {
            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];

            const [value, setValue] = useState("");

            return (
                <>
                    <button onClick={() => setValue(items[1].value)}>Click</button>
                    <Select name="items" items={items} label="Ting" value={value} />
                </>
            );
        };

        render(<TestControlledSelect />);

        act(() => {
            userEvent.click(screen.getByText("Click"));
        });

        expect(screen.getByTestId("jkl-select__button")).toHaveTextContent("Item 2");
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);
        const openDropdownButtonElement = screen.getByText("Velg");

        act(() => {
            userEvent.click(openDropdownButtonElement);
        });
        const selectOption1Element = screen.getByText("Item 1");

        act(() => {
            userEvent.click(selectOption1Element);
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        expect(searchInputElement).not.toBeVisible();

        act(() => {
            userEvent.click(openDropdownButtonElement);
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        act(() => {
            userEvent.click(openDropdownButtonElement);
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        act(() => {
            userEvent.click(openDropdownButtonElement);
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");
        const firstOptionElement = screen.getByText("Item 11");

        act(() => {
            userEvent.click(openDropdownButtonElement);
        });

        expect(searchInputElement).toHaveAttribute("value", "");

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "Item 11" } });
        });

        expect(searchInputElement).toHaveAttribute("value", "Item 11");

        act(() => {
            userEvent.click(firstOptionElement);
        });

        expect(openDropdownButtonElement.textContent).toBe("Item 11");

        act(() => {
            userEvent.click(openDropdownButtonElement);
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
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");

        act(() => {
            userEvent.click(openDropdownButtonElement);
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

    it("should focus search input field when clicking dropdown button", () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items");
        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        expect(document.activeElement).toBe(searchInputElement);
    });

    it("should call onFocus when select button is clicked in searchable Select", () => {
        const onFocus = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onFocus={onFocus}
                />
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        expect(onFocus).toBeCalledTimes(1);
    });

    it("should not call onBlur when clicking on a searchable Select", () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={items}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onBlur={onBlur}
                />
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        expect(onBlur).not.toHaveBeenCalled();
    });

    it("should call onBlur when clicking on something outside searchable Select", () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <>
                    <button>OUTSIDE BUTTON</button>
                    <Select
                        name="items"
                        searchable
                        label="List of items"
                        items={items}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        onBlur={onBlur}
                    />
                </>
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const outsideSelectButtonElement = screen.getByText("OUTSIDE BUTTON");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        act(() => {
            userEvent.click(outsideSelectButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus only once when performing multiple actions and focus shifts inside the searchable Select", () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>();

            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return (
                <>
                    <button>OUTSIDE BUTTON</button>
                    <Select
                        name="items"
                        searchable
                        label="List of items"
                        items={items}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        onBlur={onBlur}
                    />
                </>
            );
        }
        render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const outsideSelectButtonElement = screen.getByText("OUTSIDE BUTTON");
        const searchInputElement = screen.getByLabelText("List of items");
        const firstItemButtonElement = screen.getByText("Item 1");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        act(() => {
            userEvent.type(searchInputElement, "item 1");
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        act(() => {
            // userEvent.click(firstItemButtonElement); THIS SHOULD WORK BUT DOESN'T FOR SOME REASON. JSDOM BUG?
            firstItemButtonElement.focus();
            userEvent.click(firstItemButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        act(() => {
            userEvent.click(outsideSelectButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should support toggling a Select inside an AccordionItem without getting stuck in a render-loop (#1466)", () => {
        render(
            <Accordion>
                <AccordionItem title="Velg tingen" startExpanded>
                    <Select name="items" searchable items={[{ label: "Item 3", value: "3" }]} label="Ting" />
                </AccordionItem>
            </Accordion>,
        );

        act(() => {
            const button = screen.getByTestId("jkl-select__button");
            userEvent.click(button);
        });

        expect(screen.getByTestId("jkl-select__search-input")).toBeVisible();
    });

    it("should not close the Select when clicking the input field", () => {
        const items = [
            { label: "Item 1", value: "1" },
            { label: "Item 2", value: "2" },
            { label: "Item 3", value: "3" },
        ];

        render(<Select name="items" items={items} label="Ting" searchable />);

        const openDropdownButtonElement = screen.getByTestId("jkl-select__button");
        const searchInputElement = screen.getByTestId("jkl-select__search-input");

        act(() => {
            userEvent.click(openDropdownButtonElement);
        });

        expect(searchInputElement).toBeVisible();

        act(() => {
            userEvent.click(searchInputElement);
        });

        expect(searchInputElement).toBeVisible();
    });
});

describe("a11y", () => {
    test("searchable select should be a11y compliant", async () => {
        const { container } = render(
            <Select name="items" searchable label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
    test("select should be a11y compliant", async () => {
        const { container } = render(
            <Select name="items" label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact select should be a11y compliant", async () => {
        const { container } = render(
            <Select name="items" forceCompact label="Select" items={["1", "2"]} value="1" helpLabel="Velg en av to" />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("aria-label should update correctly on change", async () => {
        const onChange = jest.fn();
        function WrappedSelect() {
            const [value, setValue] = useState<string>();

            const items = [
                { value: "apple", label: "Apple" },
                { value: "samsung", label: "Samsung" },
                { value: "huawei", label: "Huawei" },
                { value: "LG", label: "LG" },
            ];

            return (
                <Select
                    name="items"
                    label="Hvilket merke er telefonen?"
                    items={items}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange();
                    }}
                />
            );
        }

        const screen = render(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const firstItemButton = screen.getByText("Apple");

        act(() => {
            userEvent.click(dropdownButtonElement);
        });

        act(() => {
            userEvent.click(firstItemButton);
        });

        expect(onChange).toHaveBeenCalled();
        expect(screen.getByTestId("jkl-select__button").getAttribute("aria-label")).toContain("Apple");
    });
});
