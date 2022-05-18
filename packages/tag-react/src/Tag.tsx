import cx from "classnames";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

type Variant = "info" | "error" | "warning" | "success";

function getDisplayName(variant?: Variant) {
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

function tagFactory(variant?: Variant) {
    const Tag: FC<TagProps> = ({ className, ...rest }) => (
        <span
            className={cx(
                "jkl-tag",
                {
                    ["jkl-tag--info"]: variant === "info",
                    ["jkl-tag--error"]: variant === "error",
                    ["jkl-tag--warning"]: variant === "warning",
                    ["jkl-tag--success"]: variant === "success",
                },
                className,
            )}
            {...rest}
        />
    );
    Tag.displayName = getDisplayName(variant);
    return Tag;
}

export const Tag = tagFactory();
export const InfoTag = tagFactory("info");
export const ErrorTag = tagFactory("error");
export const WarningTag = tagFactory("warning");
export const SuccessTag = tagFactory("success");
