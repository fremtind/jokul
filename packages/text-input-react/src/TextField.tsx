import React from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { BaseInputField, BaseInputProps } from "./BaseInputField";
import cx from "classnames";

interface Props extends BaseInputProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const TextField = ({ helpLabel, errorLabel, label, className, variant, forceCompact, ...rest }: Props) => {
    const componentClassName = cx("jkl-text-field", className, {
        "jkl-text-field--compact": forceCompact,
    });

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
