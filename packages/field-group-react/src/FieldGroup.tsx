import React, { ReactNode } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";
import { labelVariant } from "@fremtind/jkl-core";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: labelVariant;
}

export const FieldGroup = ({ legend, className, children, helpLabel, errorLabel, variant }: Props) => {
    const componentClassName = "jkl-field-group".concat(className ? ` ${className}` : "");
    const labelClassName = "jkl-label".concat(variant ? ` jkl-label--${variant}` : "");
    return (
        <fieldset className={componentClassName}>
            <legend className={labelClassName}>{legend}</legend>
            {children}
            {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
        </fieldset>
    );
};
