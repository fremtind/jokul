import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { InfoAlertMessage, ErrorAlertMessage, WarningAlertMessage, SuccessAlertMessage } from ".";

const messageWithStyles = {
    maxContentWidth: "1234px",
    paddingLeft: "1rem",
};
const messageWitoutStyles = {
    maxContentWidth: undefined,
    paddingLeft: undefined,
};

const types = [
    ["InfoAlertMessage", InfoAlertMessage],
    ["WarningAlertMessage", WarningAlertMessage],
    ["ErrorAlertMessage", ErrorAlertMessage],
    ["SuccessAlertMessage", SuccessAlertMessage],
];

describe("Alert messages", () => {
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
                expect(screen.getByTestId("alert-message-content")).toHaveStyle(
                    `padding-left: ${messageStyleProps.paddingLeft}`,
                );
                expect(screen.getByTestId("alert-message-content")).toHaveStyle(
                    `max-width: ${messageStyleProps.maxContentWidth}`,
                );
            });
        });
    });
    [messageWitoutStyles].forEach((messageStyleProps) => {
        types.map(([name, E]) => {
            it(name + " should not add style attribute if styles are undefined", () => {
                render(<E {...messageStyleProps}>content</E>);
                expect(screen.getByTestId("alert-message-content")).not.toHaveAttribute("style");
            });
        });
    });
});

describe("a11y", () => {
    it("InfoMessage should be a11y compliant", async () => {
        const { container } = render(<InfoAlertMessage>Lorem Ipsum</InfoAlertMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("ErrorMessage should be a11y compliant", async () => {
        const { container } = render(<ErrorAlertMessage>Lorem Ipsum</ErrorAlertMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("WarningMessage should be a11y compliant", async () => {
        const { container } = render(<WarningAlertMessage>Lorem Ipsum</WarningAlertMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("SuccessMessage should be a11y compliant", async () => {
        const { container } = render(<SuccessAlertMessage>Lorem Ipsum</SuccessAlertMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
