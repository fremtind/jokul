import clsx from "clsx";
import React, { useId } from "react";
import { LinkListLink } from "./LinkListLink.js";
import type { LinkListProps } from "./types.js";

export const LinkList = ({
    label,
    showLabel = false,
    className,
    ...rest
}: LinkListProps): React.JSX.Element => {
    const id = useId();

    return (
        <nav
            className={clsx("jkl-link-list--beta", className)}
            aria-labelledby={`list-${id}-label`}
        >
            <p
                className="jkl-link-list-title"
                id={`list-${id}-label`}
                hidden={!showLabel}
            >
                {label}
            </p>
            <ul aria-labelledby={`list-${id}-label`} {...rest} />
        </nav>
    );
};

LinkList.Link = LinkListLink;
