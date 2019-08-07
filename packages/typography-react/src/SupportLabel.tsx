import React from "react";

interface Props {
    helpLabel?: string;
    errorLabel?: string;
}

export const SupportLabel = ({ helpLabel, errorLabel }: Props) => {
    if (errorLabel || helpLabel) {
        return (
            <span className={`jkl-form-support-label jkl-form-support-label--${errorLabel ? "error" : "help"}`}>
                {errorLabel || helpLabel}
            </span>
        );
    }

    return null;
};
