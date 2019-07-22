import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ToggleSwitch } from ".";

afterEach(cleanup);

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

it("should be checked if defaultChecked is true", function() {
    const { getByTestId } = render(<ToggleSwitch defaultChecked={true}>I am groot!</ToggleSwitch>);

    const input = getByTestId("jkl-toggle-input");

    expect(input).toHaveProperty("checked", true);
});

it("should be unchecked if defaultChecked is true and input is clicked", function() {
    const { getByTestId } = render(<ToggleSwitch defaultChecked={true}>I am groot!</ToggleSwitch>);

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
