import React, { ReactNode } from "react";

interface Props {
    legend: string;
    children?: ReactNode;
    className?: string;
}

export const FieldGroup = ({ legend, className, children }: Props) => (
    <fieldset className={`jkl-field-group ${className ? className : ""}`}>
        <legend className="jkl-field-group__legend">{legend}</legend>
        {children}
    </fieldset>
);
