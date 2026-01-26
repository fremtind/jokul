"use client";

import { TableOfContents } from "@fremtind/jokul/table-of-contents";
import { useEffect, useState } from "react";
import slugify from "slugify";

interface Heading {
    text: string;
    slug: string;
    level: string;
}

export const ComponentNav = () => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const headingElements =
            document.querySelectorAll<HTMLHeadingElement>("h2");

        const newHeadings: Heading[] = Array.from(headingElements).map((el) => {
            const text = el.textContent?.trim() || "";
            const slug = slugify(text, { lower: true, strict: true });

            el.id = slug;

            return {
                text,
                slug,
                level: el.tagName,
            };
        });

        setHeadings(newHeadings);
    }, []);

    return (
        <TableOfContents label="Innhold" className="jkl-body">
            {headings.map((heading) => (
                <TableOfContents.Link
                    href={`#${heading.slug}`}
                    key={heading.slug}
                >
                    {heading.text}
                </TableOfContents.Link>
            ))}
        </TableOfContents>
    );
};
