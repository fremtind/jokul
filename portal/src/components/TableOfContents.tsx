"use client";

import { Link } from "@fremtind/jokul/link";
import { ListItem, OrderedList } from "@fremtind/jokul/list";
import slugify from "@sindresorhus/slugify";
import { useEffect, useState } from "react";

function findHeadings(rootSelector = "main") {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const foundHeadings = root.querySelectorAll(
        ":is(h2):not([data-toc-ignore])",
    ) as NodeListOf<HTMLHeadingElement>;

    return foundHeadings;
}

function updateHeadingIds(headings: NodeListOf<HTMLHeadingElement>) {
    headings.forEach((heading, index) => {
        if (heading.id) return; // Skip if the heading already has an ID

        const id = slugify(heading.textContent || `toc-heading-${index}`);
        heading.id = id;
    });
}

export const TableOfContents = () => {
    const [headings, setHeadings] = useState<
        NodeListOf<HTMLHeadingElement> | undefined
    >();

    useEffect(() => {
        const foundHeadings = findHeadings();
        if (foundHeadings) {
            updateHeadingIds(foundHeadings);
            setHeadings(foundHeadings);
        }
    }, []);

    return (
        <nav aria-label="Innhold på siden" className="table-of-contents">
            <h2 data-toc-ignore="true">Innholdsfortegnelse</h2>
            <OrderedList className="jkl-body">
                {headings &&
                    Array.from(headings).map((heading) => (
                        <ListItem key={heading.id}>
                            <Link href={`#${heading.id}`}>
                                {heading.textContent}
                            </Link>
                        </ListItem>
                    ))}
            </OrderedList>
        </nav>
    );
};
