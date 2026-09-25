import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Link } from "./Link.js";

describe("Link", () => {
    it("should render with the correct text and style", () => {
        render(<Link href="somepage.com">Some link</Link>);

        expect(screen.getByRole("link", { name: "Some link" })).toHaveClass(
            "jkl-link",
        );
    });

    it("should have the correct href attribute", () => {
        render(<Link href="somepage.com">Some link</Link>);

        expect(screen.getByRole("link", { name: "Some link" })).toHaveAttribute(
            "href",
            "somepage.com",
        );
    });

    it("should render as the supplied element", () => {
        render(<Link as="div">Some link</Link>);

        expect(screen.getByText("Some link").closest("div")?.nodeName).toEqual(
            "DIV",
        );
    });

    it("should get the supplied className", () => {
        render(
            <Link href="somepage.com" className="my-class">
                Some link
            </Link>,
        );

        expect(screen.getByRole("link", { name: "Some link" })).toHaveClass(
            "my-class",
        );
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = render(<Link href="somepage.com">Listen</Link>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests when external", async () => {
        const { container } = render(
            <Link href="https://example.com" external>
                Listen
            </Link>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    describe("tracking", () => {
        it("merker lenken som sporbar med komponentnavn", () => {
            render(<Link href="somepage.com">Some link</Link>);

            expect(
                screen.getByRole("link", { name: "Some link" }),
            ).toHaveAttribute("data-jkl-tracked", "Link");
        });

        it("setter data-jkl-variant kun når lenken er ekstern", () => {
            const { rerender } = render(
                <Link href="somepage.com">Some link</Link>,
            );

            expect(
                screen.getByRole("link", { name: "Some link" }),
            ).not.toHaveAttribute("data-jkl-variant");

            rerender(
                <Link href="https://example.com" external>
                    Some link
                </Link>,
            );

            expect(
                screen.getByRole("link", { name: "Some link" }),
            ).toHaveAttribute("data-jkl-variant", "external");
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender } = render(
                <Link href="somepage.com">Some link</Link>,
            );

            expect(
                screen.getByRole("link", { name: "Some link" }),
            ).not.toHaveAttribute("data-jkl-tracking");

            rerender(
                <Link
                    href="somepage.com"
                    tracking={{ destination: "checkout" }}
                >
                    Some link
                </Link>,
            );

            expect(
                screen.getByRole("link", { name: "Some link" }),
            ).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ destination: "checkout" }),
            );
        });
    });
});
