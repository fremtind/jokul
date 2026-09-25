import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React, { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Icon } from "../icon/Icon.js";
import { Button } from "./Button.js";
import { buttonVariants } from "./types.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("Button", () => {
    buttonVariants.map((buttonVariant) => {
        it(`renders the ${buttonVariant} button correctly`, () => {
            render(
                <Button
                    variant={buttonVariant}
                    data-testid={buttonVariant}
                    onClick={() => {}}
                >
                    {buttonVariant}
                </Button>,
            );

            expect(screen.getByTestId(buttonVariant)).toHaveClass(
                `jkl-button--${buttonVariant}`,
            );
        });
    });

    it("renders correctly with left icon and label", () => {
        render(
            <Button variant="primary" icon={<Icon>save</Icon>}>
                Lagre
            </Button>,
        );

        expect(screen.getByText("Lagre")).toBeInTheDocument();
        expect(screen.getByText("save")).toBeInTheDocument();
    });

    it("renders correctly with right icon and label", () => {
        render(
            <Button
                variant="primary"
                icon={<Icon>save</Icon>}
                iconPosition="right"
            >
                Lagre
            </Button>,
        );

        expect(screen.getByText("Lagre")).toBeInTheDocument();
        expect(screen.getByText("save")).toBeInTheDocument();
    });

    it("renders correctly with icon only", () => {
        render(
            <Button variant="primary" icon={<Icon>save</Icon>} title="Lagre" />,
        );

        expect(screen.getByText("save")).toBeInTheDocument();
    });

    it("calls the onClick handler when clicked", async () => {
        const clickHandler = vi.fn();
        render(<Button onClick={clickHandler}>I am groot!</Button>);

        const button = screen.getByText("I am groot!");

        await act(async () => {
            await userEvent.click(button);
        });

        expect(clickHandler).toHaveBeenCalled();
    });

    it("applies passed classNames", () => {
        render(
            <Button
                data-testid="test"
                className="test-class"
                onClick={() => {}}
            >
                test
            </Button>,
        );

        expect(screen.getByTestId("test")).toHaveClass("test-class");
    });

    it("applies large size", () => {
        render(
            <Button data-testid="test" data-size="large" onClick={() => {}}>
                test
            </Button>,
        );

        expect(screen.getByTestId("test")).toHaveAttribute(
            "data-size",
            "large",
        );
    });

    it("button component does not unmount and remount when consumer component rerenders becaus of state change", async () => {
        const x = vi.fn();

        interface Props {
            onClick: (x: number) => void;
        }

        function MyComp(props: Props) {
            const [counter, setCount] = useState(0);

            return (
                <div>
                    <p>{counter}</p>
                    <button
                        type="button"
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

        it(`${buttonVariant} should be a11y compliant in small size`, async () => {
            const { container } = render(
                <Button
                    variant={buttonVariant}
                    data-size="small"
                    onClick={() => {}}
                >
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
                        loader={{
                            showLoader,
                            textDescription: "Vennligst vent",
                        }}
                        onClick={() => {}}
                    >
                        {buttonVariant}
                    </Button>,
                );
                const loader = screen.getByTestId("jkl-loader");
                expect(loader).toHaveAttribute(
                    "aria-hidden",
                    String(!showLoader),
                );
            });
        });
    });

    describe("tracking", () => {
        // Button kaller ikke lenger noen tracking-hook selv - den merker
        // seg bare med `data-jkl-*`-attributter, som Mixpanels
        // `autocapture` plukker opp når en instans er initialisert (se
        // `useMixpanelTracking`/TRACKING.md). Disse testene verifiserer
        // derfor kun at attributtene rendres riktig, ikke selve
        // sporingen (som testes i `trackingContext.test.tsx`).
        it("merker knappen som sporbar med komponentnavn og variant", () => {
            render(
                <Button variant="primary" onClick={() => {}}>
                    Lagre
                </Button>,
            );

            const button = screen.getByText("Lagre").closest("button");
            expect(button).toHaveAttribute("data-jkl-tracked", "Button");
            expect(button).toHaveAttribute("data-jkl-variant", "primary");
        });

        it("setter data-jkl-has-icon kun når knappen har et ikon", () => {
            const { rerender } = render(
                <Button variant="primary" onClick={() => {}}>
                    Lagre
                </Button>,
            );
            expect(
                screen.getByText("Lagre").closest("button"),
            ).not.toHaveAttribute("data-jkl-has-icon");

            rerender(
                <Button
                    variant="primary"
                    onClick={() => {}}
                    icon={<Icon>check</Icon>}
                >
                    Lagre
                </Button>,
            );
            expect(screen.getByText("Lagre").closest("button")).toHaveAttribute(
                "data-jkl-has-icon",
                "true",
            );
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender } = render(
                <Button variant="primary" onClick={() => {}}>
                    Lagre
                </Button>,
            );
            expect(
                screen.getByText("Lagre").closest("button"),
            ).not.toHaveAttribute("data-jkl-tracking");

            rerender(
                <Button
                    variant="primary"
                    onClick={() => {}}
                    tracking={{ orderId: "42" }}
                >
                    Lagre
                </Button>,
            );
            expect(screen.getByText("Lagre").closest("button")).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ orderId: "42" }),
            );
        });
    });
});
