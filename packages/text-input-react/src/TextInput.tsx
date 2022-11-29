import { Label, SupportLabel, LabelVariant, LabelProps, Density } from "@fremtind/jkl-core";
import { IconButton, IconVariant } from "@fremtind/jkl-icon-button-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, ButtonHTMLAttributes, MouseEventHandler, type ReactNode } from "react";
import { BaseInputField, BaseProps } from "./BaseInputField";

export interface Action extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    icon: IconVariant;
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface Props extends BaseProps {
    label: string;
    labelProps?: Omit<LabelProps, "children" | "density" | "standAlone">;
    helpLabel?: ReactNode;
    errorLabel?: ReactNode;
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    "data-testautoid"?: string;
    density?: Density;
    inline?: boolean;
    action?: Action;
    /**
     * Benevnelse for feltet. Unngå å bruke både benevnelse og handling samtidig
     * @example "kr"
     * */
    unit?: ReactNode;
    inputClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        id,
        className,
        label,
        labelProps,
        helpLabel,
        errorLabel,
        variant,
        inline,
        density,
        action,
        unit,
        "data-testautoid": testAutoId,
        inputClassName,
        ...inputProps
    } = props;

    const uid = useId(id || "jkl-text-input", { generateSuffix: !id });
    const supportId = useId("jkl-support-label");
    const hasSupportText = helpLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

    return (
        <div
            data-testid="jkl-text-input"
            className={cn("jkl-text-input", className, {
                "jkl-text-input--inline": inline,
            })}
            data-density={inline ? "compact" : density}
        >
            <Label
                variant={variant}
                {...labelProps}
                srOnly={inline || labelProps?.srOnly}
                standAlone
                density={density}
                htmlFor={uid}
            >
                {label}
            </Label>
            <div className="jkl-text-input-wrapper" data-invalid={!!errorLabel}>
                <BaseInputField
                    ref={ref}
                    id={uid}
                    describedBy={describedBy}
                    invalid={!!errorLabel}
                    data-testautoid={testAutoId}
                    className={inputClassName}
                    {...inputProps}
                />
                {unit && <span className="jkl-text-input__unit">{unit}</span>}
                {action && (
                    <IconButton
                        className="jkl-text-input-action-button"
                        density={density}
                        iconType={action.icon}
                        buttonTitle={action.label}
                        onClick={action.onClick}
                        onFocus={action.onFocus}
                        onBlur={action.onBlur}
                    />
                )}
            </div>
            <SupportLabel
                id={supportId}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                density={density}
                srOnly={inline}
            />
        </div>
    );
});
TextInput.displayName = "TextInput";
