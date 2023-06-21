import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { PopupTip } from "./PopupTip";

describe("PopupTip", () => {
    it("should render as the correct button", () => {
        render(<PopupTip content="Forklarende tekst" />);

        const trigger = screen.getByRole("button");
        expect(trigger).toBeInTheDocument();
        expect(trigger.tagName).toBe("BUTTON");
        expect(trigger).toHaveClass("jkl-tooltip-question-button");
    });

    it("should render a title for screen readers", () => {
        render(<PopupTip content="Forklarende tekst" />);

        expect(screen.getByText(/Vis hjelpetekst/)).toBeInTheDocument();
    });

    it("should trigger passed handlers", async () => {
        const handleMouseOver = jest.fn();
        const handleMouseOut = jest.fn();
        const handleFocus = jest.fn();
        const handleBlur = jest.fn();

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
        test("PopupTip should be a11y compliant", async () => {
            const { container } = render(<PopupTip initialOpen content="Forklarende tekst" />);

            await act(async () => {
                const results = await axe(container);
                expect(results).toHaveNoViolations();
            });
        });
    });
});
