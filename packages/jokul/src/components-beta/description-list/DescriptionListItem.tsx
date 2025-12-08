import { clsx } from "clsx";
import type { FC } from "react";
import type { DescriptionListItemProps } from "./types.js";

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
