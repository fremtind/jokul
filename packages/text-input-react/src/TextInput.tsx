import React, { forwardRef, HTMLAttributes, MouseEventHandler } from "react";
import classNames from "classnames";
import { useId } from "@fremtind/jkl-react-hooks";
import { Label, SupportLabel, LabelVariant } from "@fremtind/jkl-core";
import { IconButton, IconVariant } from "@fremtind/jkl-icon-button-react";
import { BaseInputField, BaseProps } from "./BaseInputField";

export interface Action extends Exclude<HTMLAttributes<HTMLButtonElement>, "disabled"> {
    icon: IconVariant;
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface Props extends BaseProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    "data-testautoid"?: string;
    forceCompact?: boolean;
    inline?: boolean;
    action?: Action;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            id,
            className,
            label,
            helpLabel,
            errorLabel,
            variant,
            inline,
            forceCompact,
            action,
            "data-testautoid": testAutoId,
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
                <Label forceCompact={forceCompact} standAlone srOnly={inline} htmlFor={uid} variant={variant}>
                    {label}
                </Label>
                <div className="jkl-text-input__input-wrapper">
                    <BaseInputField
                        ref={ref}
                        id={uid}
                        describedBy={describedBy}
                        invalid={!!errorLabel}
                        data-testautoid={testAutoId}
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
