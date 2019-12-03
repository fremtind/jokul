import React from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { BaseInputField, BaseInputProps } from "./BaseInputField";

interface Props extends BaseInputProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const TextField = ({ helpLabel, errorLabel, label, className, variant, forceCompact, ...rest }: Props) => {
    const componentClassName = "jkl-text-field".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <BaseInputField invalid={!!errorLabel} {...rest} />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
