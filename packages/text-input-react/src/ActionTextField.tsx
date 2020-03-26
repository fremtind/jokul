import React, { MouseEventHandler } from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { IconVariant } from "@fremtind/jkl-icon-button-react/src/";
import { BaseInputField, BaseInputProps } from "./BaseInputField";
import classNames from "classnames";

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
    const componentClassName = classNames("jkl-text-field jkl-text-field--action", className, {
        "jkl-text-field--compact": forceCompact,
    });

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className="jkl-text-field__input-wrapper">
                <BaseInputField invalid={!!errorLabel} {...baseInputProps} />
                <IconButton
                    className="jkl-text-field__action-button"
                    iconType={action.icon}
                    buttonTitle={action.label}
                    onClick={action.onClick}
                />
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
