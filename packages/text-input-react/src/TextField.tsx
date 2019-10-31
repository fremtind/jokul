import React from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { BaseInputProps } from "./utils";
import { BaseInputField } from "./BaseInputField";

interface Props extends BaseInputProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const TextField = ({
    type = "text",
    readOnly = false,
    helpLabel,
    errorLabel,
    id,
    label,
    className,
    placeholder,
    value,
    variant,
    forceCompact,
    maxLength,
    width,
    ...rest
}: Props) => {
    const componentClassName = "jkl-text-field".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <BaseInputField />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
