import { useClickOutside } from "@fremtind/jkl-react-hooks";
import React, { useCallback, useEffect, useState, type FC } from "react";
import { useAnimatedHeight } from "../../../hooks";
import { useActiveHeader } from "../activeHeaderContext";
import { TableOfContentsRoot } from "./TableOfContentsRoot";

export const TableOfContentsWrapper: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tocContainer] = useAnimatedHeight(isOpen, {
        timing: "lazy",
    });
    useClickOutside(tocContainer, () => {
        setIsOpen(false);
    });
    const onClick = useCallback((event: React.MouseEvent) => {
        const link = event.target as HTMLAnchorElement;
        link.dataset.clicked = "true";
        setIsOpen(false);
        setTimeout(() => {
            link.dataset.clicked = "false";
        }, 250);
    }, []);

    const [activeHeader] = useActiveHeader();
    useEffect(() => {
        if (!activeHeader) {
            return;
        }

        const activeLink = document.querySelector(
            `.jkl-portal-toc__link[href*="${activeHeader}"]`,
        );

        if (!activeLink) {
            return;
        }

        // Scroll den aktive lenken til midten av innholdsfortegnelsen
        setTimeout(() => {
            (activeLink as HTMLElement).style.scrollMarginBlock =
                "var(--jkl-spacing-12)";
            activeLink.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
            });
        }, 0);
    }, [activeHeader]);

    return (
        <nav
            ref={tocContainer}
            className="jkl-portal-toc"
            data-collapsed={!isOpen}
            title="sidenavigasjon"
        >
            <p className="jkl-portal-toc__heading">Innhold</p>
            <TableOfContentsRoot onClick={onClick} />
            <button
                aria-label="Åpne innholdsfortegnelse"
                hidden={isOpen ? true : undefined}
                className="jkl-portal-toc__button"
                onClick={() => {
                    setIsOpen(true);
                    tocContainer.current?.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            />
        </nav>
    );
};
