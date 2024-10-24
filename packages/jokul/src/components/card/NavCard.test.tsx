import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { NavCard } from "./NavCard.js";

describe("NavCard", () => {
    it("renders without exploding", () => {
        render(
            <NavCard title="Hello">
                <p>Hello world</p>
            </NavCard>,
        );

        expect(screen.getByText("Hello world")).toBeInTheDocument();
    });

    it("has an image", () => {
        render(
            <NavCard title="Hello" image={{ src: "image.jpg", alt: "Test" }}>
                <p>Hello world</p>
            </NavCard>,
        );

        expect(screen.getByTestId("jkl-image__image")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("card should be a11y compliant", async () => {
        const { container } = render(
            <NavCard title="Card">
                <p>Hello world</p>
            </NavCard>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
