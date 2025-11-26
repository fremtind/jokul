import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { LinkList } from "./LinkList.js";

describe("LinkList", () => {
    it("renders as expected", () => {
        render(
            <LinkList label="Distributører">
                <LinkList.Link>SpareBank 1</LinkList.Link>
                <LinkList.Link>DNB</LinkList.Link>
                <LinkList.Link>LOfavør</LinkList.Link>
                <LinkList.Link>Norsk Sykepleierforbund</LinkList.Link>
            </LinkList>,
        );
        expect(screen.getByText("SpareBank 1")).toBeInTheDocument();
        expect(screen.getByText("DNB")).toBeInTheDocument();
        expect(screen.getByText("LOfavør")).toBeInTheDocument();
        expect(screen.getByText("Norsk Sykepleierforbund")).toBeInTheDocument();
    });

    it("renders as unordered list", () => {
        render(
            <LinkList label="Distributører">
                <LinkList.Link href="https://www.sparebank1.no/nb/bank/privat/forsikring.html">
                    SpareBank 1
                </LinkList.Link>
            </LinkList>,
        );

        const listElement = screen.getByRole("list");
        expect(listElement.tagName.toLowerCase()).toBe("ul");
    });

    it("should have the correct href attribute", () => {
        const linkText = "SpareBank 1";
        const linkUrl =
            "https://www.sparebank1.no/nb/bank/privat/forsikring.html";

        render(
            <LinkList label="Distributører">
                <LinkList.Link href={linkUrl}>{linkText}</LinkList.Link>
            </LinkList>,
        );

        const linkElement = screen.getByText(linkText);

        expect(linkElement).toHaveAttribute("href", linkUrl);
    });

    it("is accessible", async () => {
        const { container } = render(
            <LinkList label="Distributører">
                <LinkList.Link>SpareBank 1</LinkList.Link>
            </LinkList>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
