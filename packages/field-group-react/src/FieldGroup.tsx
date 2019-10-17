import React, { ReactNode } from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { LabelVariant } from "@fremtind/jkl-core";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
}

export const FieldGroup = ({
    legend,
    className,
    children,
    helpLabel,
    errorLabel,
    variant = "medium",
    forceCompact,
}: Props) => {
    const componentClassName = "jkl-field-group".concat(className ? ` ${className}` : "");
    return (
        <fieldset className={componentClassName}>
            <legend>
                <Label variant={variant} forceCompact={forceCompact}>
                    {legend}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
        </fieldset>
    );
};
