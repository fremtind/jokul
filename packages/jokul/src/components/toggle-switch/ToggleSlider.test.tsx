import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { ToggleSlider } from "./ToggleSlider.js";

const fn = vi.fn();

describe("ToggleSlider", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    const getInputs = () => {
        const inputAv: HTMLInputElement = screen.getByLabelText("av");
        const inputPaa: HTMLInputElement = screen.getByLabelText("på");
        return { inputAv, inputPaa };
    };

    it("should select option", async () => {
        render(
            <ToggleSlider defaultValue="av" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );

        const { inputAv, inputPaa } = getInputs();

        expect(inputAv.checked).toEqual(true);
        expect(inputPaa.checked).toEqual(false);

        await act(async () => {
            fireEvent.click(inputPaa);
        });

        expect(inputAv.checked).toEqual(false);
        expect(inputPaa.checked).toEqual(true);
    });

    it("should respect default value", () => {
        render(
            <ToggleSlider defaultValue="på" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );
        const { inputAv, inputPaa } = getInputs();
        expect(inputAv.checked).toEqual(false);
        expect(inputPaa.checked).toEqual(true);
    });

    it("should fire onToggle function on select", async () => {
        render(
            <ToggleSlider defaultValue="på" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );
        const { inputAv, inputPaa } = getInputs();

        await act(async () => {
            fireEvent.click(inputAv);
        });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith("av");

        await act(async () => {
            fireEvent.click(inputPaa);
        });

        expect(fn).toBeCalledTimes(2);
        expect(fn).toBeCalledWith("på");
    });

    it("should toggle value on click", async () => {
        render(
            <ToggleSlider defaultValue="av" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );
        const { inputAv, inputPaa } = getInputs();

        expect(inputAv.checked).toEqual(true);

        await act(async () => {
            fireEvent.click(inputPaa);
        });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith("på");
        expect(inputAv.checked).toEqual(false);
        expect(inputPaa.checked).toEqual(true);
    });

    it("should show legend by default", () => {
        render(
            <ToggleSlider defaultValue="på" labels={["av", "på"]} onToggle={fn}>
                Skru
            </ToggleSlider>,
        );
        expect(screen.getByText("Skru")).toBeVisible();
    });

    it("should show legend as screen-reader only when hideLegend is true", () => {
        render(
            <ToggleSlider
                hideLegend={true}
                defaultValue="på"
                labels={["av", "på"]}
                onToggle={fn}
            >
                Skru
            </ToggleSlider>,
        );
        const legend = screen.getByText("Skru");
        expect(legend).toBeInTheDocument();
        expect(
            legend.classList.contains("jkl-toggle-slider__legend--sr-only"),
        ).toBe(true);
    });

    describe("a11y", () => {
        it("toggle-switch should be a11y compliant", async () => {
            const { container } = render(
                <ToggleSlider
                    defaultValue="av"
                    labels={["av", "på"]}
                    onToggle={fn}
                >
                    Skru
                </ToggleSlider>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
