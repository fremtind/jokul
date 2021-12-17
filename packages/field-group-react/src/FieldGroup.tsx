import React, { FC, ReactNode, HTMLAttributes } from "react";
import type { LabelProps } from "@fremtind/jkl-core";
import { Label, SupportLabel, LabelVariant, DataTestAutoId } from "@fremtind/jkl-core";
import classNames from "classnames";

export interface FieldGroupProps extends DataTestAutoId, HTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    labelProps?: LabelProps;
    children?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    /** @deprecated */
    inverted?: boolean;
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
    inverted,
    ...rest
}) => {
    const componentClassName = classNames("jkl-field-group", className);
    return (
        <fieldset className={componentClassName} data-testautoid={testAutoId} {...rest}>
            <legend className="jkl-field-group__legend">
                <Label variant={variant} forceCompact={forceCompact} {...labelProps}>
                    {legend}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && (
                <SupportLabel
                    forceCompact={forceCompact}
                    inverted={inverted}
                    helpLabel={helpLabel}
                    errorLabel={errorLabel}
                />
            )}
        </fieldset>
    );
};
