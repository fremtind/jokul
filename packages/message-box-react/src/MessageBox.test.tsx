import React from "react";
import { render, screen } from "@testing-library/react";
import { InfoMessage, ErrorMessage, SuccessMessage, WarningMessage } from ".";
import { axe } from "jest-axe";

describe("Message boxes", () => {
    [true, false].map((fullWidth) => {
        [InfoMessage, ErrorMessage, SuccessMessage, WarningMessage].map((E) => {
            it("should render message title and content", () => {
                render(
                    <E fullWidth={fullWidth} title="test">
                        content
                    </E>,
                );
                screen.getByText("content");
                screen.getByText("test");
            });
        });
    });
});

describe("a11y", () => {
    it("InfoMessage should be a11y compliant", async () => {
        const { container } = render(<InfoMessage title="info">Lorem Ipsum</InfoMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("InfoMessage should have role `status` by default", async () => {
        render(<InfoMessage title="info">Lorem Ipsum</InfoMessage>);
        const message = screen.getByRole("status");
        expect(message).toBeTruthy();
    });

    it("ErrorMessage should be a11y compliant", async () => {
        const { container } = render(<ErrorMessage title="error">Lorem Ipsum</ErrorMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("ErrorMessage should have role `alert` by default", async () => {
        render(<ErrorMessage title="error">Lorem Ipsum</ErrorMessage>);
        const message = screen.getByRole("alert");
        expect(message).toBeTruthy();
    });

    it("WarningMessage should be a11y compliant", async () => {
        const { container } = render(<WarningMessage title="warning">Lorem Ipsum</WarningMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("WarningMessage should have role `status` by default", async () => {
        render(<WarningMessage title="warning">Lorem Ipsum</WarningMessage>);
        const message = screen.getByRole("alert");
        expect(message).toBeTruthy();
    });

    it("SuccessMessage should be a11y compliant", async () => {
        const { container } = render(<SuccessMessage title="success">Lorem Ipsum</SuccessMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("SuccessMessage should have role `status` by default", async () => {
        render(<SuccessMessage title="success">Lorem Ipsum</SuccessMessage>);
        const message = screen.getByRole("status");
        expect(message).toBeTruthy();
    });

    it("should have a role equal to the given prop", async () => {
        render(
            <InfoMessage title="info" role="none presentation">
                Lorem Ipsum
            </InfoMessage>,
        );
        const message = screen.getByRole("none");
        expect(message).toBeTruthy();
    });
});
