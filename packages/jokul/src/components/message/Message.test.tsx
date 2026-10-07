import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React, { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { COLOR_MODES } from "../../utilities/types.js";
import { Message } from "./Message.js";

describe("Message box", () => {
    it("should render message title and content", () => {
        render(<Message title="test">content</Message>);
        expect(screen.getByText("content")).toBeInTheDocument();
        expect(screen.getByText("test")).toBeInTheDocument();
    });

    it("should have info variant as default", () => {
        render(<Message title="test">content</Message>);
        console.warn(screen.getByTestId("jkl-message"));
        expect(screen.getByTestId("jkl-message")).toHaveAttribute(
            "data-color",
            "info",
        );
    });

    it("should be dismissable", async () => {
        const user = userEvent.setup();
        const action = vi.fn();

        const Dismissable = () => {
            const [dismissed, setDismissed] = useState(false);
            return (
                <Message
                    dismissed={dismissed}
                    dismissAction={{
                        handleDismiss: () => {
                            setDismissed(true);
                            action();
                        },
                    }}
                >
                    Melding
                </Message>
            );
        };

        render(<Dismissable />);

        const message = screen.getByTestId("jkl-message");
        const dismissButton = screen.getByText("Lukk");
        expect(dismissButton).toBeVisible();
        expect(message).toBeVisible();

        user.click(dismissButton);

        await waitFor(() => {
            expect(message).toHaveClass("jkl-message--dismissed");
            expect(action).toHaveBeenCalled();
        });
    });

    COLOR_MODES.map((variant) => {
        it(`variant ${variant} should have correct data-color attribute`, () => {
            render(
                <Message variant={variant} title="test">
                    content
                </Message>,
            );
            expect(screen.getByTestId("jkl-message")).toHaveAttribute(
                "data-color",
                variant,
            );
        });
    });
});

describe("a11y", () => {
    COLOR_MODES.map((variant) => {
        it(`Message variant=${variant} should be a11y compliant`, async () => {
            const { container } = render(
                <Message variant={variant} title="info">
                    Lorem Ipsum
                </Message>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });

    it("should have a role equal to the given prop", async () => {
        render(
            // biome-ignore lint/a11y/useValidAriaRole: Bare en test
            <Message title="info" role="none presentation">
                Lorem Ipsum
            </Message>,
        );
        const message = screen.getByRole("none");
        expect(message).toBeTruthy();
    });
});
