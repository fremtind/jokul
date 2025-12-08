import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { TableOfContents } from "./TableOfContents.js";

describe("TableOfContents", () => {
    it("renders as expected", () => {
        render(
            <TableOfContents label="Distributører">
                <TableOfContents.Link>SpareBank 1</TableOfContents.Link>
                <TableOfContents.Link>DNB</TableOfContents.Link>
                <TableOfContents.Link>LOfavør</TableOfContents.Link>
                <TableOfContents.Link>
                    Norsk Sykepleierforbund
                </TableOfContents.Link>
            </TableOfContents>,
        );
        expect(screen.getByText("SpareBank 1")).toBeInTheDocument();
        expect(screen.getByText("DNB")).toBeInTheDocument();
        expect(screen.getByText("LOfavør")).toBeInTheDocument();
        expect(screen.getByText("Norsk Sykepleierforbund")).toBeInTheDocument();
    });

    it("renders as ordered list", () => {
        render(
            <TableOfContents label="Distributører">
                <TableOfContents.Link>SpareBank 1</TableOfContents.Link>
            </TableOfContents>,
        );

        const listElement = screen.getByRole("list");
        expect(listElement.tagName.toLowerCase()).toBe("ol");
    });

    it("should have the correct href attribute", () => {
        const linkText = "SpareBank 1";
        const linkUrl =
            "https://www.sparebank1.no/nb/bank/privat/forsikring.html";

        render(
            <TableOfContents label="Distributører">
                <TableOfContents.Link href={linkUrl}>
                    {linkText}
                </TableOfContents.Link>
            </TableOfContents>,
        );

        const linkElement = screen.getByText(linkText);

        expect(linkElement).toHaveAttribute("href", linkUrl);
    });

    it("is accessible", async () => {
        const { container } = render(
            <TableOfContents label="Distributører">
                <TableOfContents.Link>SpareBank 1</TableOfContents.Link>
            </TableOfContents>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
