import React from "react";
import { render } from "@testing-library/react";
import { InfoAlertMessage, ErrorAlertMessage, WarningAlertMessage, SuccessAlertMessage } from ".";
import { axe } from "jest-axe";

describe("Alert messages", () => {
    [
        {
            inverted: true,
            maxWidth: "1234px",
            paddingLeft: "1rem",
        },
        {
            inverted: false,
            maxWidth: undefined,
            paddingLeft: undefined,
        },
    ].forEach(({ inverted, maxWidth, paddingLeft }) => {
        [InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage].map((E) => {
            it("should render message content", () => {
                const { getByText } = render(
                    <E inverted={inverted} maxWidth={maxWidth} paddingLeft={paddingLeft}>
                        content
                    </E>,
                );
                getByText("content");
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
