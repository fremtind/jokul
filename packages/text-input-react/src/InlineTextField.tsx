import React from "react";
import { BaseInputProps } from "./utils";
import { Label } from "@fremtind/jkl-typography-react";
import { BaseInputField } from "./BaseInputField";

interface Props extends BaseInputProps {
    label: string;
    invalid?: boolean;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const InlineTextField = ({ label, className, variant, forceCompact, ...rest }: Props) => {
    const componentClassName = "jkl-text-field jkl-text-field--inline".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label srOnly variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <BaseInputField {...rest} />
        </label>
    );
};
