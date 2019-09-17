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

export function Field({ legend, children, className, helpLabel, errorLabel, standalone }: Props) {
    return (
        <label className={`jkl-field ${className ? className : ""}`}>
            <span className={`jkl-field__legend ${standalone ? "jkl-field__legend--large" : ""}`}>{legend}</span>
            {children}
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
}
