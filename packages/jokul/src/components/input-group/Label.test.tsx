import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import type { Size } from "../../core/types.js";
import { Label } from "./Label.js";

describe("Label", () => {
    const sizes: Size[] = ["small", "medium", "large"];
    for (const size of sizes) {
        it(`renders the expected data-size attribute for size ${size}`, () => {
            const { getByText } = render(<Label data-size={size}>Hello</Label>);
            expect(getByText("Hello")).toHaveAttribute("data-size", size);
        });
    }

    it("renders the expected class for srOnly", () => {
        const { getByText } = render(<Label srOnly>Hello</Label>);
        expect(getByText("Hello")).toHaveClass("jkl-sr-only");
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
