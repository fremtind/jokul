import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { ErrorSystemMessage, InfoSystemMessage, SuccessSystemMessage, WarningSystemMessage } from "./SystemMessage.js";

const messageWithStyles = {
    maxContentWidth: "1234px",
    paddingLeft: "1rem",
};
const messageWitoutStyles = {
    maxContentWidth: undefined,
    paddingLeft: undefined,
};

const types = [
    ["InfoSystemMessage", InfoSystemMessage],
    ["WarningSystemMessage", WarningSystemMessage],
    ["ErrorSystemMessage", ErrorSystemMessage],
    ["SuccessSystemMessage", SuccessSystemMessage],
];

describe("System messages", () => {
    [messageWithStyles, messageWitoutStyles].forEach((messageStyleProps) => {
        types.map(([name, E]) => {
            it(name + " should render message content", () => {
                render(<E {...messageStyleProps}>content</E>);
                screen.getByText("content");
            });
        });
    });
    [messageWithStyles].forEach((messageStyleProps) => {
        types.map(([name, E]) => {
            it(name + " should take css properties", () => {
                render(<E {...messageStyleProps}>content</E>);
                expect(screen.getByTestId("system-message-content")).toHaveStyle(
                    `padding-left: ${messageStyleProps.paddingLeft}`,
                );
                expect(screen.getByTestId("system-message-content")).toHaveStyle(
                    `max-width: ${messageStyleProps.maxContentWidth}`,
                );
            });
        });
    });
    [messageWitoutStyles].forEach((messageStyleProps) => {
        types.map(([name, E]) => {
            it(name + " should not add style attribute if styles are undefined", () => {
                render(<E {...messageStyleProps}>content</E>);
                expect(screen.getByTestId("system-message-content")).not.toHaveAttribute("style");
            });
        });
    });
});

describe("a11y", () => {
    it("InfoMessage should be a11y compliant", async () => {
        const { container } = render(<InfoSystemMessage>Lorem Ipsum</InfoSystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("ErrorMessage should be a11y compliant", async () => {
        const { container } = render(<ErrorSystemMessage>Lorem Ipsum</ErrorSystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("WarningMessage should be a11y compliant", async () => {
        const { container } = render(<WarningSystemMessage>Lorem Ipsum</WarningSystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("SuccessMessage should be a11y compliant", async () => {
        const { container } = render(<SuccessSystemMessage>Lorem Ipsum</SuccessSystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
