import React, { ReactNode } from "react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";

interface Props {
    children: ReactNode;
    legend: string;
    className?: string;
}

export function CheckboxGroup({ legend, className, children }: Props) {
    return (
        <FieldGroup legend={legend} className={className}>
            {children}
        </FieldGroup>
    );
}
