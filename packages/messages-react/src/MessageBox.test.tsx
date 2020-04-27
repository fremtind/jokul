import React from "react";
import { cleanup, render } from "@testing-library/react";
import { MessageBox } from ".";
import { axe } from "jest-axe";
import { messageTypes } from "./common/types.d";

afterEach(cleanup);

describe("Message boxes", () => {
    [true, false].map((fullWidth) => {
        ["info", "error", "success", "warning", "foo"].map((type) => {
            it("should render message title and content", () => {
                const { getByText } = render(
                    <MessageBox messageType={type as messageTypes} fullWidth={fullWidth} title="test">
                        content
                    </MessageBox>,
                );
                getByText("content");
                getByText("test");
            });
        });
    });
});

describe("a11y", () => {
    it("InfoMessage should be a11y compliant", async () => {
        const { container } = render(
            <MessageBox messageType="info" title="info">
                Lorem Ipsum
            </MessageBox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("ErrorMessage should be a11y compliant", async () => {
        const { container } = render(
            <MessageBox messageType="error" title="error">
                Lorem Ipsum
            </MessageBox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("WarningMessage should be a11y compliant", async () => {
        const { container } = render(
            <MessageBox messageType="warning" title="warning">
                Lorem Ipsum
            </MessageBox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("SuccessMessage should be a11y compliant", async () => {
        const { container } = render(
            <MessageBox messageType="success" title="success">
                Lorem Ipsum
            </MessageBox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
