import React, { forwardRef, useState, MouseEventHandler } from "react";
import nanoid from "nanoid";
import classNames from "classnames";
import { LabelVariant } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { BaseInputField, BaseProps } from "./BaseInputField";

export interface Action {
    icon: IconVariant;
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

interface Props extends BaseProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
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
            variant = "medium",
            inline,
            inverted,
            forceCompact,
            action,
            ...inputProps
        },
        ref,
    ) => {
        const [uid] = useState(id || `jkl-text-input-${nanoid(8)}`);
        const [supportId] = useState(`jkl-support-label-${nanoid(8)}`);
        const describedBy = helpLabel || errorLabel ? supportId : undefined;
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
                        className="jkl-text-input__input"
                        {...inputProps}
                    />
                    {action && <ActionButton {...action} />}
                </div>
                <SupportLabel id={supportId} helpLabel={helpLabel} errorLabel={errorLabel} srOnly={inline} />
            </div>
        );
    },
);
TextInput.displayName = "TextInput";

function ActionButton({ label, icon, onClick }: Action) {
    return (
        <button
            type="button"
            className="jkl-text-input__action-button"
            onClick={onClick}
            aria-label={label}
            title={label}
        >
            <ActionIcon className="jkl-text-input__action-icon" action={icon} />
        </button>
    );
}
