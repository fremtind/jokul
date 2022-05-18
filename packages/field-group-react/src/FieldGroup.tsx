import type { LabelProps } from "@fremtind/jkl-core";
import { Label, SupportLabel, LabelVariant, DataTestAutoId } from "@fremtind/jkl-core";
import classNames from "classnames";
import React, { FC, FieldsetHTMLAttributes } from "react";

export interface FieldGroupProps extends DataTestAutoId, FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    labelProps?: Omit<LabelProps, "children">;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    forceCompact?: boolean;
}

export const FieldGroup: FC<FieldGroupProps> = ({
    legend,
    labelProps,
    className,
    children,
    helpLabel,
    errorLabel,
    variant,
    forceCompact,
    "data-testautoid": testAutoId,
    ...rest
}) => {
    const componentClassName = classNames("jkl-field-group", className);
    return (
        <fieldset className={componentClassName} data-testautoid={testAutoId} {...rest}>
            <legend className="jkl-field-group__legend">
                <Label variant={variant} {...labelProps} forceCompact={forceCompact}>
                    {legend}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && (
                <SupportLabel forceCompact={forceCompact} helpLabel={helpLabel} errorLabel={errorLabel} />
            )}
        </fieldset>
    );
};
