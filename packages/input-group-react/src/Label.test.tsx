import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Label, type LabelVariant } from "./Label";

describe("Label", () => {
    const variants: LabelVariant[] = ["small", "medium", "large"];
    variants.forEach((variant) => {
        it(`renders the expected class for variant ${variant}`, () => {
            const { getByText } = render(
                <Label variant={variant}>Hello</Label>,
            );
            expect(getByText("Hello")).toHaveClass(`jkl-label--${variant}`);
        });
    });

    it("renders the expected result for compact", () => {
        const { getByText } = render(<Label density="compact">Hello</Label>);
        expect(getByText("Hello")).toHaveAttribute("data-density", "compact");
    });

    it("renders the expected class for srOnly", () => {
        const { getByText } = render(<Label srOnly>Hello</Label>);
        expect(getByText("Hello")).toHaveClass("jkl-label--sr-only");
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = render(<Label>Hello</Label>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass jest-axe tests when srOnly", async () => {
        const { container } = render(<Label srOnly>Hello</Label>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
