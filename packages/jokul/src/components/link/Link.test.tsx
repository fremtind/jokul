import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Link } from "./Link.js";

const CustomLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a">
>(function CustomLink(props, ref) {
    return <a ref={ref} {...props} />;
});

const RouterLink = React.forwardRef<
    HTMLAnchorElement,
    Omit<React.ComponentPropsWithoutRef<"a">, "href"> & { to: string }
>(function RouterLink({ to, ...props }, ref) {
    return <a ref={ref} href={to} {...props} />;
});

describe("Link", () => {
    it("renders as an anchor by default", () => {
        render(<Link href="/test">Lenke</Link>);

        expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
    });

    it("supports custom components in as", () => {
        render(
            <Link as={CustomLink} href="/custom">
                Lenke
            </Link>,
        );

        expect(screen.getByRole("link")).toHaveAttribute("href", "/custom");
    });

    it("supports router components using to-prop", () => {
        render(
            <Link as={RouterLink} to="/react-router-path">
                Lenke
            </Link>,
        );

        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            "/react-router-path",
        );
    });

    it("falls back to anchor when an invalid HTML tag is passed in as-prop", () => {
        const invalidProps = {
            as: "button",
            href: "/test",
        } as unknown as React.ComponentProps<typeof Link>;

        render(<Link {...invalidProps}>Lenke</Link>);

        const link = screen.getByRole("link");
        expect(link.tagName).toBe("A");
    });
});
