import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { ToggleSwitch } from "./ToggleSwitch.js";

describe("Toggle switch", () => {
    it("should be pressed after clicking the button", async () => {
        const TestToggleSwitch = () => {
            const [pressed, toggle] = React.useState(false);
            return (
                <ToggleSwitch
                    aria-pressed={pressed}
                    onClick={() => toggle(!pressed)}
                >
                    GPS
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const button = screen.getByText("GPS");

        expect(button).toHaveAttribute("aria-pressed", "false");

        await act(async () => {
            // Av en eller annen grunn fungerer ikke testen med userEvent.click()
            // Alle former for aktivering fungerer i browser (klikk, trykk, space, enter, aktivering via VoiceOver)
            fireEvent(
                button,
                new MouseEvent("click", { bubbles: true, cancelable: true }),
            );
        });

        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should be pressed if pressed is true", () => {
        render(
            <ToggleSwitch aria-pressed={true} onClick={() => ""}>
                I am groot!
            </ToggleSwitch>,
        );

        const button = screen.getByText("I am groot!");

        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should be unchecked if pressed is true and input is clicked", async () => {
        const TestToggleSwitch = () => {
            const [pressed, toggle] = React.useState(true);
            return (
                <ToggleSwitch
                    aria-pressed={pressed}
                    onClick={() => toggle(!pressed)}
                >
                    I am groot!
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const button = screen.getByText("I am groot!");

        expect(button).toHaveAttribute("aria-pressed", "true");

        await act(async () => {
            // Av en eller annen grunn fungerer ikke testen med userEvent.click()
            // Alle former for aktivering fungerer i browser (klikk, trykk, space, enter, aktivering via VoiceOver)
            fireEvent(
                button,
                new MouseEvent("click", { bubbles: true, cancelable: true }),
            );
        });

        expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("should call the passed onClick method when clicked", async () => {
        const onClick = vi.fn();
        render(<ToggleSwitch onClick={onClick}>Switch me!</ToggleSwitch>);

        const button = screen.getByText("Switch me!");
        await act(async () => {
            // Av en eller annen grunn fungerer ikke testen med userEvent.click()
            // Alle former for aktivering fungerer i browser (klikk, trykk, space, enter, aktivering via VoiceOver)
            fireEvent(
                button,
                new MouseEvent("click", { bubbles: true, cancelable: true }),
            );
        });

        expect(onClick).toHaveBeenCalled();
    });

    it("should pass the correct pressed value to onChange when starting as pressed", async () => {
        const TestToggleSwitch = () => {
            const [pressed, setPressed] = React.useState(true);
            return (
                <ToggleSwitch
                    aria-pressed={pressed}
                    onChange={(_, pressed) => setPressed(pressed)}
                >
                    I am groot!
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const button = screen.getByText("I am groot!");

        await act(async () => {
            // Av en eller annen grunn fungerer ikke testen med userEvent.click()
            // Alle former for aktivering fungerer i browser (klikk, trykk, space, enter, aktivering via VoiceOver)
            fireEvent(
                button,
                new MouseEvent("click", { bubbles: true, cancelable: true }),
            );
        });

        expect(button).toHaveAttribute("aria-pressed", "false");
    });

    describe("a11y", () => {
        it("toggle-switch should be a11y compliant", async () => {
            const { container } = render(<ToggleSwitch>Switch</ToggleSwitch>);
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
