import clsx from "clsx";
import React, { type FC } from "react";
import { ErrorIcon } from "../icon/icons/ErrorIcon.js";
import { SuccessIcon } from "../icon/icons/SuccessIcon.js";
import { WarningIcon } from "../icon/icons/WarningIcon.js";
import type { SupportLabelProps } from "./types.js";

export const SupportLabel: FC<SupportLabelProps> = ({
    id,
    helpLabel,
    errorLabel,
    label,
    labelType = "help",
    density,
    className,
    srOnly,
    ...rest
}) => {
    const hasLabel = errorLabel || helpLabel || label;

    const isHelp = labelType === "help" || (helpLabel && !errorLabel);
    const isWarning = labelType === "warning" || errorLabel;
    const isError = labelType === "error";
    const isSuccess = labelType === "success";

    const componentClassName = hasLabel
        ? clsx("jkl-form-support-label", className, {
              "jkl-form-support-label--sr-only": srOnly,
              "jkl-form-support-label--help": isHelp,
              "jkl-form-support-label--error": isError,
              "jkl-form-support-label--warning": isWarning,
              "jkl-form-support-label--success": isSuccess,
          })
        : "jkl-dormant-form-support-label";

    const restProps = hasLabel ? rest : {};

    const Icon = isError ? ErrorIcon : isSuccess ? SuccessIcon : WarningIcon;

    return (
        <span
            id={id}
            className={componentClassName}
            {...restProps}
            data-density={density}
        >
            <Icon variant="small" className="jkl-form-support-label__icon" />
            <span>{errorLabel || helpLabel || label}</span>
        </span>
    );
};
