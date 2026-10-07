import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { COLOR_MODES } from "../../utilities/types.js";
import { SystemMessage } from "./SystemMessage.js";

describe("System message", () => {
    it("renders correctly", () => {
        render(
            <SystemMessage className="testklasse" id="testid">
                Melding
            </SystemMessage>,
        );

        const message = screen.getByTestId("jkl-system-message");
        expect(message).toBeVisible();
        expect(message).toHaveClass("testklasse");
        expect(message).toHaveAttribute("id", "testid");
        expect(screen.getByText("Melding")).toBeVisible();
    });

    it("renders with given role", () => {
        render(<SystemMessage role="presentation">Melding</SystemMessage>);

        expect(screen.getByRole("presentation")).toBeVisible();
    });

    it("takes layout properties", () => {
        render(
            <SystemMessage maxContentWidth="1200px" paddingLeft="64px">
                Melding
            </SystemMessage>,
        );

        const content = screen.getByTestId("system-message-content");
        expect(content).toHaveStyle("max-width: 1200px");
        expect(content).toHaveStyle("padding-left: 64px");
    });

    it("should be dismissable", async () => {
        const user = userEvent.setup();
        const action = vi.fn();

        const Dismissable = () => {
            const [dismissed, setDismissed] = useState(false);
            return (
                <SystemMessage
                    dismissed={dismissed}
                    dismissAction={{
                        handleDismiss: () => {
                            setDismissed(true);
                            action();
                        },
                    }}
                >
                    Melding
                </SystemMessage>
            );
        };

        render(<Dismissable />);

        const message = screen.getByTestId("jkl-system-message");
        const dismissButton = screen.getByText("Lukk");
        expect(dismissButton).toBeVisible();
        expect(message).toBeVisible();

        user.click(dismissButton);

        await waitFor(() => {
            expect(message).toHaveClass("jkl-system-message--dismissed");
            expect(action).toHaveBeenCalled();
        });
    });

    for (const variant of COLOR_MODES) {
        it(`renders variant ${variant} with correct data-color`, () => {
            render(<SystemMessage variant={variant}>Melding</SystemMessage>);
            expect(screen.getByTestId("jkl-system-message")).toHaveAttribute(
                "data-color",
                variant,
            );
        });
    }
});

describe("a11y", () => {
    for (const variant of COLOR_MODES) {
        it(`SystemMessage variant ${variant} should be a11y compliant`, async () => {
            const { container } = render(
                <SystemMessage variant={variant}>Lorem Ipsum</SystemMessage>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    }
});
