import clsx from "clsx";
import React, { type CSSProperties, forwardRef } from "react";
import { IconButton } from "../icon-button/IconButton.js";
import type { BaseTextInputProps } from "./types.js";

function getWidthAsStyle(
    width?: string,
    maxLength?: number,
): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength) {
        // adapt to maxLength, but capped at 40ch
        const length = `${Math.min(maxLength, 40)}ch`;
        const padding = "24px"; // left + right padding
        return { width: `calc(${length} + ${padding})` };
    }

    return undefined;
}

export const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>(
    (props, ref) => {
        const {
            action,
            align = "left",
            "aria-invalid": ariaInvalid,
            className = "",
            density,
            maxLength,
            style,
            type = "text",
            unit,
            width,
            actionButton,
            ...rest
        } = props;

        return (
            <div
                className="jkl-text-input-wrapper"
                data-invalid={ariaInvalid}
                style={{ ...style, ...getWidthAsStyle(width, maxLength) }}
            >
                <input
                    aria-invalid={ariaInvalid}
                    ref={ref}
                    className={clsx("jkl-text-input__input", className, {
                        "jkl-text-input__input--align-right": align === "right",
                    })}
                    maxLength={maxLength}
                    type={type}
                    {...rest}
                />
                {unit && <span className="jkl-text-input__unit">{unit}</span>}
                {!action &&
                    actionButton &&
                    React.cloneElement(actionButton, {
                        className: clsx(
                            "jkl-text-input-action-button",
                            actionButton.props.className,
                        ),
                    })}
                {action && !actionButton && (
                    <IconButton
                        density={density}
                        className={clsx(
                            "jkl-text-input-action-button",
                            action.className,
                        )}
                        title={action.label}
                        onClick={action.onClick}
                        onFocus={action.onFocus}
                        onBlur={action.onBlur}
                        ref={action.buttonRef}
                        type={action.type || "button"}
                    >
                        {action.icon}
                    </IconButton>
                )}
            </div>
        );
    },
);

BaseTextInput.displayName = "BaseInputField";
