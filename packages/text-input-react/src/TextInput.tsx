import { Label, SupportLabel, LabelVariant, LabelProps } from "@fremtind/jkl-core";
import { IconButton, IconVariant } from "@fremtind/jkl-icon-button-react";
import { useId } from "@fremtind/jkl-react-hooks";
import classNames from "classnames";
import React, { forwardRef, ButtonHTMLAttributes, MouseEventHandler } from "react";
import { BaseInputField, BaseProps } from "./BaseInputField";

export interface Action extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    icon: IconVariant;
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface Props extends BaseProps {
    label: string;
    labelProps?: Omit<LabelProps, "children" | "forceCompact" | "standAlone">;
    helpLabel?: string;
    errorLabel?: string;
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    "data-testautoid"?: string;
    forceCompact?: boolean;
    inline?: boolean;
    action?: Action;
    inputClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            id,
            className,
            label,
            labelProps,
            helpLabel,
            errorLabel,
            variant,
            inline,
            forceCompact,
            action,
            "data-testautoid": testAutoId,
            inputClassName,
            ...inputProps
        },
        ref,
    ) => {
        const uid = useId(id || "jkl-text-input", { generateSuffix: !id });
        const supportId = useId("jkl-support-label");
        const hasSupportText = helpLabel || errorLabel;
        const describedBy = hasSupportText ? supportId : undefined;
        const componentClassName = classNames(
            {
                "jkl-text-input": true,
                "jkl-text-input--inline": inline,
                "jkl-text-input--compact": forceCompact,
                "jkl-text-input--action": action,
            },
            className,
        );
        return (
            <div data-testid="jkl-text-input" className={componentClassName}>
                <Label
                    variant={variant}
                    {...labelProps}
                    srOnly={inline || labelProps?.srOnly}
                    standAlone
                    forceCompact={forceCompact}
                    htmlFor={uid}
                >
                    {label}
                </Label>
                <div className="jkl-text-input__input-wrapper">
                    <BaseInputField
                        ref={ref}
                        id={uid}
                        describedBy={describedBy}
                        invalid={!!errorLabel}
                        data-testautoid={testAutoId}
                        className={inputClassName}
                        {...inputProps}
                    />
                    {action && (
                        <IconButton
                            className="jkl-text-input__action-button"
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
                    forceCompact={forceCompact}
                    srOnly={inline}
                />
            </div>
        );
    },
);
TextInput.displayName = "TextInput";
