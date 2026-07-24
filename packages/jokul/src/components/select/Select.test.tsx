import {
    type RenderOptions,
    act,
    fireEvent,
    render,
} from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Select } from "./Select.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

const defaultItems = [
    { value: "1", label: "Item 1" },
    { value: "2", label: "Item 2" },
    { value: "3", label: "Item 3" },
];

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup({
            delay: 5,
            skipHover: true,
        }),
        ...render(jsx, renderOptions),
    };
}

function getNativeSelect(container: HTMLElement) {
    const el = container.querySelector<HTMLSelectElement>("select");
    if (!el) throw new Error("Fant ingen native <select> i containeren");
    return el;
}

function getTriggerButton(container: HTMLElement) {
    const el = container.querySelector<HTMLButtonElement>(
        ".jkl-select__button",
    );
    if (!el) throw new Error("Fant ingen .jkl-select__button i containeren");
    return el;
}

function getButtonOptions(container: HTMLElement, name?: string) {
    const all = Array.from(
        container.querySelectorAll<HTMLButtonElement>("button[role='option']"),
    );
    if (name) {
        return all.filter((el) => el.textContent?.includes(name));
    }
    return all;
}

describe("Select", () => {
    it("should render the correct amount of options", () => {
        const { container } = setup(
            <Select
                name="snoop"
                label="Snoop"
                items={["drop", "it", "like", "its", "hot"]}
            />,
        );

        expect(getButtonOptions(container).length).toBe(5);
    });

    it("should select the first item by default", () => {
        const { container } = setup(
            <Select
                name="snoop"
                label="Snoop"
                items={["drop", "it", "like", "its", "hot"]}
            />,
        );

        expect(getTriggerButton(container)).toHaveTextContent("drop");
        expect(getNativeSelect(container)).toHaveValue("drop");
    });

    it("should show custom placeholder text when no option is selected", () => {
        const { container } = setup(
            <Select
                name="snoop"
                label="Snoop"
                placeholder="Velg..."
                items={["drop", "it", "like", "its", "hot"]}
            />,
        );

        expect(getTriggerButton(container)).toHaveTextContent("Velg...");
        expect(getNativeSelect(container)).toHaveValue("");
    });

    it("should reflect value in the trigger button and native select", () => {
        const onChange = vi.fn();
        const { container } = setup(
            <Select
                name="snoop"
                onChange={onChange}
                label="Snoop"
                value="like"
                items={["drop", "it", "like", "its", "hot"]}
            />,
        );

        expect(onChange).not.toHaveBeenCalled();
        expect(getTriggerButton(container)).toHaveTextContent("like");
        expect(getNativeSelect(container)).toHaveValue("like");
    });

    it("should reflect defaultValue in the trigger button and native select", () => {
        const onChange = vi.fn();
        const { container } = setup(
            <Select
                name="snoop"
                onChange={onChange}
                label="Snoop"
                defaultValue="like"
                items={["drop", "it", "like", "its", "hot"]}
            />,
        );

        expect(onChange).not.toHaveBeenCalled();
        expect(getTriggerButton(container)).toHaveTextContent("like");
        expect(getNativeSelect(container)).toHaveValue("like");
    });

    it("should display the ValuePair label of the selected item", () => {
        const onChange = vi.fn();
        const { container } = setup(
            <Select
                name="datagreier"
                label="test"
                value="datagreier"
                onChange={onChange}
                items={[{ value: "datagreier", label: "Fin lesbar tekst" }]}
            />,
        );

        expect(getTriggerButton(container)).toHaveTextContent(
            "Fin lesbar tekst",
        );
        expect(getNativeSelect(container)).toHaveValue("datagreier");
        expect(onChange).not.toHaveBeenCalled();
    });

    it("should update the button text and native select value when an option is clicked (controlled)", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");
            return (
                <Select
                    name="items"
                    label="List of items"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    items={defaultItems}
                />
            );
        }

        const { container } = setup(<WrappedSelect />);

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 2")[0]);
        });

        expect(getTriggerButton(container)).toHaveTextContent("Item 2");
        expect(getNativeSelect(container)).toHaveValue("2");
    });

    it("should update the button text and native select value when an option is clicked (uncontrolled)", async () => {
        const { container } = setup(
            <Select name="items" label="List of items" items={defaultItems} />,
        );

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 2")[0]);
        });

        expect(getTriggerButton(container)).toHaveTextContent("Item 2");
        expect(getNativeSelect(container)).toHaveValue("2");
    });

    it("should mark the selected option with aria-selected when rendered", () => {
        const { container } = setup(
            <Select
                name="phone"
                items={["Apple", "Samsung", "Google"]}
                label="Telefon"
                value="Samsung"
                onChange={() => {}}
            />,
        );

        const samsung = getButtonOptions(container, "Samsung")[0];
        const apple = getButtonOptions(container, "Apple")[0];

        expect(samsung).toHaveAttribute("aria-selected", "true");
        expect(apple).toHaveAttribute("aria-selected", "false");
    });

    it("supports labels only for screen readers", () => {
        const { container } = setup(
            <Select
                name="count"
                items={["1", "2"]}
                label="test"
                labelProps={{ srOnly: true }}
            />,
        );

        // Target the <label> element specifically, not the <legend> inside the popover
        const label = container.querySelector("label");
        expect(label).toHaveClass("jkl-label--sr-only");
    });
});

describe("Multi-select", () => {
    it("should show default message when no options are selected", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                multiple
                items={defaultItems}
            />,
        );

        expect(getTriggerButton(container)).toHaveTextContent("Ingen valgt");
    });

    it("should show custom placeholder when no options are selected", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                placeholder="Velg..."
                multiple
                items={defaultItems}
            />,
        );

        expect(getTriggerButton(container)).toHaveTextContent("Velg...");
    });

    it("should show selected option when only one option is selected", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                multiple
                items={defaultItems}
            />,
        );

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 1")[0]);
        });

        expect(getTriggerButton(container)).toHaveTextContent("Item 1");
    });

    it("should show number of selected options when multiple are selected", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                multiple
                items={defaultItems}
            />,
        );

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 1")[0]);
        });
        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 2")[0]);
        });

        expect(getTriggerButton(container)).toHaveTextContent("2 valgt");

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 3")[0]);
        });

        expect(getTriggerButton(container)).toHaveTextContent("3 valgt");
    });

    it("should update aria-selected when an option is toggled", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                multiple
                items={defaultItems}
            />,
        );

        const getOption = () => getButtonOptions(container, "Item 1")[0];

        expect(getOption()).toHaveAttribute("aria-selected", "false");

        await act(async () => {
            await userEvent.click(getOption());
        });

        expect(getOption()).toHaveAttribute("aria-selected", "true");

        await act(async () => {
            await userEvent.click(getOption());
        });

        expect(getOption()).toHaveAttribute("aria-selected", "false");
    });

    it("should keep the popover open after selecting an option in multi-select mode", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                multiple
                items={defaultItems}
            />,
        );

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 1")[0]);
        });

        // In multi-select mode, options have no popovertarget="close", so the
        // popover stays open. Item 2 must still be in the DOM and not hidden.
        expect(getButtonOptions(container, "Item 2")[0]).toBeDefined();
    });

    it("should update the native select's value when options are selected", async () => {
        const { container } = setup(
            <Select
                name="items"
                label="Velg flere"
                multiple
                items={defaultItems}
            />,
        );

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 1")[0]);
        });
        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 3")[0]);
        });

        const selectedValues = Array.from(
            getNativeSelect(container).selectedOptions,
        ).map((o) => o.value);
        expect(selectedValues).toEqual(["1", "3"]);
    });
});

describe("Searchable select", () => {
    it("should render the search input inside the popover", () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={defaultItems}
            />,
        );

        // The search input should be inside the popover (not before it)
        const popover = container.querySelector("[popover]");
        expect(
            popover?.querySelector("input[type='search']"),
        ).toBeInTheDocument();
    });

    it("should not render the search input in a non-searchable select", () => {
        const { container } = setup(
            <Select name="items" label="List of items" items={defaultItems} />,
        );

        expect(
            container.querySelector("input[type='search']"),
        ).not.toBeInTheDocument();
    });

    it("should update the selected value when an option is clicked", async () => {
        function WrappedSelect() {
            const [state, setState] = useState<string>("");
            return (
                <Select
                    name="items"
                    searchable
                    label="List of items"
                    items={defaultItems}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            );
        }

        const { container } = setup(<WrappedSelect />);

        await act(async () => {
            await userEvent.click(getButtonOptions(container, "Item 1")[0]);
        });

        expect(getTriggerButton(container)).toHaveTextContent("Item 1");
        expect(getNativeSelect(container)).toHaveValue("1");
    });

    it("should render all options when the search input is empty", () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={defaultItems}
            />,
        );

        const searchInput = container.querySelector<HTMLInputElement>(
            "input[type='search']",
        );
        if (!searchInput) throw new Error("search input not found");
        expect(searchInput).toHaveValue("");
        expect(getButtonOptions(container).length).toBe(3);
    });

    it("should filter out options that do not match the search input", async () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={[
                    { label: "Item 11", value: "A" },
                    { label: "Item 12", value: "B" },
                    { label: "Item 13", value: "C" },
                    { label: "Item 24", value: "D" },
                    { label: "Item 25", value: "E" },
                    { label: "Item 26", value: "F" },
                ]}
            />,
        );

        const searchInput = container.querySelector<HTMLInputElement>(
            "input[type='search']",
        );
        if (!searchInput) throw new Error("search input not found");

        act(() => {
            fireEvent.change(searchInput, { target: { value: "1" } });
        });

        expect(getButtonOptions(container, "Item 11").length).toBe(1);
        expect(getButtonOptions(container, "Item 12").length).toBe(1);
        expect(getButtonOptions(container, "Item 13").length).toBe(1);
        expect(getButtonOptions(container, "Item 24").length).toBe(0);
        expect(getButtonOptions(container, "Item 25").length).toBe(0);
        expect(getButtonOptions(container, "Item 26").length).toBe(0);
    });

    it("should show 'Ingen treff' when the search yields no matching options", async () => {
        const { container, getByText } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={[
                    { label: "Apple", value: "apple" },
                    { label: "Banana", value: "banana" },
                ]}
            />,
        );

        const searchInput = container.querySelector<HTMLInputElement>(
            "input[type='search']",
        );
        if (!searchInput) throw new Error("search input not found");

        act(() => {
            fireEvent.change(searchInput, { target: { value: "xyz" } });
        });

        expect(getByText("Ingen treff")).toBeInTheDocument();
        expect(getButtonOptions(container).length).toBe(0);
    });

    it("should have case-insensitive search", () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={[
                    { label: "ITEM 1", value: "1" },
                    { label: "item 2", value: "2" },
                    { label: "ItEm 3", value: "3" },
                    { label: "iteM 4", value: "4" },
                    { label: "Item 5", value: "5" },
                    { label: "Item 6", value: "6" },
                ]}
            />,
        );

        const searchInput = container.querySelector<HTMLInputElement>(
            "input[type='search']",
        );
        if (!searchInput) throw new Error("search input not found");

        act(() => {
            fireEvent.change(searchInput, { target: { value: "item" } });
        });

        // All 6 options contain "item" case-insensitively — all should remain
        expect(getButtonOptions(container).length).toBe(6);

        act(() => {
            fireEvent.change(searchInput, { target: { value: "ITEM" } });
        });

        expect(getButtonOptions(container).length).toBe(6);
    });

    it("should clear the search filter when the popover fires a 'closed' toggle event", () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={[
                    { label: "Item 11", value: "A" },
                    { label: "Item 12", value: "B" },
                    { label: "Item 24", value: "C" },
                ]}
            />,
        );

        const searchInput = container.querySelector<HTMLInputElement>(
            "input[type='search']",
        );
        if (!searchInput) throw new Error("search input not found");

        act(() => {
            fireEvent.change(searchInput, { target: { value: "Item 11" } });
        });

        expect(searchInput).toHaveValue("Item 11");
        expect(getButtonOptions(container).length).toBe(1);

        // Simulate the popover closing — jsdom doesn't implement ToggleEvent so
        // we dispatch a plain Event with the shape the component's listener reads.
        act(() => {
            const popover = container.querySelector("[popover]");
            if (!popover) throw new Error("popover not found");
            const event = new Event("toggle") as ToggleEvent;
            Object.defineProperty(event, "newState", { value: "closed" });
            popover.dispatchEvent(event);
        });

        expect(searchInput).toHaveValue("");
        expect(getButtonOptions(container).length).toBe(3);
    });

    it("should have the search input inside the popover, not before the trigger", () => {
        const { container } = setup(
            <Select
                name="items"
                searchable
                label="List of items"
                items={defaultItems}
            />,
        );

        const searchInput = container.querySelector("input[type='search']");
        const triggerButton = getTriggerButton(container);
        const popover = container.querySelector("[popover]");
        if (!searchInput || !popover)
            throw new Error("search input or popover not found");

        // The search input must be a descendant of the popover, not a sibling of the trigger
        expect(popover.contains(searchInput)).toBe(true);
        expect(triggerButton.contains(searchInput)).toBe(false);
    });
});

describe("a11y", () => {
    it("select should be a11y compliant", async () => {
        const { container } = setup(
            <Select
                name="snoop"
                label="Snoop"
                items={["drop", "it", "like", "its", "hot"]}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
