import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { InfoMessageBox, ErrorMessageBox, SuccessMessageBox, WarningMessageBox } from ".";

describe("Message boxes", () => {
    [true, false].map((fullWidth) => {
        [InfoMessageBox, ErrorMessageBox, SuccessMessageBox, WarningMessageBox].map((E) => {
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
    it("InfoMessageBox should be a11y compliant", async () => {
        const { container } = render(<InfoMessageBox title="info">Lorem Ipsum</InfoMessageBox>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("ErrorMessageBox should be a11y compliant", async () => {
        const { container } = render(<ErrorMessageBox title="error">Lorem Ipsum</ErrorMessageBox>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("WarningMessageBox should be a11y compliant", async () => {
        const { container } = render(<WarningMessageBox title="warning">Lorem Ipsum</WarningMessageBox>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("SuccessMessageBox should be a11y compliant", async () => {
        const { container } = render(<SuccessMessageBox title="success">Lorem Ipsum</SuccessMessageBox>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should have a role equal to the given prop", async () => {
        render(
            <InfoMessageBox title="info" role="none presentation">
                Lorem Ipsum
            </InfoMessageBox>,
        );
        const message = screen.getByRole("none");
        expect(message).toBeTruthy();
    });
});
