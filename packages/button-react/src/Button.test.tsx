import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryButton, SecondaryButton, TertiaryButton, ActionButton } from ".";
import { axe } from "jest-axe";

const buttonVariants = [
    { name: "primary", component: PrimaryButton },
    { name: "secondary", component: SecondaryButton },
    { name: "tertiary", component: TertiaryButton },
    { name: "action", component: ActionButton },
];

describe("Button", () => {
    buttonVariants.map((buttonVariant) => {
        it(`renders the ${buttonVariant.name} button correctly`, () => {
            const { name, component: Button } = buttonVariant;
            render(<Button onClick={() => {}}>{name}</Button>);

            expect(screen.getByText(name)).toHaveClass(`jkl-button--${name}`);
        });
    });

    it("calls the onClick handler when clicked", () => {
        const clickHandler = jest.fn();
        render(<PrimaryButton onClick={clickHandler}>I am groot!</PrimaryButton>);

        const button = screen.getByText("I am groot!");

        fireEvent.click(button);

        expect(clickHandler).toHaveBeenCalled();
    });

    it("applies passed classNames", () => {
        render(
            <PrimaryButton className="test-class" onClick={() => {}}>
                test
            </PrimaryButton>,
        );

        expect(screen.getByText("test")).toHaveClass("test-class");
    });

    it("applies compact mode when forced to", () => {
        render(
            <PrimaryButton forceCompact onClick={() => {}}>
                test
            </PrimaryButton>,
        );

        expect(screen.getByText("test")).toHaveClass("jkl-button--compact");
    });
});

describe("a11y", () => {
    buttonVariants.map((buttonVariant) => {
        it(`${buttonVariant.name} should be a11y compliant`, async () => {
            const { name, component: Button } = buttonVariant;
            const { container } = render(<Button onClick={() => {}}>{name}</Button>);
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });

        it(`${buttonVariant.name} should be a11y compliant in compact mode`, async () => {
            const { name, component: Button } = buttonVariant;
            const { container } = render(
                <Button forceCompact onClick={() => {}}>
                    {name}
                </Button>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
