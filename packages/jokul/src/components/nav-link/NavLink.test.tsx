import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { NavLink } from "./NavLink.js";

describe("NavLink", () => {
    it("should render with the correct text and style", () => {
        const { getByText } = render(<NavLink>Some link</NavLink>);

        expect(getByText("Some link")).toBeInTheDocument();
        expect(getByText("Some link")).toHaveClass("jkl-nav-link");
    });

    it("should have the correct href attribute", () => {
        const { getByText } = render(
            <NavLink href="somepage.com">Some link</NavLink>,
        );

        expect(getByText("Some link")).toHaveAttribute("href", "somepage.com");
    });

    it("should get the correct style when active", () => {
        const { getByText } = render(<NavLink active>Some link</NavLink>);

        expect(getByText("Some link")).toHaveClass("jkl-nav-link--active");
    });

    it("should render as the supplied element", () => {
        const { getByText } = render(
            <NavLink as="div" active>
                Some link
            </NavLink>,
        );

        expect(getByText("Some link").nodeName).toEqual("DIV");
    });

    it("should get the supplied className", () => {
        const { getByText } = render(
            <NavLink className="my-class">Some link</NavLink>,
        );

        expect(getByText("Some link")).toHaveClass("my-class");
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = render(<NavLink>Listen</NavLink>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests when active", async () => {
        const { container } = render(<NavLink active>Listen</NavLink>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    describe("tracking", () => {
        it("merker lenken som sporbar med komponentnavn", () => {
            const { getByText } = render(
                <NavLink href="somepage.com">Some link</NavLink>,
            );

            expect(getByText("Some link")).toHaveAttribute(
                "data-jkl-tracked",
                "NavLink",
            );
            expect(getByText("Some link")).toHaveAttribute(
                "data-jkl-has-icon",
                "true",
            );
        });

        it("setter data-jkl-variant og data-jkl-selected basert på propene", () => {
            const { getByText, rerender } = render(
                <NavLink href="somepage.com">Some link</NavLink>,
            );

            expect(getByText("Some link")).not.toHaveAttribute(
                "data-jkl-variant",
            );
            expect(getByText("Some link")).not.toHaveAttribute(
                "data-jkl-selected",
            );

            rerender(
                <NavLink href="somepage.com" back active>
                    Some link
                </NavLink>,
            );

            expect(getByText("Some link")).toHaveAttribute(
                "data-jkl-variant",
                "back",
            );
            expect(getByText("Some link")).toHaveAttribute(
                "data-jkl-selected",
                "true",
            );
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { getByText, rerender } = render(
                <NavLink href="somepage.com">Some link</NavLink>,
            );

            expect(getByText("Some link")).not.toHaveAttribute(
                "data-jkl-tracking",
            );

            rerender(
                <NavLink
                    href="somepage.com"
                    tracking={{ destination: "dashboard" }}
                >
                    Some link
                </NavLink>,
            );

            expect(getByText("Some link")).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ destination: "dashboard" }),
            );
        });
    });
});
