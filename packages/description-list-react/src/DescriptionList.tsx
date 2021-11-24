import classnames from "classnames";
import React, { FC } from "react";

export interface DescriptionListProps {
    className?: string;
}

export const DescriptionList: FC<DescriptionListProps> = ({ children, className }) => {
    return <dl className={classnames("jkl-description-list", className)}>{children}</dl>;
};

export interface DescriptionTermProps {
    className?: string;
}

export const DescriptionTerm: FC<DescriptionTermProps> = ({ children, className }) => {
    return <dt className={classnames("jkl-description-list__term", className)}>{children}</dt>;
};

export interface DescriptionDetailProps {
    className?: string;
}

export const DescriptionDetail: FC<DescriptionDetailProps> = ({ children, className }) => {
    return <dd className={classnames("jkl-description-list__detail", className)}>{children}</dd>;
};
