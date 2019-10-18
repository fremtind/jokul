import React from "react";
import { cleanup, render } from "@testing-library/react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from ".";

describe("Button", () => {
    afterEach(cleanup);

    it("renders the correct button", () => {
        const { getByText } = render(
            <>
                <PrimaryButton onClick={() => {}}>primary</PrimaryButton>
                <SecondaryButton onClick={() => {}}>secondary</SecondaryButton>
                <TertiaryButton onClick={() => {}}>tertiary</TertiaryButton>
            </>,
        );

        const primaryButton = getByText("primary");
        const secondaryButton = getByText("secondary");
        const tertiaryButton = getByText("tertiary");

        expect(primaryButton).toHaveClass("jkl-button--primary");
        expect(secondaryButton).toHaveClass("jkl-button--secondary");
        expect(tertiaryButton).toHaveClass("jkl-button--tertiary");
    });

    it("calls the onClick handler when clicked", () => {
        const clickHandler = jest.fn();
        const { getByText } = render(<PrimaryButton onClick={clickHandler}>I am groot!</PrimaryButton>);

        const button = getByText("I am groot!");

        button.click();

        expect(clickHandler).toHaveBeenCalled();
    });

    it("applies passed classNames", () => {
        const { getByText } = render(
            <PrimaryButton className="test-class" onClick={() => {}}>
                test
            </PrimaryButton>,
        );

        expect(getByText("test")).toHaveClass("test-class");
    });

    it("applies compact mode when forced to", () => {
        const { getByText } = render(
            <PrimaryButton forceCompact onClick={() => {}}>
                test
            </PrimaryButton>,
        );

        expect(getByText("test")).toHaveClass("jkl-button--compact");
    });
});
