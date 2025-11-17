import clsx from "clsx";
import React from "react";
import { DescriptionListItem } from "./DescriptionListItem.js";
import type { DescriptionListProps } from "./types.js";

export const DescriptionList = ({
    className,
    alwaysJustified = false,
    children,
    ...rest
}: DescriptionListProps): React.JSX.Element => {
    return (
        <dl
            {...rest}
            className={clsx("jkl-description-list--beta", className)}
            data-always-justified={alwaysJustified}
        >
            {children}
        </dl>
    );
};

DescriptionList.Item = DescriptionListItem;
