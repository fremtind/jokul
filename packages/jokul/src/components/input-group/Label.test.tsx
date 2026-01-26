import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Label } from "./Label.js";
import type { LabelVariant } from "./types.js";

describe("Label", () => {
    const variants: LabelVariant[] = ["small", "medium", "large"];
    for (const variant of variants) {
        it(`renders the expected class for variant ${variant}`, () => {
            const { getByText } = render(
                <Label variant={variant}>Hello</Label>,
            );
            expect(getByText("Hello")).toHaveClass(`jkl-label--${variant}`);
        });
    }

    it("renders the expected result for size small", () => {
        const { getByText } = render(<Label data-size="small">Hello</Label>);
        expect(getByText("Hello")).toHaveAttribute("data-size", "small");
    });

    it("renders the expected class for srOnly", () => {
        const { getByText } = render(<Label srOnly>Hello</Label>);
        expect(getByText("Hello")).toHaveClass("jkl-label--sr-only");
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = render(<Label>Hello</Label>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests when srOnly", async () => {
        const { container } = render(<Label srOnly>Hello</Label>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
