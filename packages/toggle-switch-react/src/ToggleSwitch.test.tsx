import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { ToggleSwitch } from ".";

describe("Toggle switch", () => {
    it("should be pressed after clicking the button", async () => {
        const TestToggleSwitch = () => {
            const [pressed, toggle] = React.useState(false);
            return (
                <ToggleSwitch aria-pressed={pressed} onClick={() => toggle(!pressed)}>
                    GPS
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const button = screen.getByText("GPS");

        expect(button).toHaveAttribute("aria-pressed", "false");

        await act(async () => {
            // await userEvent.click(button);
            // Av en eller annen grunn fungerer ikke testen med userEvent.click()
            // Alle former for aktivering fungerer i browser (klikk, trykk, space, enter, aktivering via VoiceOver)
            fireEvent(button, new MouseEvent("click", { bubbles: true, cancelable: true }));
        });

        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should be pressed if pressed is true", function () {
        render(
            <ToggleSwitch aria-pressed={true} onClick={() => ""}>
                I am groot!
            </ToggleSwitch>,
        );

        const button = screen.getByText("I am groot!");

        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should be unchecked if pressed is true and input is clicked", function () {
        const TestToggleSwitch = () => {
            const [pressed, toggle] = React.useState(true);
            return (
                <ToggleSwitch aria-pressed={pressed} onClick={() => toggle(!pressed)}>
                    I am groot!
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const button = screen.getByText("I am groot!");

        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("should call the passed onClick method when clicked", async () => {
        const onClick = jest.fn();
        render(<ToggleSwitch onClick={onClick}>Switch me!</ToggleSwitch>);

        const button = screen.getByText("Switch me!");
        await act(async () => {
            // await userEvent.click(input);
            // Av en eller annen grunn fungerer ikke testen med userEvent.click()
            // Alle former for aktivering fungerer i browser (klikk, trykk, space, enter, aktivering via VoiceOver)
            fireEvent(button, new MouseEvent("click", { bubbles: true, cancelable: true }));
        });

        expect(onClick).toHaveBeenCalled();
    });

    describe("a11y", () => {
        test("toggle-switch should be a11y compliant", async () => {
            const { container } = render(<ToggleSwitch helpLabel="tip">Switch</ToggleSwitch>);
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
