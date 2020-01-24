import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ToggleSwitch } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("ToggleSwitch", () => {
    it("should be checked after clicking the input ", function() {
        const { getByTestId } = render(<ToggleSwitch>GPS</ToggleSwitch>);

        const input = getByTestId("jkl-toggle-input");
        const label = getByTestId("jkl-toggle-input--label");

        expect(input).toHaveProperty("checked", false);

        label.click();

        expect(input).toHaveProperty("checked", true);
    });

    it("should be checked after clicking the input ", function() {
        const { getByTestId } = render(<ToggleSwitch>I am groot!</ToggleSwitch>);

        const input = getByTestId("jkl-toggle-input");

        expect(input).toHaveProperty("checked", false);

        input.click();

        expect(input).toHaveProperty("checked", true);
    });

    it("should be checked if checked is true", function() {
        const { getByTestId } = render(
            <ToggleSwitch checked={true} onChange={() => ""}>
                I am groot!
            </ToggleSwitch>,
        );

        const input = getByTestId("jkl-toggle-input");

        expect(input).toHaveProperty("checked", true);
    });

    it("should be unchecked if checked is true and input is clicked", function() {
        const TestToggleSwitch = () => {
            const [checked, toggle] = React.useState(true);
            return (
                <ToggleSwitch checked={checked} onChange={() => toggle(!checked)}>
                    I am groot!
                </ToggleSwitch>
            );
        };
        const { getByTestId } = render(<TestToggleSwitch />);

        const input = getByTestId("jkl-toggle-input");

        expect(input).toHaveProperty("checked", true);

        input.click();

        expect(input).toHaveProperty("checked", false);
    });

    it("should call the passed onChange method when clicked", () => {
        const onChange = jest.fn();
        const { getByLabelText } = render(<ToggleSwitch onChange={onChange}>Switch me!</ToggleSwitch>);

        const input = getByLabelText("Switch me!");
        input.click();

        expect(onChange).toHaveBeenCalled();
    });
});

describe("a11y", () => {
    test("toggle-switch should be a11y compliant", async () => {
        const { container } = render(<ToggleSwitch helpLabel="tip">Switch</ToggleSwitch>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("inverted toggle-switch should be a11y compliant", async () => {
        const { container } = render(
            <ToggleSwitch inverted helpLabel="tip">
                Switch
            </ToggleSwitch>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
