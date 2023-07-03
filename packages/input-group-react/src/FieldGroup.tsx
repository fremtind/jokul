import type { Density, DataTestAutoId } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import { PopupTip, type PopupTipProps } from "@fremtind/jkl-tooltip-react";
import cn from "classnames";
import React, { FC, FieldsetHTMLAttributes } from "react";
import { Label, type LabelProps } from "./Label";
import { SupportLabel, type SupportLabelProps } from "./SupportLabel";

export interface FieldGroupProps extends DataTestAutoId, FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    labelProps?: Omit<LabelProps, "children" | "density">;
    supportLabelProps?: Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel" | "density">;
    tooltipProps?: PopupTipProps;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    density?: Density;
}

export const FieldGroup: FC<FieldGroupProps> = (props) => {
    const {
        id,
        legend,
        labelProps,
        supportLabelProps,
        tooltipProps,
        className,
        children,
        helpLabel,
        errorLabel,
        density,
        "data-testautoid": testAutoId,
        ...rest
    } = props;

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
                <Label {...labelProps} density={density}>
                    {!tooltipProps && legend}
                    {tooltipProps && (
                        <>
                            <span style={{ whiteSpace: "normal" }}>{legend}</span>
                            {`\u00A0`}
                            <PopupTip {...tooltipProps} />
                        </>
                    )}
                </Label>
            </legend>
            {children}
            {(helpLabel || errorLabel) && (
                <SupportLabel
                    {...supportLabelProps}
                    id={supportId}
                    density={density}
                    helpLabel={helpLabel}
                    errorLabel={errorLabel}
                />
            )}
        </fieldset>
    );
};
