import clsx from "clsx";
import React, { type FC } from "react";
import type { DescriptionListItemProps } from "./types.js";

export const DescriptionListItem: FC<DescriptionListItemProps> = ({
    terms,
    details,
    supportText,
    className,
    ...rest
}) => {
    return (
        <div {...rest} className={clsx("jkl-description-list-item", className)}>
            {Array.isArray(terms) ? (
                terms.map((term, index) => (
                    <dt className="term" key={index}>
                        {term}
                    </dt>
                ))
            ) : (
                <dt className="term">{terms}</dt>
            )}
            {Array.isArray(details) ? (
                details.map((detail, index) => (
                    <dd className="detail" key={index}>
                        {detail}
                    </dd>
                ))
            ) : (
                <dd className="detail">{details}</dd>
            )}
            {supportText && <dd className="support-content">{supportText}</dd>}
        </div>
    );
};
