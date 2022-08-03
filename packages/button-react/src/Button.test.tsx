import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { useState } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from ".";

const buttonVariants = [
    { name: "primary", component: PrimaryButton },
    { name: "secondary", component: SecondaryButton },
    { name: "tertiary", component: TertiaryButton },
];

describe("Button", () => {
    buttonVariants.map((buttonVariant) => {
        it(`renders the ${buttonVariant.name} button correctly`, () => {
            const { name, component: Button } = buttonVariant;
            render(
                <Button data-testid={name} onClick={() => {}}>
                    {name}
                </Button>,
            );

            expect(screen.getByTestId(name)).toHaveClass(`jkl-button--${name}`);
        });
    });

    it("calls the onClick handler when clicked", async () => {
        const clickHandler = jest.fn();
        render(<PrimaryButton onClick={clickHandler}>I am groot!</PrimaryButton>);

        const button = screen.getByText("I am groot!");

        await act(async () => {
            await userEvent.click(button);
        });

        expect(clickHandler).toHaveBeenCalled();
    });

    it("applies passed classNames", () => {
        render(
            <PrimaryButton data-testid="test" className="test-class" onClick={() => {}}>
                test
            </PrimaryButton>,
        );

        expect(screen.getByTestId("test")).toHaveClass("test-class");
    });

    it("applies compact mode", () => {
        render(
            <PrimaryButton data-testid="test" compact onClick={() => {}}>
                test
            </PrimaryButton>,
        );

        expect(screen.getByTestId("test")).toHaveClass("jkl-button--compact");
    });

    test("button component does not unmount and remount when consumer component rerenders becaus of state change", async () => {
        const x = jest.fn();

        interface Props {
            onClick: (x: number) => void;
        }

        function MyComp(props: Props) {
            const [counter, setCount] = useState(0);

            return (
                <div>
                    <p>{counter}</p>
                    <button
                        onClick={() => {
                            setCount(counter + 1);
                        }}
                    >
                        Increment
                    </button>
                    <PrimaryButton
                        onClick={() => {
                            props.onClick(counter);
                        }}
                    >
                        Submit form
                    </PrimaryButton>
                </div>
            );
        }

        render(<MyComp onClick={x} />);
        const submitFormButtonElement = screen.getByText("Submit form"); // <- Get a reference to the dom element

        await act(async () => {
            await userEvent.click(screen.getByText("Increment")); // <-- Triggering av state change will cause component to rerender. <PrimaryButton> should not be unmounted and remounted
        });

        await act(async () => {
            await userEvent.click(submitFormButtonElement);
        });

        expect(x).toHaveBeenCalledWith(1);
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
                <Button compact onClick={() => {}}>
                    {name}
                </Button>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });

        [false, true].map((showLoader) => {
            it(`${buttonVariant.name} sets aria-hidden="${String(
                !showLoader,
            )}" on loader when showLoader is ${showLoader}`, async () => {
                const { name, component: Button } = buttonVariant;
                render(
                    <Button loader={{ showLoader, textDescription: "Vennligst vent" }} onClick={() => {}}>
                        {name}
                    </Button>,
                );
                const loader = screen.getByTestId("jkl-loader");
                expect(loader).toHaveAttribute("aria-hidden", String(!showLoader));
            });
        });
    });
});
