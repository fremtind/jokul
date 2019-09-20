import React, { ReactNode } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    secondary?: boolean;
}

export const FieldGroup = ({ legend, className, children, helpLabel, errorLabel, secondary }: Props) => {
    const composedClassName = "jkl-field-group"
        .concat(secondary ? " jkl-field-group--secondary" : "")
        .concat(className ? ` ${className}` : "");
    return (
        <fieldset className={composedClassName}>
            <legend className="jkl-field-group__legend">{legend}</legend>
            {children}
            {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
        </fieldset>
    );
};
