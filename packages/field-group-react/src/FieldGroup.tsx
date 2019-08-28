import React, { ReactNode } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
}

export const FieldGroup = ({ legend, className, children, helpLabel, errorLabel }: Props) => (
    <fieldset className={`jkl-field-group ${className ? className : ""}`}>
        <legend className="jkl-field-group__legend">{legend}</legend>
        {children}
        {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
    </fieldset>
);
