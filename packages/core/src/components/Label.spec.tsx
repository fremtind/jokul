import { render, screen } from "@testing-library/react";
import React from "react";
import { LabelVariant } from "../types";
import { Label } from "./Label";

describe("Label", () => {
    const variants: LabelVariant[] = ["small", "medium", "large"];
    variants.forEach((variant) => {
        it(`renders the expected class for variant ${variant}`, () => {
            render(<Label variant={variant}>Hello</Label>);
            expect(screen.getByText("Hello")).toHaveClass(`jkl-label--${variant}`);
        });
    });

    it("renders the expected class for forceCompact", () => {
        render(<Label forceCompact>Hello</Label>);
        expect(screen.getByText("Hello")).toHaveClass("jkl-label--compact");
    });

    it("renders the expected class for srOnly", () => {
        render(<Label srOnly>Hello</Label>);
        expect(screen.getByText("Hello")).toHaveClass("jkl-label--sr-only");
    });
});
