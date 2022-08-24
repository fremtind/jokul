import type { Density, LabelProps } from "@fremtind/jkl-core";
import { Label, SupportLabel, LabelVariant, DataTestAutoId } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FC, FieldsetHTMLAttributes } from "react";

export interface FieldGroupProps extends DataTestAutoId, FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    labelProps?: Omit<LabelProps, "children">;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    /** @deprecated Bruk `labelProps.variant`  */
    variant?: LabelVariant;
    density?: Density;
}

export const FieldGroup: FC<FieldGroupProps> = ({
    id,
    legend,
    labelProps,
    className,
    children,
    helpLabel,
    errorLabel,
    variant,
    density,
    "data-testautoid": testAutoId,
    ...rest
}) => {
    const uid = useId(id || "jkl-field-group", { generateSuffix: !id });
    const supportId = `${uid}_support-label`;
    const hasSupportText = helpLabel || errorLabel;
    const describedBy = hasSupportText ? supportId : undefined;

    return (
        <fieldset
            id={uid}
            className={cn("jkl-field-group", className)}
            data-testautoid={testAutoId}
            {...rest}
            aria-describedby={describedBy}
            data-density={density}
        >
            <legend className="jkl-field-group__legend">
                <Label variant={variant} density={density} {...labelProps}>
                    {legend}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && (
                <SupportLabel id={supportId} density={density} helpLabel={helpLabel} errorLabel={errorLabel} />
            )}
        </fieldset>
    );
};
