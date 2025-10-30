import { render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { TextArea } from "./TextArea.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("TextArea", () => {
    it("renders with correct label", () => {
        render(<TextArea label="Cool text area" />);

        expect(screen.getByLabelText("Cool text area")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        render(<TextArea label="testing" className="test-class" />);

        const component = screen.getByTestId("jkl-text-area");
        expect(component).toHaveClass("test-class");
    });

    it("supports labels only for screen readers", () => {
        render(<TextArea label="testing" labelProps={{ srOnly: true }} />);

        const label = screen.getByText("testing");
        expect(label).toHaveClass("jkl-label--sr-only");
    });

    it("renders with counter when provided", () => {
        render(
            <TextArea
                label="Test area"
                counter={{ maxLength: 100 }}
                value="Hello"
            />,
        );

        expect(screen.getByText("5 / 100")).toBeInTheDocument();
    });

    it("updates counter when typing", async () => {
        const user = userEvent.setup();
        render(<TextArea label="Test area" counter={{ maxLength: 100 }} />);

        const textarea = screen.getByLabelText("Test area");

        await user.type(textarea, "Hello World");
        expect(screen.getByText("11 / 100")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("text-area should be a11y compliant", async () => {
        const { container } = render(
            <TextArea label="testing" helpLabel="tips" />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("text-area with counter should be a11y compliant", async () => {
        const { container } = render(
            <TextArea
                label="testing"
                helpLabel="tips"
                counter={{ maxLength: 200 }}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
