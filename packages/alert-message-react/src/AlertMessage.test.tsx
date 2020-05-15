import React from "react";
import { render } from "@testing-library/react";
import { InfoAlertMessage, ErrorAlertMessage, WarningAlertMessage, SuccessAlertMessage } from ".";
import { axe } from "jest-axe";

describe("Alert messages", () => {
    [
        {
            inverted: true,
            maxContentWidth: "1234px",
            paddingLeft: "1rem",
        },
        {
            inverted: false,
            maxContentWidth: undefined,
            paddingLeft: undefined,
        },
    ].forEach(({ inverted, maxContentWidth, paddingLeft }) => {
        [InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage].map((E) => {
            it("should render message content", () => {
                const { getByText } = render(
                    <E inverted={inverted} maxContentWidth={maxContentWidth} paddingLeft={paddingLeft}>
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
