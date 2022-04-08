import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToggleSlider } from ".";
import { axe } from "jest-axe";

const fn = jest.fn();

describe("ToggleSlider", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it("should be pressed after clicking the button", async () => {
        render(
            <ToggleSlider defaultValue="av" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );

        const input = screen.getByTestId("jkl-toggle-slider");

        expect(input).toHaveAttribute("aria-checked", "false");
        await act(async () => {
            await userEvent.click(input);
        });
        expect(input).toHaveAttribute("aria-checked", "true");
    });

    it("should respect default value", () => {
        render(
            <ToggleSlider defaultValue="på" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );

        expect(screen.getByTestId("jkl-toggle-slider")).toHaveAttribute("aria-checked", "true");
    });

    it("should fire onToggle function on toggle", async () => {
        render(
            <ToggleSlider defaultValue="på" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );

        const input = screen.getByTestId("jkl-toggle-slider");

        await act(async () => {
            await userEvent.click(input);
        });
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith("av");
        await act(async () => {
            await userEvent.click(input);
        });
        expect(fn).toBeCalledTimes(2);
        expect(fn).toBeCalledWith("på");
    });

    describe("a11y", () => {
        test("toggle-switch should be a11y compliant", async () => {
            const { container } = render(
                <ToggleSlider defaultValue="av" labels={["av", "på"]} onToggle={fn}>
                    Skru
                </ToggleSlider>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
