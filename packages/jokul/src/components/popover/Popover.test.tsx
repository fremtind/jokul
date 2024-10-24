import { render, screen, waitFor } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Popover } from "./Popover.js";

// https://github.com/testing-library/user-event/issues/1146
const userEvent = UserEventModule.default ?? UserEventModule;

describe("Popover", () => {
    it("should open when trigger is clicked (uncontrolled)", async () => {
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

    it("should render when open is controlled", () => {
        render(
            <Popover open={true}>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.getByTestId("popover-id")).toBeVisible();
    });

    it("should not render when open is controlled and set to false", () => {
        render(
            <Popover open={false}>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.queryByTestId("popover-id")).not.toBeInTheDocument();
    });

    it("should call onOpenChange when trigger is clicked (controlled)", async () => {
        const user = userEvent.setup();

        const handleOpenChange = vi.fn();

        render(
            <Popover open={true} onOpenChange={handleOpenChange}>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        await user.click(screen.getByText("Open Popover"));

        await waitFor(() => {
            expect(handleOpenChange).toHaveBeenCalled();
        });
    });

    it("should open on hover when hoverProps are enabled", async () => {
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

    it("should have role changed when roleOptions are set", () => {
        render(
            <Popover open={true} roleOptions={{ role: "menu" }}>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">Content</Popover.Content>
            </Popover>,
        );

        expect(screen.getByTestId("popover-id")).toHaveAttribute("role", "menu");
    });

    it("should correctly trap focus when modal is enabled", async () => {
        const user = userEvent.setup();

        render(
            <Popover modal={true}>
                <Popover.Trigger>Open Popover</Popover.Trigger>
                <Popover.Content data-testid="popover-id">
                    <button>Focusable Element</button>
                </Popover.Content>
            </Popover>,
        );

        await user.tab();

        await user.keyboard("[Space]");

        const focusableElement = screen.getByText("Focusable Element");

        await waitFor(() => {
            expect(focusableElement).toHaveFocus();
        });
    });
});
