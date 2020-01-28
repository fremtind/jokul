import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ToggleSwitch } from ".";

afterEach(cleanup);

it("should be pressed after clicking the button", function() {
    const TestToggleSwitch = () => {
        const [pressed, toggle] = React.useState(false);
        return (
            <ToggleSwitch pressed={pressed} onClick={() => toggle(!pressed)}>
                GPS
            </ToggleSwitch>
        );
    };
    const { getByText } = render(<TestToggleSwitch />);

    const input = getByText("GPS");

    expect(input).toHaveAttribute("aria-pressed", "false");

    input.click();

    expect(input).toHaveAttribute("aria-pressed", "true");
});

it("should be pressed if pressed is true", function() {
    const { getByText } = render(
        <ToggleSwitch pressed={true} onClick={() => ""}>
            I am groot!
        </ToggleSwitch>,
    );

    const input = getByText("I am groot!");

    expect(input).toHaveAttribute("aria-pressed", "true");
});

it("should be unchecked if pressed is true and input is clicked", function() {
    const TestToggleSwitch = () => {
        const [pressed, toggle] = React.useState(true);
        return (
            <ToggleSwitch pressed={pressed} onClick={() => toggle(!pressed)}>
                I am groot!
            </ToggleSwitch>
        );
    };
    const { getByText } = render(<TestToggleSwitch />);

    const input = getByText("I am groot!");

    expect(input).toHaveAttribute("aria-pressed", "true");

    input.click();

    expect(input).toHaveAttribute("aria-pressed", "false");
});

it("should call the passed onClick method when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<ToggleSwitch onClick={onClick}>Switch me!</ToggleSwitch>);

    const input = getByText("Switch me!");
    input.click();

    expect(onClick).toHaveBeenCalled();
});
