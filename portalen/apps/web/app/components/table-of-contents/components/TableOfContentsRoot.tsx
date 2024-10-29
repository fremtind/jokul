import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";
import { useLocation } from "@remix-run/react";
import React, { useCallback, useEffect, useRef, type FC } from "react";
import { slugify } from "../../../utils/string";
import { useActiveHeader } from "../activeHeaderContext";
import { type TableOfContentRootEntry, type TableOfContentsEntry, useTableOfContents } from "../tableOfContentsContext";
import { TableOfContentsList } from "./TableOfContentsList";

type TableOfContentsRootProps = {
    /**
     * @default "main"
     */
    rootSelector?: string;
    /**
     * @default "h2"
     */
    headingSelector?: string;
    /**
     * @default ".jkl-portal-page-section"
     */
    sectionSelector?: string;
    onClick?: (event: React.MouseEvent) => void;
};

const intersectionOptions = {
    rootMargin: "-20% 0% -35% 0px",
};

export const TableOfContentsRoot: FC<TableOfContentsRootProps> = ({
    rootSelector = "main",
    headingSelector = "h2",
    onClick,
}) => {
    const { pathname } = useLocation();
    const [tableOfContents, setTableOfContents] = useTableOfContents();

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        const root = document.querySelector<HTMLElement>(rootSelector);
        const headings: NodeListOf<HTMLHeadingElement> | undefined = root?.querySelectorAll(headingSelector);

        const tocRoot: TableOfContentRootEntry = {
            children: [],
        };

        if (!headings) {
            setTableOfContents(tocRoot);
            return;
        }

        headings.forEach((heading) => {
            if (heading.id === "") {
                heading.id = slugify(heading.textContent || "");
            }
        });

        let parentStack: TableOfContentsEntry[] = [];
        let previous: TableOfContentsEntry | null = null;
        for (const heading of headings) {
            const entry: TableOfContentsEntry = {
                level: Number.parseInt(heading.nodeName.replace("H", "")),
                element: heading,
                children: [],
            };

            const isSibling = !previous || previous.level === entry.level;
            const isLowerHeadingLevel = previous && previous.level < entry.level;
            const isHigherHeadingLevel = previous && previous.level > entry.level;

            if (isSibling) {
                const parent = parentStack[parentStack.length - 1];
                if (parent) {
                    parent.children.push(entry);
                } else {
                    tocRoot.children.push(entry);
                }
            }

            if (previous && isLowerHeadingLevel) {
                parentStack.push(previous);
                previous.children.push(entry);
            }

            if (isHigherHeadingLevel) {
                parentStack.pop();
                const parent = parentStack[parentStack.length - 1];
                if (parent) {
                    parent.children.push(entry);
                } else {
                    tocRoot.children.push(entry);
                }
            }

            previous = entry;
        }

        setTableOfContents(tocRoot);
    }, [setTableOfContents, pathname, headingSelector, rootSelector]);

    const headings = useRef<NodeListOf<HTMLElement>>();
    useEffect(() => {
        const pageElement = document.querySelector<HTMLElement>(rootSelector);
        if (!pageElement) {
            return;
        }
        headings.current = pageElement.querySelectorAll(headingSelector);
    }, [pathname, headingSelector, rootSelector]);

    const [, setActiveHeader] = useActiveHeader();

    const pathbreaker = useCallback(() => {
        return pathname;
    }, [pathname]);

    const handleIntersect: IntersectionObserverCallback = useCallback(
        (intersects: IntersectionObserverEntry[]) => {
            if (intersects.some((intersect) => intersect.isIntersecting)) {
                const intersecting = intersects
                    .filter((intersection) => intersection.isIntersecting)
                    .sort((a, b) => a.intersectionRatio - b.intersectionRatio);

                const intersectingHeadings = intersecting.map((intersection) => intersection.target?.id);

                if (intersectingHeadings[0]) {
                    setActiveHeader(intersectingHeadings[0]);
                }
            }
        },
        [setActiveHeader],
    );

    // TODO: oppdater Jøkul til å tillate MutableRefObject.
    useIntersectionObserver(headings as any, handleIntersect, pathbreaker, intersectionOptions);

    return <TableOfContentsList entries={tableOfContents.children} onClick={onClick} />;
};
