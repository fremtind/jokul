import React, { type FC } from "react";
import type { DescriptionListItemProps } from "./types.js";

export const DescriptionListItem: FC<DescriptionListItemProps> = ({
    title,
    value,
    description,
    ...rest
}) => {
    return (
        <div {...rest} className="jkl-description-list-item--beta">
            <dt className="title">{title}</dt>
            <dd className="value">{value}</dd>
            {description && <dd className="description">{description}</dd>}
        </div>
    );
};
