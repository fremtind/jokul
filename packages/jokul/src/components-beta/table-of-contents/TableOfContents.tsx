import clsx from "clsx";
import type React from "react";
import { useId } from "react";
import { TableOfContentsLink } from "./TableOfContentsLink.js";
import type { TableOfContentsProps } from "./types.js";

export const TableOfContents = ({
    label,
    className,
    ...rest
}: TableOfContentsProps): React.JSX.Element => {
    const id = useId();

    return (
        <nav
            className={clsx("jkl-table-of-contents--beta", className)}
            aria-labelledby={`list-${id}-label`}
        >
            <p className="jkl-table-of-contents-title" id={`list-${id}-label`}>
                {label}
            </p>
            <ol {...rest} />
        </nav>
    );
};

TableOfContents.Link = TableOfContentsLink;
