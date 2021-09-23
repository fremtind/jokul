import React, { ReactNode } from "react";
import { Label, SupportLabel, LabelVariant, DataTestAutoId } from "@fremtind/jkl-core";
import classNames from "classnames";

interface Props extends DataTestAutoId {
    legend: string;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    /** @deprecated */
    inverted?: boolean;
}

export const FieldGroup = ({
    legend,
    className,
    children,
    helpLabel,
    errorLabel,
    variant,
    forceCompact,
    "data-testautoid": testAutoId,
    inverted,
}: Props) => {
    const componentClassName = classNames("jkl-field-group", className);
    return (
        <fieldset className={componentClassName} data-testautoid={testAutoId}>
            <legend className="jkl-field-group__legend">
                <Label variant={variant} forceCompact={forceCompact}>
                    {legend}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && (
                <SupportLabel inverted={inverted} helpLabel={helpLabel} errorLabel={errorLabel} />
            )}
        </fieldset>
    );
};
