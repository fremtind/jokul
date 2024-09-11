import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Popover } from ".";

describe("Popover", () => {
    test("should open when trigger is clicked (uncontrolled)", async () => {
        const user = userEvent.setup();

        render(
            <Popover>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        // Popover should be hidden initially
        expect(screen.queryByTestId("popover-id")).not.toBeInTheDocument();

        // Click the trigger to open the popover
        await user.click(screen.getByText("Open Popover"));

        // Popover should be visible
        expect(screen.getByTestId("popover-id")).toBeVisible();
    });

    test("should render when open is controlled", () => {
        render(
            <Popover floatingOptions={{ open: true }}>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.getByTestId("popover-id")).toBeVisible();
    });

    test("should not render when open is controlled and set to false", () => {
        render(
            <Popover floatingOptions={{ open: false }}>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.queryByTestId("popover-id")).not.toBeInTheDocument();
    });

    test("should call onOpenChange when trigger is clicked (controlled)", async () => {
        const user = userEvent.setup();

        const handleOpenChange = jest.fn();

        render(
            <Popover floatingOptions={{ open: true, onOpenChange: handleOpenChange }}>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        await user.click(screen.getByText("Open Popover"));

        expect(handleOpenChange).toHaveBeenCalledWith(true);
    });

    test("should open on hover when hoverProps are enabled", async () => {
        const user = userEvent.setup();

        render(
            <Popover hoverOptions={{ enabled: true }}>
                <Popover.Trigger>Hover Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.queryByTestId("popover-id")).not.toBeInTheDocument();

        await user.hover(screen.getByText("Hover Popover"));

        expect(screen.queryByTestId("popover-id")).toBeInTheDocument();

        await user.unhover(screen.getByText("Hover Popover"));

        expect(screen.queryByTestId("popover-id")).not.toBeInTheDocument();
    });

    test("should have role changed when roleProps are set", () => {
        render(
            <Popover floatingOptions={{ open: false }} roleOptions={{ role: "menu" }}>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.getByTestId("popover-id")).toHaveAttribute("role", "menu");
    });

    test("should correctly trap focus when modal is enabled", async () => {
        const user = userEvent.setup();

        render(
            <Popover floatingFocusManagerOptions={{ modal: true }}>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">
                    <button>Focusable Element</button>
                </Popover.Content>
            </Popover>,
        );

        await user.tab();

        await user.keyboard("[Space]");

        const focusableElement = screen.getByText("Focusable Element");

        expect(focusableElement).toHaveFocus();
    });
});
