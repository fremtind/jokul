import clsx from "clsx";
import React, { FC, FieldsetHTMLAttributes } from "react";
import { DataTestAutoId, Density } from "../../core/types.js";
import { useId } from "../../hooks/useId/useId.js";
import { PopupTip, PopupTipProps } from "../tooltip/PopupTip.js";
import { Label, LabelProps } from "./Label.js";
import { SupportLabel, SupportLabelProps } from "./SupportLabel.js";

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

    const supportText = errorLabel || helpLabel;
    const supportTextType = errorLabel ? "error" : helpLabel ? "help" : undefined;

    const describedBy = supportText ? supportId : undefined;

    return (
        <fieldset
            id={uid}
            className={clsx("jkl-field-group", className)}
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
                    label={supportText}
                    labelType={supportTextType}
                    id={supportId}
                    density={density}
                />
            )}
        </fieldset>
    );
};
