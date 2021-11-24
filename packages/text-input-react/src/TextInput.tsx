import React, { forwardRef, useState, HTMLAttributes, MouseEventHandler } from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
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
    /** @deprecated */
    inverted?: boolean;
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
            inverted,
            forceCompact,
            action,
            "data-testautoid": testAutoId,
            ...inputProps
        },
        ref,
    ) => {
        const [uid] = useState(id || `jkl-text-input-${nanoid(8)}`);
        const [supportId] = useState(`jkl-support-label-${nanoid(8)}`);
        const hasSupportText = helpLabel || errorLabel;
        const describedBy = hasSupportText ? supportId : undefined;
        const componentClassName = classNames(
            {
                "jkl-text-input": true,
                "jkl-text-input--inline": inline,
                "jkl-text-input--inverted": inverted,
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
                    inverted={inverted}
                    id={supportId}
                    helpLabel={helpLabel}
                    errorLabel={errorLabel}
                    srOnly={inline}
                />
            </div>
        );
    },
);
TextInput.displayName = "TextInput";
