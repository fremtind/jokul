import React from "react";
import { cleanup, render } from "@testing-library/react";
import { SystemMessage } from ".";
import { axe } from "jest-axe";
import { messageTypes } from "./common/types.d";

afterEach(cleanup);

describe("System messages", () => {
    const types: Array<messageTypes> = ["info", "error", "success", "warning"];
    types.map((type) => {
        it("should render system message content", () => {
            const { getByText } = render(<SystemMessage messageType={type}>content</SystemMessage>);
            getByText("content");
        });
    });
});

describe("a11y", () => {
    it("InfoMessage should be a11y compliant", async () => {
        const { container } = render(<SystemMessage messageType="info">Lorem Ipsum</SystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("ErrorMessage should be a11y compliant", async () => {
        const { container } = render(<SystemMessage messageType="error">Lorem Ipsum</SystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("WarningMessage should be a11y compliant", async () => {
        const { container } = render(<SystemMessage messageType="warning">Lorem Ipsum</SystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("SuccessMessage should be a11y compliant", async () => {
        const { container } = render(<SystemMessage messageType="success">Lorem Ipsum</SystemMessage>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
