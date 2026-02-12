import clsx from "clsx";
import React, { type FC } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { SupportLabel } from "./SupportLabel.js";
import type { FieldGroupProps } from "./types.js";

export const FieldGroup: FC<FieldGroupProps> = (props) => {
    const {
        id,
        legend,
        legendProps: _legendProps,
        supportLabelProps,
        tooltip,
        className: _className,
        children,
        helpLabel,
        errorLabel,
        description,
        "data-testautoid": testAutoId,
        ...rest
    } = props;

    const uid = useId(id || "jkl-field-group", { generateSuffix: !id });
    const supportId = `${uid}_support-label`;

    const { srOnly, className, ...legendProps } = _legendProps || {};

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
            className={clsx("jkl-field-group", _className)}
            data-testautoid={testAutoId}
            {...rest}
            aria-describedby={describedBy}
        >
            <legend
                className={clsx("jkl-field-group__legend", className, {
                    "jkl-sr-only": srOnly,
                })}
                {...legendProps}
            >
                {tooltip ? (
                    <>
                        <span style={{ whiteSpace: "normal" }}>{legend}</span>
                        {"\u00A0"}
                        {tooltip}
                    </>
                ) : (
                    legend
                )}
            </legend>
            {description && (
                <p className="jkl-input-group-description">{description}</p>
            )}
            {children}
            {(helpLabel || errorLabel) && (
                <SupportLabel
                    {...supportLabelProps}
                    label={supportText}
                    labelType={supportTextType}
                    id={supportId}
                />
            )}
        </fieldset>
    );
};
