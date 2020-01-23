import React from "react";
import { cleanup, render } from "@testing-library/react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("Button", () => {
    // Test all button variants:
    [
        { name: "primary", component: PrimaryButton },
        { name: "secondary", component: SecondaryButton },
        { name: "tertiary", component: TertiaryButton },
    ].map((buttonVariant) => {
        it(`renders the ${buttonVariant.name} button correctly`, () => {
            const { name, component: Button } = buttonVariant;
            const { getByText } = render(<Button onClick={() => {}}>{name}</Button>);

            expect(getByText(name)).toHaveClass(`jkl-button--${name}`);
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

describe("a11y", () => {
    test("button should be a11y compliant", async () => {
        const { container } = render(<PrimaryButton onClick={() => {}}>Primary</PrimaryButton>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("button should be a11y compliant", async () => {
        const { container } = render(<SecondaryButton onClick={() => {}}>Secondary</SecondaryButton>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("button should be a11y compliant", async () => {
        const { container } = render(<TertiaryButton onClick={() => {}}>Tertiary</TertiaryButton>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("compact buttons should be a11y compliant", async () => {
        const { container } = render(
            <>
                <PrimaryButton forceCompact onClick={() => {}}>
                    Primary
                </PrimaryButton>
                <SecondaryButton forceCompact onClick={() => {}}>
                    Secondary
                </SecondaryButton>
                <TertiaryButton forceCompact onClick={() => {}}>
                    Tertiary
                </TertiaryButton>
            </>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
