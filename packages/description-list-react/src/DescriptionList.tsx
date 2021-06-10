import React from "react";
import { FC } from "react";

interface CommonProps {
    className?: string;
}

export interface DescriptionListProps extends CommonProps {}

export interface DescriptionTermProps extends CommonProps {}

export interface DescriptionDetailsProps extends CommonProps {}

export const DescriptionTerm: FC<DescriptionTermProps> = ({ children, className }) => {
    return <dt className={className}>{children}</dt>;
};

export const DescriptionDetails: FC<DescriptionDetailsProps> = ({ children, className }) => {
    return <dd className={className}>{children}</dd>;
};

export const DescriptionList: FC<DescriptionListProps> = ({ children, className }) => {
    return <dl className={`jkl-description-list ${className}`}>{children}</dl>;
};
