import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Checkbox } from ".";

afterEach(cleanup);

it("should be checked after clicking the label", () => {
    const { getByText, getByTestId } = render(<Checkbox>I am groot!</Checkbox>);

    const label = getByText("I am groot!");
    const input = getByTestId("checkbox-input");

    expect(input).toHaveProperty("checked", false);

    label.click();

    expect(input).toHaveProperty("checked", true);
});

it("should be checked after clicking the input ", function() {
    const { getByTestId } = render(<Checkbox>I am groot!</Checkbox>);

    const input = getByTestId("checkbox-input");

    expect(input).toHaveProperty("checked", false);

    input.click();

    expect(input).toHaveProperty("checked", true);
});

it("should be checked if defaultChecked is true", function() {
    const { getByTestId } = render(<Checkbox defaultChecked={true}>I am groot!</Checkbox>);

    const input = getByTestId("checkbox-input");

    expect(input).toHaveProperty("checked", true);
});

it("should be unchecked if defaultChecked is true and input is clicked", function() {
    const { getByTestId } = render(<Checkbox defaultChecked={true}>I am groot!</Checkbox>);

    const input = getByTestId("checkbox-input");

    expect(input).toHaveProperty("checked", true);

    input.click();

    expect(input).toHaveProperty("checked", false);
});
