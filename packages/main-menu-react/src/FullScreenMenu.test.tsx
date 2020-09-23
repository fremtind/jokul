import React from "react";
import { render, screen } from "@testing-library/react";
import { FullScreenMenu, RootItem } from ".";
import { axe } from "jest-axe";

const menuContent: RootItem = {
    linkText: "Blogg",
    basePath: "/blogg",
    content: [
        {
            linkText: "First post",
            content: "/blog/first",
        },
        {
            linkText: "Second post",
            content: "/blog/second",
        },
    ],
};

describe("Full screen menu", () => {
    it("displays the correct title", () => {
        render(<FullScreenMenu baseItem={menuContent} />);

        expect(screen.getByText(menuContent.linkText)).toBeVisible();
    });

    it("renders the corect elements", () => {
        render(<FullScreenMenu baseItem={menuContent} />);

        menuContent.content.forEach((item) => {
            expect(screen.getByText(item.linkText)).toBeInTheDocument();
        });
    });

    it("applies passed className", () => {
        render(<FullScreenMenu baseItem={menuContent} className="test-class" />);

        expect(screen.getByTestId(`full-screen-menu--${menuContent.linkText}`)).toHaveClass("test-class");
    });

    it("starts closed", () => {
        render(<FullScreenMenu baseItem={menuContent} />);

        expect(screen.getByTestId(`full-screen-menu--${menuContent.linkText}`)).not.toHaveClass(
            "jkl-full-screen-menu--open",
        );
    });
});

describe("a11y", () => {
    it("full screen menu should be a11y compliant", async () => {
        const { container } = render(<FullScreenMenu baseItem={menuContent} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
