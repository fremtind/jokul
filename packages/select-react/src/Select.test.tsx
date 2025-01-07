import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import {
    act,
    fireEvent,
    render,
    RenderOptions,
    waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PopupTip } from "../../tooltip-react/src";
import { Select } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup({
            delay: 5,
            advanceTimers: jest.advanceTimersByTime,
            skipHover: true,
        }),
        ...render(jsx, renderOptions),
    };
}

describe("Select", () => {
    it("should render correct amount of options", () => {
        const { getAllByTestId } = setup(
            <Select
                name="snoop"
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
            />,
        );

        const options = getAllByTestId("jkl-select__option");

        expect(options.length).toBe(5);
    });

    it("should be inline when specified", () => {
        const screen = setup(
            <Select
                name="snoop"
                inline
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
            />,
        );

        const dropdown = screen.getByTestId("jkl-select");
        expect(dropdown).toHaveClass("jkl-select--inline");
    });

    it("should open when clicked", async () => {
        const screen = setup(
            <Select
                name="snoop"
                inline
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
            />,
        );

        const button = screen.getByTestId("jkl-select__button");

        await act(async () => {
            await userEvent.click(button);
        });
        expect(screen.getByRole("option", { name: "drop" })).toBeVisible();
    });

    it("should open when arrow down is pressed", async () => {
        const screen = setup(
            <Select
                name="snoop"
                inline
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
            />,
        );

        const button = screen.getByTestId("jkl-select__button");

        await act(async () => {
            await userEvent.type(button, "{arrowdown}");
        });
        expect(screen.getByRole("option", { name: "drop" })).toBeVisible();
    });

    it("should use the specified value", () => {
        const onChange = jest.fn();
        const value = "drop";
        const { getByTestId } = setup(
            <Select
                name="snoop"
                onChange={onChange}
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
                value={value}
            />,
        );

        expect(onChange).toHaveBeenCalledTimes(0);
        expect(getByTestId("jkl-select__button")).toHaveTextContent(value);
        expect(getByTestId("jkl-native-select")).toHaveValue(value);
    });

    it("should not get stuck in a loop when changing the value from outside (https://github.com/fremtind/jokul/issues/3421#issuecomment-1440155891)", () => {
        const DoThing = () => {
            const [value, setValue] = useState<string>("");
            useEffect(() => {
                setValue("A");
            }, []);
            return (
                <div className="build-info-page">
                    <Select
                        name={"Hello"}
                        label={"Utbetalingsmottaker"}
                        items={["A", "B", "C"]}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                </div>
            );
        };

        const { getByTestId } = setup(<DoThing />);
        expect(getByTestId("jkl-select__button")).toHaveTextContent("A");
        expect(getByTestId("jkl-native-select")).toHaveValue("A");
    });

    it("should not get stuck in a loop if value is not in items (#3479)", () => {
        const onChange = jest.fn();
        const { getByTestId } = setup(
            <Select
                label="Items"
                name="items"
                items={["A", "B", "C"]}
                value="D"
                onChange={onChange}
            />,
        );

        expect(getByTestId("jkl-select__button")).toHaveTextContent("Velg");
        expect(getByTestId("jkl-native-select")).toHaveValue("");
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it("should not call onChange if value is undefined (#3421)", () => {
        const onChange = jest.fn();
        const { getByTestId } = setup(
            <Select
                label="Items"
                name="items"
                items={[
                    { label: "Item 1", value: "1" },
                    { label: "Item 2", value: "2" },
                    { label: "Item 3", value: "3" },
                ]}
                value={undefined}
                onChange={onChange}
            />,
        );

        expect(getByTestId("jkl-select__button")).toHaveTextContent("Velg");
        expect(getByTestId("jkl-native-select")).toHaveValue("");
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it("should not call onChange if value is changed from outside (#3439)", () => {
        const onChange = jest.fn();
        const DoThing = () => {
            const [value, setValue] = useState<string>("A");
            useEffect(() => {
                setValue("B");
            }, []);
            return (
                <div className="build-info-page">
                    <Select
                        name={"Hello"}
                        label={"Utbetalingsmottaker"}
                        items={["A", "B", "C"]}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            onChange();
                        }}
                    />
                </div>
            );
        };

        const { getByTestId } = setup(<DoThing />);
        expect(getByTestId("jkl-select__button")).toHaveTextContent("B");
        expect(getByTestId("jkl-native-select")).toHaveValue("B");
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it("should show the defaultValue set by react-hook-form (#2924, #3500)", async () => {
        type FormValues = {
            stilling: string;
        };

        function WrappedSelect(props: { defaultValues: FormValues }) {
            const { register } = useForm<FormValues>({
                defaultValues: props.defaultValues,
            });
            return (
                <form>
                    <Select
                        {...register("stilling", {
                            required: "Du må oppgi eierens stilling",
                        })}
                        items={[
                            "Designer",
                            "Utvikler",
                            "Tester",
                            "Leder",
                            "Annet",
                        ]}
                        label="Stilling"
                    />
                </form>
            );
        }

        const defaultValue = "Tester";
        const { getByTestId } = setup(
            <WrappedSelect defaultValues={{ stilling: defaultValue }} />,
        );

        expect(getByTestId("jkl-native-select")).toHaveValue(defaultValue); // Semantisk valgt
        expect(getByTestId("jkl-select__button").textContent).toBe(
            defaultValue,
        ); // Visuelt valgt
    });

    it("should change the controlled value of the select when clicking on a option", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
                />
            );
        }

        const { getByRole, getByText, getByTestId } = setup(<WrappedSelect />);
        const openDropdownButtonElement = getByText("Velg");

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const selectOption1Element = getByRole("option", { name: "Item 1" });

        await act(async () => {
            await userEvent.click(selectOption1Element);
        });

        expect(openDropdownButtonElement.textContent).toBe("Item 1");
        expect(getByTestId("jkl-native-select")).toHaveValue("1");
    });

    it("should change the uncontrolled value of the select when clicking on a option", async () => {
        function WrappedSelect() {
            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];
            return <Select name="items" label="List of items" items={items} />;
        }

        const { getByRole, getByText, getByTestId } = setup(<WrappedSelect />);
        const openDropdownButtonElement = getByText("Velg");

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const selectOption1Element = getByRole("option", { name: "Item 1" });

        await act(async () => {
            await userEvent.click(selectOption1Element);
        });

        expect(openDropdownButtonElement.textContent).toBe("Item 1");
        expect(getByTestId("jkl-native-select")).toHaveValue("1");
    });

    it("should have default text value in button when no option selected", () => {
        const { getByTestId } = setup(
            <Select
                name="snoop"
                items={["drop", "it", "like", "its", "hot"]}
                label="Snoop"
            />,
        );

        expect(getByTestId("jkl-select__button")).toHaveTextContent("Velg");
        expect(getByTestId("jkl-native-select")).toHaveValue("");
    });

    it("can be forced into compact mode", () => {
        const screen = setup(
            <Select
                name="count"
                items={["1", "2"]}
                label="test"
                density="compact"
            />,
        );

        expect(screen.getByTestId("jkl-select")).toHaveAttribute(
            "data-density",
            "compact",
        );
    });

    it("displays the ValuePair label of selected item on first render", () => {
        const onChange = jest.fn();
        const valuePairs = [{ value: "datagreier", label: "Fin lesbar tekst" }];

        const { getByTestId } = setup(
            <Select
                name="datagreier"
                label="test"
                items={valuePairs}
                value="datagreier"
                onChange={onChange}
            />,
        );

        expect(getByTestId("jkl-select__button").innerHTML).toBe(
            "Fin lesbar tekst",
        );
        expect(getByTestId("jkl-native-select")).toHaveValue("datagreier");
        expect(onChange).not.toHaveBeenCalled();
    });

    it("should call onFocus when clicking on select dropdown", async () => {
        const onFocus = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when clicking on something outside Select", async () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const outsideSelectButtonElement = screen.getByText("OUTSIDE BUTTON");

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        await act(async () => {
            await userEvent.click(outsideSelectButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should not call onBlur when clicking on a dropdown item", async () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        const firstItemButton = screen.getByRole("option", { name: "Item 1" });

        await act(async () => {
            await userEvent.click(firstItemButton);
        });

        expect(onBlur).not.toHaveBeenCalled();
    });

    it("should support toggling a Select inside an AccordionItem without getting stuck in a render-loop (#1466)", async () => {
        const screen = setup(
            <Accordion>
                <AccordionItem title="Velg tingen" startExpanded>
                    <Select
                        name="items"
                        items={[{ label: "Item 3", value: "3" }]}
                        label="Ting"
                    />
                </AccordionItem>
            </Accordion>,
        );

        await act(async () => {
            const button = screen.getByTestId("jkl-select__button");
            await userEvent.click(button);
        });

        expect(screen.getByTestId("jkl-select__button")).toBeVisible();
    });

    it("supports controlled value state", async () => {
        const TestControlledSelect = () => {
            const items = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];

            const [value, setValue] = useState("");

            return (
                <>
                    <button onClick={() => setValue(items[1].value)}>
                        Click
                    </button>
                    <Select
                        name="items"
                        items={items}
                        label="Ting"
                        value={value}
                    />
                </>
            );
        };

        const { getByText, getByTestId } = setup(<TestControlledSelect />);

        await act(async () => {
            await userEvent.click(getByText("Click"));
        });

        expect(getByTestId("jkl-select__button")).toHaveTextContent("Item 2");
        expect(getByTestId("jkl-native-select")).toHaveValue("2");
    });

    it("supports labels only for screen readers", () => {
        const screen = setup(
            <Select
                name="count"
                items={["1", "2"]}
                label="test"
                labelProps={{ srOnly: true }}
            />,
        );

        const label = screen.getByText("test");
        expect(label).toHaveClass("jkl-label--sr-only");
    });

    it("syncs with async value setting", async () => {
        const DoThing = () => {
            const [value, setValue] = useState<string>("");
            useEffect(() => {
                setValue("A");
            }, []);
            useEffect(() => {
                const timeout = setTimeout(() => {
                    setValue("B");
                }, 200);
                return () => {
                    clearTimeout(timeout);
                };
            }, []);
            return (
                <div className="build-info-page">
                    <Select
                        name={"Hello"}
                        label={"Utbetalingsmottaker"}
                        items={["A", "B", "C"]}
                        value={value}
                    />
                </div>
            );
        };

        const { getByTestId } = setup(<DoThing />);
        expect(getByTestId("jkl-select__button")).toHaveTextContent("A");
        expect(getByTestId("jkl-native-select")).toHaveValue("A");

        await waitFor(() => {
            expect(getByTestId("jkl-select__button")).toHaveTextContent("B");
            expect(getByTestId("jkl-native-select")).toHaveValue("B");
        });
    });
});

describe("Searchable select", () => {
    it("should keep search input hidden by default", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        expect(
            screen.getByLabelText("List of items", { selector: "input" }),
        ).not.toBeVisible();
    });

    it("should change the value of the select when clicking on a option", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const { getByRole, getByText, getByTestId } = setup(<WrappedSelect />);
        const openDropdownButtonElement = getByText("Velg");

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const selectOption1Element = getByRole("option", { name: "Item 1" });

        await act(async () => {
            await userEvent.click(selectOption1Element);
        });
        expect(openDropdownButtonElement.textContent).toBe("Item 1");
        expect(getByTestId("jkl-native-select")).toHaveValue("1");
    });

    it("should change visibility of search input when opening select dropdown", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });

        expect(searchInputElement).not.toBeVisible();

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        expect(searchInputElement).toBeVisible();
    });

    it("should keep all items visible when nothing has been typed into search input", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        expect(searchInputElement).toHaveAttribute("value", "");
        expect(screen.getByRole("option", { name: "Item 1" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 2" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 3" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 4" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 5" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 6" })).toBeVisible();
    });

    it("should change visibility of options who's label does not match the input search value", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        expect(searchInputElement).toHaveAttribute("value", "");
        expect(screen.getByRole("option", { name: "Item 11" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 12" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 13" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 24" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 25" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 26" })).toBeVisible();

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "1" } });
        });

        expect(screen.getByRole("option", { name: "Item 11" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 12" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 13" })).toBeVisible();
        expect(screen.queryByRole("option", { name: "Item 24" })).toBeFalsy();
        expect(screen.queryByRole("option", { name: "Item 25" })).toBeFalsy();
        expect(screen.queryByRole("option", { name: "Item 26" })).toBeFalsy();
    });

    it("should clear search input after selecting an item and opening select options again", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        expect(searchInputElement).toHaveAttribute("value", "");

        const firstOptionElement = screen.getByRole("option", {
            name: "Item 11",
        });
        act(() => {
            fireEvent.change(searchInputElement, {
                target: { value: "Item 11" },
            });
        });

        expect(searchInputElement).toHaveAttribute("value", "Item 11");

        await act(async () => {
            await userEvent.click(firstOptionElement);
        });

        expect(openDropdownButtonElement.textContent).toBe("Item 11");

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });
        expect(searchInputElement).toHaveAttribute("value", "");
    });

    it("should have a case insensitive search", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const openDropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "item" } });
        });

        expect(searchInputElement).toHaveAttribute("value", "item");
        expect(screen.getByRole("option", { name: "ITEM 1" })).toBeVisible();
        expect(screen.getByRole("option", { name: "item 2" })).toBeVisible();
        expect(screen.getByRole("option", { name: "ItEm 3" })).toBeVisible();
        expect(screen.getByRole("option", { name: "iteM 4" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 5" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 6" })).toBeVisible();

        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "ITEM" } });
        });

        expect(searchInputElement).toHaveAttribute("value", "ITEM");
        expect(screen.getByRole("option", { name: "ITEM 1" })).toBeVisible();
        expect(screen.getByRole("option", { name: "item 2" })).toBeVisible();
        expect(screen.getByRole("option", { name: "ItEm 3" })).toBeVisible();
        expect(screen.getByRole("option", { name: "iteM 4" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 5" })).toBeVisible();
        expect(screen.getByRole("option", { name: "Item 6" })).toBeVisible();
    });

    it("should focus search input field when clicking dropdown button", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });
        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        expect(document.activeElement).toBe(searchInputElement);
    });

    it("should call onFocus when select button is clicked in searchable Select", async () => {
        const onFocus = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        expect(onFocus).toBeCalledTimes(1);
    });

    it("should not call onBlur when clicking on a searchable Select", async () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        expect(onBlur).not.toHaveBeenCalled();
    });

    it("should call onBlur when clicking on something outside searchable Select", async () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const outsideSelectButtonElement = screen.getByText("OUTSIDE BUTTON");

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        await act(async () => {
            await userEvent.click(outsideSelectButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus only once when performing multiple actions and focus shifts inside the searchable Select", async () => {
        const onBlur = jest.fn();
        function WrappedSelect() {
            const [state, setState] = useState<string>("");

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
        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        const outsideSelectButtonElement = screen.getByText("OUTSIDE BUTTON");
        const searchInputElement = screen.getByLabelText("List of items", {
            selector: "input",
        });

        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        const firstItemButtonElement = screen.getByRole("option", {
            name: "Item 1",
        });
        await act(async () => {
            await userEvent.type(searchInputElement, "item 1");
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        await act(async () => {
            // userEvent.click(firstItemButtonElement); THIS SHOULD WORK BUT DOESN'T FOR SOME REASON. JSDOM BUG?
            firstItemButtonElement.focus();
            await userEvent.click(firstItemButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        await act(async () => {
            await userEvent.click(outsideSelectButtonElement);
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should support toggling a Select inside an AccordionItem without getting stuck in a render-loop (#1466)", async () => {
        const screen = setup(
            <Accordion>
                <AccordionItem title="Velg tingen" startExpanded>
                    <Select
                        name="items"
                        searchable
                        items={[{ label: "Item 3", value: "3" }]}
                        label="Ting"
                    />
                </AccordionItem>
            </Accordion>,
        );

        await act(async () => {
            const button = screen.getByTestId("jkl-select__button");
            await userEvent.click(button);
        });

        expect(screen.getByTestId("jkl-select__search-input")).toBeVisible();
    });

    it("should not close the Select when clicking the input field", async () => {
        const items = [
            { label: "Item 1", value: "1" },
            { label: "Item 2", value: "2" },
            { label: "Item 3", value: "3" },
        ];

        const screen = setup(
            <Select name="items" items={items} label="Ting" searchable />,
        );

        const openDropdownButtonElement =
            screen.getByTestId("jkl-select__button");
        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const searchInputElement = screen.getByTestId(
            "jkl-select__search-input",
        );
        expect(searchInputElement).toBeVisible();

        await act(async () => {
            await userEvent.click(searchInputElement);
        });

        expect(searchInputElement).toBeVisible();
    });

    it("should support custom filtering function", async () => {
        const items = [
            { label: "foo", value: "1" },
            { label: "bar", value: "2" },
            { label: "baz", value: "3" },
        ];

        const screen = setup(
            <Select
                name="items"
                items={items}
                label="Ting"
                searchable={(filter, item) => {
                    if (typeof item === "object") {
                        return item.value === filter;
                    } else {
                        return item === filter;
                    }
                }}
            />,
        );

        const openDropdownButtonElement =
            screen.getByTestId("jkl-select__button");
        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const searchInputElement = screen.getByTestId(
            "jkl-select__search-input",
        );
        act(() => {
            fireEvent.change(searchInputElement, { target: { value: "3" } });
        });

        expect(screen.getByRole("option", { name: "baz" })).toBeVisible();
        expect(screen.queryByRole("option", { name: "foo" })).toBeFalsy();
        expect(screen.queryByRole("option", { name: "bar" })).toBeFalsy();
    });

    it("should render a popup-tip when passed as a prop", async () => {
        const items = [
            { label: "foo", value: "1" },
            { label: "bar", value: "2" },
            { label: "baz", value: "3" },
        ];
        const screen = setup(
            <Select
                name="items"
                items={items}
                label="Ting"
                tooltip={
                    <PopupTip content="Jeg er en tooltip" placement="left" />
                }
            />,
        );
        expect(screen.getByText("Vis hjelpetekst")).toBeInTheDocument();
    });

    it("should render a visible tooltip when initially open", async () => {
        const items = [
            { label: "foo", value: "1" },
            { label: "bar", value: "2" },
            { label: "baz", value: "3" },
        ];
        const screen = setup(
            <Select
                name="items"
                items={items}
                label="Ting"
                tooltip={
                    <PopupTip
                        content="Jeg er en tooltip"
                        placement="left"
                        initialOpen
                    />
                }
            />,
        );

        await waitFor(() =>
            expect(screen.getByText("Jeg er en tooltip")).toBeVisible(),
        );
    });

    it("should close the listbox if a tooltip trigger receives focus", async () => {
        const items = [
            { label: "foo", value: "1" },
            { label: "bar", value: "2" },
            { label: "baz", value: "3" },
        ];

        const screen = setup(
            <Select
                name="items"
                items={items}
                label="Ting"
                tooltip={
                    <PopupTip content="Jeg er en tooltip" placement="left" />
                }
            />,
        );

        const openDropdownButtonElement =
            screen.getByTestId("jkl-select__button");
        await userEvent.click(openDropdownButtonElement);

        const listbox = screen.getByRole("listbox");
        expect(listbox).toBeVisible();

        const tooltipTrigger = screen.getByTestId(
            "jkl-tooltip-question-button",
        );
        await act(async () => {
            tooltipTrigger.focus();
        });

        expect(listbox).not.toBeVisible();
    });

    it("should return focus to the input when an option is selected", async () => {
        const items = [
            { label: "foo", value: "1" },
            { label: "bar", value: "2" },
            { label: "baz", value: "3" },
        ];

        const screen = setup(
            <Select
                name="items"
                items={items}
                label="Ting"
                tooltip={
                    <PopupTip content="Jeg er en tooltip" placement="left" />
                }
            />,
        );

        const button = screen.getByTestId("jkl-select__button");
        await userEvent.click(button);

        const option = screen.getAllByTestId("jkl-select__option")[0];
        await userEvent.click(option);

        expect(button).toHaveFocus();
    });
});

describe("a11y", () => {
    test("searchable select should be a11y compliant", async () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="Select"
                items={["1", "2"]}
                value="1"
                helpLabel="Velg en av to"
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("select should be a11y compliant", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Select"
                items={["1", "2"]}
                value="1"
                helpLabel="Velg en av to"
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact select should be a11y compliant", async () => {
        const { container } = setup(
            <Select
                name="items"
                density="compact"
                label="Select"
                items={["1", "2"]}
                value="1"
                helpLabel="Velg en av to"
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("aria-label should update correctly on change", async () => {
        const onChange = jest.fn();
        function WrappedSelect() {
            const [value, setValue] = useState<string>("");

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

        const screen = setup(<WrappedSelect />);

        const dropdownButtonElement = screen.getByText("Velg");
        await act(async () => {
            await userEvent.click(dropdownButtonElement);
        });

        const firstItemButton = screen.getByRole("option", { name: "Apple" });
        await act(async () => {
            await userEvent.click(firstItemButton);
        });

        expect(onChange).toHaveBeenCalled();
        expect(
            screen.getByTestId("jkl-select__button").getAttribute("aria-label"),
        ).toContain("Apple");
    });
});
