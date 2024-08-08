import { Density } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC, HTMLAttributes, MouseEventHandler } from "react";

export interface DismissAction extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    density?: Density;
    dismissAction?: DismissAction;
}

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
    const Tag: FC<TagProps> = ({ className, density, dismissAction, children, ...rest }) => (
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
            data-density={density}
            {...rest}
        >
            {children}
            {dismissAction && (
                <IconButton
                    className="jkl-tag__dismiss-action"
                    density={density}
                    title={dismissAction.label}
                    onClick={dismissAction.onClick}
                    onFocus={dismissAction.onFocus}
                    onBlur={dismissAction.onBlur}
                >
                    <CloseIcon variant="small" bold />
                </IconButton>
            )}
        </span>
    );
    Tag.displayName = getDisplayName(variant);
    return Tag;
}

export const Tag = tagFactory();
export const InfoTag = tagFactory("info");
export const ErrorTag = tagFactory("error");
export const WarningTag = tagFactory("warning");
export const SuccessTag = tagFactory("success");
