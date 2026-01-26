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
    separators = false,
    alignment = "horizontal",
    ...rest
}) => {
    return (
        <dl
            {...rest}
            className={clsx("jkl-description-list", className)}
            data-separators={separators}
            data-alignment={alignment}
        >
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
        <>
            <div className="seperator" />
            <dt
                {...rest}
                className={clsx("jkl-description-list__term", className)}
            >
                {children}
            </dt>
        </>
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
