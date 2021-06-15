import React from "react";
import { FC } from "react";

export interface TermAndDetails {
    term: string;
    details: string[];
}

export interface DescriptionListProps {
    className?: string;
    items: TermAndDetails[];
}

export const DescriptionList: FC<DescriptionListProps> = ({ items, className }) => {
    return (
        <dl className={`jkl-description-list ${className}`}>
            {items.map(({ term, details }) => (
                <div className="jkl-description-list__group">
                    <dt className="jkl-heading-small">{term}</dt>
                    <div className="jkl-description-list__group__values">
                        {details.map((value) => (
                            <dd className="jkl-body">{value}</dd>
                        ))}
                    </div>
                </div>
            ))}
        </dl>
    );
};
