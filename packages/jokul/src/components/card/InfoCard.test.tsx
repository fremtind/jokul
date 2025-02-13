import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { InfoCard } from "./InfoCard.js";

describe("InfoCard", () => {
    it("renders without exploding", () => {
        render(
            <InfoCard title="Hello">
                <p>Hello world</p>
            </InfoCard>,
        );

        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("card should be a11y compliant", async () => {
        const { container } = render(
            <InfoCard title="Card">
                <p>Hello world</p>
            </InfoCard>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
