import React from "react";

interface Props {
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
}

export const SupportLabel = ({ helpLabel, errorLabel, forceCompact }: Props) => {
    const className = "jkl-form-support-label".concat(
        ` jkl-form-support-label--${errorLabel ? "error" : "Help"}`,
        forceCompact ? " jkl-form-support-label--compact" : "",
    );

    if (errorLabel || helpLabel) {
        return <span className={className}>{errorLabel || helpLabel}</span>;
    }

    return null;
};
