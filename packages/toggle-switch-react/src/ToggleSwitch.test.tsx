import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleSwitch } from ".";
import { axe } from "jest-axe";

describe("Toggle switch", () => {
    it("should be pressed after clicking the button", () => {
        const TestToggleSwitch = () => {
            const [pressed, toggle] = React.useState(false);
            return (
                <ToggleSwitch pressed={pressed} onClick={() => toggle(!pressed)}>
                    GPS
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const input = screen.getByText("GPS");

        expect(input).toHaveAttribute("aria-pressed", "false");

        fireEvent.click(input);

        expect(input).toHaveAttribute("aria-pressed", "true");
    });

    it("should be pressed if pressed is true", function () {
        render(
            <ToggleSwitch pressed={true} onClick={() => ""}>
                I am groot!
            </ToggleSwitch>,
        );

        const input = screen.getByText("I am groot!");

        expect(input).toHaveAttribute("aria-pressed", "true");
    });

    it("should be unchecked if pressed is true and input is clicked", function () {
        const TestToggleSwitch = () => {
            const [pressed, toggle] = React.useState(true);
            return (
                <ToggleSwitch pressed={pressed} onClick={() => toggle(!pressed)}>
                    I am groot!
                </ToggleSwitch>
            );
        };
        render(<TestToggleSwitch />);

        const input = screen.getByText("I am groot!");

        expect(input).toHaveAttribute("aria-pressed", "true");
    });

    it("should call the passed onClick method when clicked", () => {
        const onClick = jest.fn();
        render(<ToggleSwitch onClick={onClick}>Switch me!</ToggleSwitch>);

        const input = screen.getByText("Switch me!");
        fireEvent.click(input);

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
