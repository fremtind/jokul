import clsx from "clsx";
import React, { type FC } from "react";
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
    ...rest
}: TagProps) => (
    <span
        className={clsx("jkl-tag", `jkl-tag--${variant}`, className)}
        {...rest}
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
