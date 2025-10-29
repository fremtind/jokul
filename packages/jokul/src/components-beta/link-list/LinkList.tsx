import clsx from "clsx";
import React, { useId } from "react";
import { LinkListLink } from "./LinkListLink.js";
import type { LinkListProps } from "./types.js";

export const LinkList = ({
    label,
    hideLabel = true,
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
                hidden={hideLabel}
            >
                {label}
            </p>
            <ul aria-labelledby={`list-${id}-label`} {...rest} />
        </nav>
    );
};

LinkList.Link = LinkListLink;
