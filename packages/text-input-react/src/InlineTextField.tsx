import React from "react";
import { Label } from "@fremtind/jkl-typography-react";
import { BaseInputField, BaseInputProps } from "./BaseInputField";
import classNames from "classnames";

interface Props extends BaseInputProps {
    label: string;
    invalid?: boolean;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const InlineTextField = ({ label, className, variant, forceCompact, ...rest }: Props) => {
    const componentClassName = classNames("jkl-text-field jkl-text-field--inline", className, {
        "jkl-text-field--compact": forceCompact,
    });

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label srOnly variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <BaseInputField {...rest} />
        </label>
    );
};
