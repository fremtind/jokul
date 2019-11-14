import React from "react";

interface Props {
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
    className?: string;
}

export const SupportLabel = ({ helpLabel, errorLabel, forceCompact, className }: Props) => {
    const componentClassName = "jkl-form-support-label".concat(
        ` jkl-form-support-label--${errorLabel ? "error" : "help"}`,
        forceCompact ? " jkl-form-support-label--compact" : "",
        className ? ` ${className}` : "",
    );

    if (errorLabel || helpLabel) {
        return <span className={componentClassName}>{errorLabel || helpLabel}</span>;
    }

    return null;
};
