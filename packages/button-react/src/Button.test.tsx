import React from "react";
import { cleanup, render } from "@testing-library/react";
import { PrimaryButton, SecondaryButton } from ".";

describe("PrimaryButton", () => {
    afterEach(cleanup);

    it("should call the onClick handler when clicked", () => {
        const clickHandler = jest.fn();
        const { getByText } = render(<PrimaryButton onClick={clickHandler}>I am groot!</PrimaryButton>);

        const button = getByText("I am groot!");

        button.click();

        expect(clickHandler).toHaveBeenCalled();
    });
});

describe("SecondaryButton", () => {
    afterEach(cleanup);

    it("should call the onClick handler when clicked", () => {
        const clickHandler = jest.fn();
        const { getByText } = render(<SecondaryButton onClick={clickHandler}>Lol</SecondaryButton>);

        const button = getByText("Lol");

        button.click();

        expect(clickHandler).toHaveBeenCalled();
    });
});
