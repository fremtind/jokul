import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { NavLink } from "./NavLink.js";

describe("NavLink", () => {
    it("is not outlined by default", () => {
        render(<NavLink href="#" title="Meld skade" />);

        expect(screen.getByRole("link")).toHaveAttribute(
            "data-outlined",
            "false",
        );
    });

    it("sets data-outlined when outlined", () => {
        render(<NavLink href="#" title="Meld skade" outlined />);

        expect(screen.getByRole("link")).toHaveAttribute(
            "data-outlined",
            "true",
        );
    });
});
