import { clsx } from "clsx";
import React, { type FC } from "react";
import type { DescriptionListItemProps } from "./types.js";

/**
 * @deprecated Bruk heller den stabile komponenten for DescriptionList sammen med Terms og Details. All funksjonalitet fra Beta-komponenten er tilgjengelige der.
 */
export const DescriptionListItem: FC<DescriptionListItemProps> = ({
    title,
    value,
    supportText,
    className,
    ...rest
}) => {
    return (
        <div
            {...rest}
            className={clsx("jkl-description-list-item--beta", className)}
        >
            <dt className="title">{title}</dt>
            <dd className="value">{value}</dd>
            {supportText && <dd className="support-text">{supportText}</dd>}
        </div>
    );
};
