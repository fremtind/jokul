import React, { type FC } from "react";
import type { DescriptionListItemProps } from "./types.js";

export const DescriptionListItem: FC<DescriptionListItemProps> = ({
    title,
    value,
    supportText,
    ...rest
}) => {
    return (
        <div {...rest} className="jkl-description-list-item--beta">
            <dt className="title">{title}</dt>
            <dd className="value">{value}</dd>
            {supportText && <dd className="support-text">{supportText}</dd>}
        </div>
    );
};
