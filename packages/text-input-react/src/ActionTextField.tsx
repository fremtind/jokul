import React, { MouseEventHandler } from "react";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { BaseInputField, BaseInputProps } from "./BaseInputField";
import cx from "classnames";

interface Props extends BaseInputProps {
    action: {
        icon: IconVariant;
        label: string;
        onClick: MouseEventHandler<HTMLButtonElement>;
    };
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const ActionTextField = ({
    action,
    forceCompact,
    className,
    helpLabel,
    errorLabel,
    variant,
    label,
    ...baseInputProps
}: Props) => {
    const componentClassName = cx("jkl-text-field jkl-text-field--action", className, {
        "jkl-text-field--compact": forceCompact,
    });

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className="jkl-text-field__input-wrapper">
                <BaseInputField invalid={!!errorLabel} {...baseInputProps} />
                <button
                    type="button"
                    className="jkl-text-field__action-button"
                    onClick={action.onClick}
                    aria-label={action.label}
                    title={action.label}
                >
                    <ActionIcon className="jkl-text-field__action-icon" action={action.icon} />
                </button>
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
