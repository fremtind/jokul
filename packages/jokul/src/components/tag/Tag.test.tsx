import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { COLOR_MODES } from "../../utilities/types.js";
import { Tag } from "./Tag.js";

describe("Tag", () => {
    it("skal rendre en standard tag", () => {
        render(<Tag>Standard Tag</Tag>);
        expect(screen.getByText("Standard Tag")).toBeInTheDocument();
        expect(screen.getByText("Standard Tag")).toHaveClass("jkl-tag");
    });

    COLOR_MODES.map((variant) => {
        // "variant" => "Variant Tag"
        const label = `${variant.charAt(0).toUpperCase()}${variant.substring(1)} Tag`;

        it(`skal rendre en ${variant} tag`, () => {
            render(<Tag variant={variant}>{label}</Tag>);
            expect(screen.getByText(label)).toBeInTheDocument();
            expect(screen.getByText(label)).toHaveAttribute(
                "data-color",
                variant,
            );
        });
    });
});
