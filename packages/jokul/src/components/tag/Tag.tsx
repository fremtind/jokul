import clsx from "clsx";
import React, { type FC } from "react";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { TagProps } from "./types.js";

function getDisplayName(variant?: TagProps["variant"]) {
    switch (variant) {
        case "info":
            return "InfoTag";
        case "error":
            return "ErrorTag";
        case "warning":
            return "WarningTag";
        case "success":
            return "SuccessTag";
        default:
            return "Tag";
    }
}

// Vil fjernes etterhvert :-)
function tagFactory(variant?: TagProps["variant"]) {
    const Tag: FC<TagProps> = ({ className, children, ...rest }) => (
        <span
            {...rest}
            className={clsx("jkl-tag", className)}
            data-color={variant}
        >
            {children}
        </span>
    );
    Tag.displayName = getDisplayName(variant);
    return Tag;
}

export const Tag = ({
    className,
    variant = "neutral",
    children,
    trackingProps,
    ...rest
}: TagProps) => (
    <span
        {...rest}
        className={clsx("jkl-tag", className)}
        data-color={variant}
        data-track-component-name={COMPONENT_NAMES.Tag}
        data-track-id={
            trackingProps?.id ??
            (typeof children === "string" ? children : undefined)
        }
        data-track-label={typeof children === "string" ? children : undefined}
        data-track-variant={variant}
        {...getExtraTrackingAttributes(trackingProps?.extra, rest)}
    >
        {children}
    </span>
);

/**
 * @deprecated bruk {@link Tag} med variant="info"
 */
export const InfoTag = tagFactory("info");
/**
 * @deprecated bruk {@link Tag} med variant="error"
 */
export const ErrorTag = tagFactory("error");
/**
 * @deprecated bruk {@link Tag} med variant="warning"
 */
export const WarningTag = tagFactory("warning");
/**
 * @deprecated bruk {@link Tag} med variant="success"
 */
export const SuccessTag = tagFactory("success");
