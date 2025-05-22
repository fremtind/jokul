import clsx from "clsx";
import React, { type FC } from "react";
import type {
    DescriptionDetailProps,
    DescriptionListProps,
    DescriptionTermProps,
} from "./types.js";

export const DescriptionList: FC<DescriptionListProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <dl {...rest} className={clsx("jkl-description-list", className)}>
            {children}
        </dl>
    );
};

export const DescriptionTerm: FC<DescriptionTermProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <dt {...rest} className={clsx("jkl-description-list__term", className)}>
            {children}
        </dt>
    );
};

export const DescriptionDetail: FC<DescriptionDetailProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <dd
            {...rest}
            className={clsx("jkl-description-list__detail", className)}
        >
            {children}
        </dd>
    );
};
