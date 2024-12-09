import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { PopupTip } from "./PopupTip.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("PopupTip", () => {
    it("should render as the correct button", () => {
        render(<PopupTip content="Forklarende tekst" />);

        const trigger = screen.getByRole("button");
        expect(trigger).toBeInTheDocument();
        expect(trigger.tagName).toBe("BUTTON");
        expect(trigger).toHaveClass("jkl-tooltip-question-button");
    });

    it("should announce content for screen readers", async () => {
        render(<PopupTip content="Forklarende tekst" />);
        const trigger = screen.getByRole("button");

        const content = screen.getByTestId("popuptip-content");
        expect(content).toHaveAttribute("aria-live", "polite");
        expect(content).toHaveTextContent("");

        await userEvent.click(trigger);

        expect(content).toHaveTextContent("Forklarende tekst");
    });

    it("should trigger passed handlers", async () => {
        const handleMouseOver = vi.fn();
        const handleMouseOut = vi.fn();
        const handleFocus = vi.fn();
        const handleBlur = vi.fn();

        render(
            <PopupTip
                content="Forklarende tekst"
                triggerProps={{
                    onMouseOver: handleMouseOver,
                    onMouseOut: handleMouseOut,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                }}
            />,
        );

        const user = userEvent.setup();
        const trigger = screen.getByRole("button");

        await user.hover(trigger);
        await user.unhover(trigger);
        await user.keyboard("{tab}");
        await user.keyboard("{tab}");

        expect(handleMouseOver).toHaveBeenCalledTimes(1);
        expect(handleMouseOut).toHaveBeenCalledTimes(1);
        expect(handleFocus).toHaveBeenCalledTimes(1);
        expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    describe("a11y", () => {
        it("PopupTip should be a11y compliant", async () => {
            const { container } = render(
                <PopupTip initialOpen content="Forklarende tekst" />,
            );

            await act(async () => {
                const results = await axe(container);
                expect(results).toHaveNoViolations();
            });
        });
    });
});
