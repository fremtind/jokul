import React from "react";
import classNames from "classnames";

interface Props {
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
    className?: string;
}

export const SupportLabel = ({ helpLabel, errorLabel, forceCompact, className }: Props) => {
    const componentClassName = classNames("jkl-form-support-label", className, {
        "jkl-form-support-label--compact": forceCompact,
        "jkl-form-support-label--error": errorLabel,
        "jkl-form-support-label--help": !errorLabel,
    });

    if (errorLabel || helpLabel) {
        return <span className={componentClassName}>{errorLabel || helpLabel}</span>;
    }

    return null;
};
