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
            className={clsx(
                "jkl-tag",
                {
                    "jkl-tag--info": variant === "info",
                    "jkl-tag--error": variant === "error",
                    "jkl-tag--warning": variant === "warning",
                    "jkl-tag--success": variant === "success",
                },
                className,
            )}
            {...rest}
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
    tracking,
    ...rest
}: TagProps) => (
    <span
        className={clsx("jkl-tag", `jkl-tag--${variant}`, className)}
        {...rest}
        {...getExtraTrackingAttributes(tracking?.extra)}
        data-track-component-name={COMPONENT_NAMES.Tag}
        data-track-id={
            tracking?.id ??
            (typeof children === "string" ? children : undefined)
        }
        data-track-label={typeof children === "string" ? children : undefined}
        data-track-variant={variant}
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
