import React, { MouseEventHandler } from "react";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { BaseInputProps } from "./utils";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { BaseInputField } from "./BaseInputField";

interface Props extends BaseInputProps {
    label: string;
    action: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
    description: string;
    helpLabel?: string;
    errorLabel?: string;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const ActionTextField = ({
    action,
    onClick,
    forceCompact,
    className,
    helpLabel,
    errorLabel,
    variant,
    label,
    type,
    description,
    ...rest
}: Props) => {
    const componentClassName = "jkl-text-field jkl-text-field--action".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className="jkl-text-field__input-wrapper">
                <BaseInputField invalid={!!errorLabel} {...rest} />
                <button
                    type="button"
                    className="jkl-text-field__action-button"
                    onClick={onClick}
                    aria-label={description}
                    title={description}
                >
                    <ActionIcon className="jkl-text-field__action-icon" action={action} />
                </button>
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
