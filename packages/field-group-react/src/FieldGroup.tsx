import React, { ReactNode } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: "secondary" | "small";
}

export const FieldGroup = ({ legend, className, children, helpLabel, errorLabel, variant }: Props) => {
    const composedClassName = "jkl-field-group"
        .concat(variant ? ` jkl-field-group--${variant}` : "")
        .concat(className ? ` ${className}` : "");
    return (
        <fieldset className={composedClassName}>
            <legend className="jkl-field-group__legend">{legend}</legend>
            {children}
            {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
        </fieldset>
    );
};
