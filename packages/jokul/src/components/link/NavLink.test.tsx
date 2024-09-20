import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
    it("should render with the correct text and style", () => {
        const { getByText } = render(<NavLink>Some link</NavLink>);

        expect(getByText("Some link")).toBeInTheDocument();
        expect(getByText("Some link")).toHaveClass("jkl-nav-link");
    });

    it("should have the correct href attribute", () => {
        const { getByText } = render(<NavLink href="somepage.com">Some link</NavLink>);

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
        const { getByText } = render(<NavLink className="my-class">Some link</NavLink>);

        expect(getByText("Some link")).toHaveClass("my-class");
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = render(<NavLink>Listen</NavLink>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass jest-axe tests when active", async () => {
        const { container } = render(<NavLink active>Listen</NavLink>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
