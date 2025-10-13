import clsx from "clsx";
import React, { type FC } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { Label } from "./Label.js";
import { SupportLabel } from "./SupportLabel.js";
import type { FieldGroupProps } from "./types.js";

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
            className={clsx("jkl-field-group", className)}
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
                            {"\u00A0"}
                            {tooltip}
                        </>
                    ) : (
                        legend
                    )}
                </Label>
            </legend>
            {supportLabelProps?.position === "above-field" &&
                (helpLabel || errorLabel) && (
                    <SupportLabel
                        {...supportLabelProps}
                        label={supportText}
                        labelType={supportTextType}
                        id={supportId}
                        density={density}
                    />
                )}
            {children}
            {supportLabelProps?.position !== "above-field" &&
                (helpLabel || errorLabel) && (
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
