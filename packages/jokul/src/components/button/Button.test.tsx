import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React, { useState } from "react";
import { Button } from "./Button";
import { buttonVariants } from "./types";

describe("Button", () => {
    buttonVariants.map((buttonVariant) => {
        it(`renders the ${buttonVariant} button correctly`, () => {
            render(
                <Button variant={buttonVariant} data-testid={buttonVariant} onClick={() => {}}>
                    {buttonVariant}
                </Button>,
            );

            expect(screen.getByTestId(buttonVariant)).toHaveClass(`jkl-button--${buttonVariant}`);
        });
    });

    it("calls the onClick handler when clicked", async () => {
        const clickHandler = jest.fn();
        render(<Button onClick={clickHandler}>I am groot!</Button>);

        const button = screen.getByText("I am groot!");

        await act(async () => {
            await userEvent.click(button);
        });

        expect(clickHandler).toHaveBeenCalled();
    });

    it("applies passed classNames", () => {
        render(
            <Button data-testid="test" className="test-class" onClick={() => {}}>
                test
            </Button>,
        );

        expect(screen.getByTestId("test")).toHaveClass("test-class");
    });

    it("applies compact mode", () => {
        render(
            <Button data-testid="test" density="compact" onClick={() => {}}>
                test
            </Button>,
        );

        expect(screen.getByTestId("test")).toHaveAttribute("data-density", "compact");
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
                    <Button
                        variant="primary"
                        onClick={() => {
                            props.onClick(counter);
                        }}
                    >
                        Submit form
                    </Button>
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
        it(`${buttonVariant} should be a11y compliant`, async () => {
            const { container } = render(
                <Button variant={buttonVariant} onClick={() => {}}>
                    {buttonVariant}
                </Button>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });

        it(`${buttonVariant} should be a11y compliant in compact mode`, async () => {
            const { container } = render(
                <Button variant={buttonVariant} density="compact" onClick={() => {}}>
                    {buttonVariant}
                </Button>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });

        [false, true].map((showLoader) => {
            it(`${buttonVariant} sets aria-hidden="${String(
                !showLoader,
            )}" on loader when showLoader is ${showLoader}`, async () => {
                render(
                    <Button
                        variant={buttonVariant}
                        loader={{ showLoader, textDescription: "Vennligst vent" }}
                        onClick={() => {}}
                    >
                        {buttonVariant}
                    </Button>,
                );
                const loader = screen.getByTestId("jkl-loader");
                expect(loader).toHaveAttribute("aria-hidden", String(!showLoader));
            });
        });
    });
});
