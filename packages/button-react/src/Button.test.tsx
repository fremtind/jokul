import React from "react";
import { cleanup, render } from "@testing-library/react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from ".";

describe("Button", () => {
    afterEach(cleanup);

    // Test all button variants:
    [
        { name: "primary", component: PrimaryButton },
        { name: "secondary", component: SecondaryButton },
        { name: "tertiary", component: TertiaryButton },
    ].map((buttonVariant) => {
        it(`renders the ${buttonVariant.name} button correctly`, () => {
            const { getByText } = render(
                <buttonVariant.component onClick={() => {}}>{buttonVariant.name}</buttonVariant.component>,
            );
            expect(getByText(buttonVariant.name)).toHaveClass(`jkl-button--${buttonVariant.name}`);
        });
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
