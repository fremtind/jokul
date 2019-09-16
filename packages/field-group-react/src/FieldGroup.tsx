import React, { ReactNode } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    standalone?: boolean;
}

export const FieldGroup = ({ legend, className, children, helpLabel, errorLabel, standalone }: Props) => (
    <fieldset className={`jkl-field-group ${className ? className : ""}`}>
        <legend className={`jkl-field-group__legend ${standalone ? "jkl-field-group__legend--large" : ""}`}>
            {legend}
        </legend>
        {children}
        {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
    </fieldset>
);
