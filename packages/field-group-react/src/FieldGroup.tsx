import React, { ReactNode } from "react";
import { Label, SupportLabel, LabelVariant } from "@fremtind/jkl-core";
import classNames from "classnames";

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
    const componentClassName = classNames("jkl-field-group", className);
    return (
        <fieldset className={componentClassName}>
            <legend className="jkl-field-group__legend">
                <Label variant={variant} forceCompact={forceCompact}>
                    {legend}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />}
        </fieldset>
    );
};
