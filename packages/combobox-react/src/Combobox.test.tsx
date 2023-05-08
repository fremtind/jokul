import { Tag } from "@fremtind/jkl-tag-react";
import { render, RenderOptions, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { useState } from "react";
import { Combobox, ComboboxValuePair } from ".";

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

describe("Combobox", () => {
    it("should open when clicked", async () => {
        const screen = setup(
            <Combobox
                name="snoop"
                items={[
                    { label: "drop", value: "drop" },
                    { label: "it", value: "it" },
                    { label: "like", value: "like" },
                    { label: "its", value: "its" },
                    { label: "hot", value: "hot" },
                ]}
                label="Snoop"
                onChange={() => {
                    return;
                }}
            />,
        );

        const button = screen.getByTestId("jkl-combobox__button");

        await act(async () => {
            await userEvent.click(button);
        });
        expect(screen.getByRole("option", { name: "drop" })).toBeVisible();
    });

    it("should open when arrow down is pressed", async () => {
        const screen = setup(
            <Combobox
                name="snoop"
                items={[
                    { label: "drop", value: "drop" },
                    { label: "it", value: "it" },
                    { label: "like", value: "like" },
                    { label: "its", value: "its" },
                    { label: "hot", value: "hot" },
                ]}
                label="Snoop"
                onChange={() => {
                    return;
                }}
            />,
        );

        const button = screen.getByTestId("jkl-combobox__button");

        await act(async () => {
            await userEvent.type(button, "{arrowdown}");
        });
        expect(screen.getByRole("option", { name: "drop" })).toBeVisible();
    });

    it("can be forced into compact mode", () => {
        const screen = setup(
            <Combobox
                name="snoop"
                density="compact"
                items={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                ]}
                label="test"
                onChange={() => {
                    return;
                }}
            />,
        );

        expect(screen.getByTestId("jkl-combobox")).toHaveAttribute("data-density", "compact");
    });

    it("should change the value of the combobox when selecting two options", async () => {
        function WrappedCombobox() {
            const [selectedValues, setSelectedValues] = useState<Array<ComboboxValuePair>>([]);

            const items: ComboboxValuePair[] = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];

            return (
                <Combobox
                    name="items"
                    placeholder="Søk"
                    label="List of items"
                    items={items}
                    value={selectedValues}
                    onChange={(event) => {
                        setSelectedValues(event.target.selectedOptions);
                    }}
                />
            );
        }
        const { getByRole, getByTestId, getAllByTestId } = setup(<WrappedCombobox />);
        const openDropdownButtonElement = getByTestId("jkl-combobox__button");

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const selectOption1Element = getByRole("option", { name: "Item 1" });

        await act(async () => {
            await userEvent.click(selectOption1Element);
        });

        const selectOption2Element = getByRole("option", { name: "Item 2" });

        await act(async () => {
            await userEvent.click(selectOption2Element);
        });

        const selectedTags = getAllByTestId("jkl-tag__content");
        expect(selectedTags).toHaveLength(2);
        expect(selectedTags[0]).toHaveTextContent("Item 1");
        expect(selectedTags[1]).toHaveTextContent("Item 2");
    });

    it("should clear all values when clicking remove all button", async () => {
        function WrappedCombobox() {
            const [selectedValues, setSelectedValues] = useState<Array<ComboboxValuePair>>([]);

            const items: ComboboxValuePair[] = [
                { label: "Item 1", value: "1" },
                { label: "Item 2", value: "2" },
                { label: "Item 3", value: "3" },
            ];

            return (
                <Combobox
                    name="items"
                    placeholder="Søk"
                    label="List of items"
                    items={items}
                    value={selectedValues}
                    onChange={(event) => {
                        setSelectedValues(event.target.selectedOptions);
                    }}
                />
            );
        }
        const { getByRole, getByTestId } = setup(<WrappedCombobox />);
        const openDropdownButtonElement = getByTestId("jkl-combobox__button");

        await act(async () => {
            await userEvent.click(openDropdownButtonElement);
        });

        const selectOption1Element = getByRole("option", { name: "Item 1" });

        await act(async () => {
            await userEvent.click(selectOption1Element);
        });

        expect(getByTestId("jkl-tag").textContent).toBe("Item 1");

        const selectOption2Element = getByRole("option", { name: "Item 2" });

        await act(async () => {
            await userEvent.click(selectOption2Element);
        });

        const removeOptionsButton = getByTestId("jkl-combobox__remove-all");

        await act(async () => {
            await userEvent.click(removeOptionsButton);
        });

        expect(getByTestId("jkl-combobox__tags")).not.toContain(<Tag />);
    });
});

describe("a11y", () => {
    test("Combobox should be a11y compliant", async () => {
        const { container } = setup(
            <Combobox
                name="items"
                label="Combobox"
                items={[
                    { label: "Item 1", value: "1" },
                    { label: "Item 2", value: "2" },
                    { label: "Item 3", value: "3" },
                ]}
                onChange={() => {
                    return;
                }}
                helpLabel="Velg to eller mer"
                errorLabel="Du må velge to eller mer"
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact combobox should be a11y compliant", async () => {
        const { container } = setup(
            <Combobox
                name="items"
                density="compact"
                label="Combobox"
                onChange={() => {
                    return;
                }}
                items={[
                    { label: "Item 1", value: "1" },
                    { label: "Item 2", value: "2" },
                    { label: "Item 3", value: "3" },
                ]}
                helpLabel="Velg to eller mer"
                errorLabel="Du må velge to eller mer"
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
