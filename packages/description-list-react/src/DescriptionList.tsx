import { WithChildren } from "@fremtind/jkl-core";
import classnames from "classnames";
import React, { FC } from "react";

export interface DescriptionListProps extends WithChildren {
    className?: string;
}

export const DescriptionList: FC<DescriptionListProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <dl {...rest} className={classnames("jkl-description-list", className)}>
            {children}
        </dl>
    );
};

export interface DescriptionTermProps extends WithChildren {
    className?: string;
}

export const DescriptionTerm: FC<DescriptionTermProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <dt
            {...rest}
            className={classnames("jkl-description-list__term", className)}
        >
            {children}
        </dt>
    );
};

export interface DescriptionDetailProps extends WithChildren {
    className?: string;
}

export const DescriptionDetail: FC<DescriptionDetailProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <dd
            {...rest}
            className={classnames("jkl-description-list__detail", className)}
        >
            {children}
        </dd>
    );
};
