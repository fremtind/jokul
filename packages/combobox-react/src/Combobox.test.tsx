import { render, RenderOptions, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { Combobox } from ".";

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
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
