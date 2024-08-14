import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { LinkList } from "../src";

describe("LinkList", () => {
    test(`LinkList should render as expected`, () => {
        render(
            <LinkList variant="unordered">
                <LinkList.Item>
                    <LinkList.Link>SpareBank 1</LinkList.Link>
                </LinkList.Item>
                <LinkList.Item>
                    <LinkList.Link>DNB</LinkList.Link>
                </LinkList.Item>
                <LinkList.Item>
                    <LinkList.Link>LOfavør</LinkList.Link>
                </LinkList.Item>
                <LinkList.Item>
                    <LinkList.Link>Norsk Sykepleierforbund</LinkList.Link>
                </LinkList.Item>
            </LinkList>,
        );
        expect(screen.getByText("SpareBank 1")).toBeInTheDocument();
        expect(screen.getByText("DNB")).toBeInTheDocument();
        expect(screen.getByText("LOfavør")).toBeInTheDocument();
        expect(screen.getByText("Norsk Sykepleierforbund")).toBeInTheDocument();
    });

    test("a11y", async () => {
        const { container } = render(
            <LinkList variant="unordered">
                <LinkList.Item>
                    <LinkList.Link>SpareBank 1</LinkList.Link>
                </LinkList.Item>
            </LinkList>,
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test("renders as ordered list", () => {
        render(
            <LinkList variant="ordered">
                <LinkList.Item>
                    <LinkList.Link>SpareBank 1</LinkList.Link>
                </LinkList.Item>
            </LinkList>,
        );

        const listElement = screen.getByRole("list");
        expect(listElement.tagName.toLowerCase()).toBe("ol");
    });

    test("renders as unordered list", () => {
        render(
            <LinkList variant="unordered">
                <LinkList.Item>
                    <LinkList.Link href="https://www.sparebank1.no/nb/bank/privat/forsikring.html">
                        SpareBank 1
                    </LinkList.Link>
                </LinkList.Item>
            </LinkList>,
        );

        const listElement = screen.getByRole("list");
        expect(listElement.tagName.toLowerCase()).toBe("ul");
    });

    test("should have the correct href attribute", () => {
        const linkText = "SpareBank 1";
        const linkUrl = "https://www.sparebank1.no/nb/bank/privat/forsikring.html";

        render(
            <LinkList variant="unordered">
                <LinkList.Item>
                    <LinkList.Link href={linkUrl}>{linkText}</LinkList.Link>
                </LinkList.Item>
            </LinkList>,
        );

        const linkElement = screen.getByText(linkText);

        expect(linkElement).toHaveAttribute("href", linkUrl);
    });
});
