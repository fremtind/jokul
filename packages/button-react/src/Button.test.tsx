import React, { useState } from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from ".";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

const buttonVariants = [
    { name: "primary", component: PrimaryButton },
    { name: "secondary", component: SecondaryButton },
    { name: "tertiary", component: TertiaryButton },
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

        act(() => {
            userEvent.click(screen.getByText("Increment")); // <-- Triggering av state change will cause component to rerender. <PrimaryButton> should not be unmounted and remounted
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
                <Button forceCompact onClick={() => {}}>
                    {name}
                </Button>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
