import type { DataTestAutoId, Density } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, {
    type FC,
    type FieldsetHTMLAttributes,
    type ReactNode,
} from "react";
import { Label, type LabelProps } from "./Label";
import { SupportLabel, type SupportLabelProps } from "./SupportLabel";

export interface FieldGroupProps
    extends DataTestAutoId,
        FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    labelProps?: Omit<LabelProps, "children" | "density">;
    supportLabelProps?: Omit<
        SupportLabelProps,
        "id" | "errorLabel" | "helpLabel" | "density"
    >;
    tooltip?: ReactNode;
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
        tooltip,
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
    const supportTextType = errorLabel
        ? "error"
        : helpLabel
        ? "help"
        : undefined;

    const describedBy = supportText ? supportId : undefined;

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
                    {tooltip ? (
                        <>
                            <span style={{ whiteSpace: "normal" }}>
                                {legend}
                            </span>
                            {`\u00A0`}
                            {tooltip}
                        </>
                    ) : (
                        legend
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
