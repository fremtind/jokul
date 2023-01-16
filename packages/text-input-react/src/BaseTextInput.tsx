import { Density } from "@fremtind/jkl-core";
import { IconButton, type IconVariant } from "@fremtind/jkl-icon-button-react";
import cn from "classnames";
import React, {
    type CSSProperties,
    forwardRef,
    type MouseEventHandler,
    type ReactNode,
    InputHTMLAttributes,
    HTMLProps,
} from "react";

function getWidthAsStyle(width?: string, maxLength?: number): CSSProperties | undefined {
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

export interface Action extends Exclude<HTMLProps<HTMLButtonElement>, "disabled"> {
    icon: IconVariant;
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface BaseTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
    /**
     * Brukes til inputfelter hvor det brukes maskering, for formatering av store tall. Brukes typisk bare til valuta.
     * @default "left"
     */
    align?: "left" | "right";
    action?: Action;
    density?: Density;
    /**
     * Benevnelse for feltet. Unngå å bruke både benevnelse og handling samtidig
     * @example "kr"
     * */
    unit?: ReactNode;
    width?: string;
}

export const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>((props, ref) => {
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
        ...rest
    } = props;
    return (
        <div className="jkl-text-input-wrapper" data-invalid={ariaInvalid} style={getWidthAsStyle(width)}>
            <input
                aria-invalid={ariaInvalid}
                ref={ref}
                className={cn("jkl-text-input__input", className, {
                    "jkl-text-input__input--align-right": align === "right",
                })}
                style={{ ...style, ...getWidthAsStyle(width, maxLength) }}
                maxLength={maxLength}
                type={type}
                {...rest}
            />
            {unit && <span className="jkl-text-input__unit">{unit}</span>}
            {action && (
                <IconButton
                    density={density}
                    className={cn("jkl-text-input-action-button", action.className)}
                    iconType={action.icon}
                    buttonTitle={action.label}
                    onClick={action.onClick}
                    onFocus={action.onFocus}
                    onBlur={action.onBlur}
                    ref={action.buttonRef}
                />
            )}
        </div>
    );
});

BaseTextInput.displayName = "BaseInputField";
