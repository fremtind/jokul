"use client";

import { LinkList } from "@fremtind/jokul/link-list";
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
        <LinkList label="Innhold" hideLabel className="jkl-body">
            {headings.map((heading) => (
                <LinkList.Link href={`#${heading.slug}`} key={heading.slug}>
                    {heading.text}
                </LinkList.Link>
            ))}
        </LinkList>
    );
};
