import clsx from "clsx";
import React, { useId } from "react";
import { LinkListLink } from "./LinkListItem.js";
import type { LinkListProps } from "./types.js";

export const LinkList = ({
    label,
    variant,
    className,
    ...rest
}: LinkListProps): React.JSX.Element => {
    const id = useId();
    const Component = variant === "ordered" ? "ol" : "ul";

    return (
        <nav
            className={clsx("jkl-link-list", className)}
            aria-labelledby={`list-${id}-label`}
        >
            <p className="jkl-link-list-title" id={`list-${id}-label`}>
                {label}
            </p>
            <Component {...rest} />
        </nav>
    );
};

LinkList.Link = LinkListLink;
