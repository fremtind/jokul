import { Link } from "@remix-run/react";
import React, { type FC } from "react";
import { useActiveHeader } from "../activeHeaderContext";
import { type TableOfContentsEntry } from "../tableOfContentsContext";

type TableOfContentsListProps = {
    entries: TableOfContentsEntry[];
    onClick?: (event: React.MouseEvent) => void;
};

export const TableOfContentsList: FC<TableOfContentsListProps> = ({
    entries,
    onClick,
}) => {
    const [activeHeader] = useActiveHeader();

    return (
        <ol className="jkl-body jkl-portal-toc__list">
            {entries.map(({ element }, index) => {
                return (
                    <li
                        key={element.textContent}
                        className="jkl-portal-toc__item"
                        data-active={
                            element.id !== "" && element.id === activeHeader
                        }
                    >
                        <span
                            className="jkl-portal-toc__chapter"
                            aria-hidden="true"
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="jkl-portal-toc__link-container">
                            <Link
                                className="jkl-portal-toc__link"
                                to={`#${element.id}`}
                                onClick={onClick}
                                data-active={
                                    element.id !== "" &&
                                    element.id === activeHeader
                                }
                            >
                                {element.textContent?.replace(/\W+$/, "")}
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
};
