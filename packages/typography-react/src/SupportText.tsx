import React from "react";

interface Props {
    helpText?: string;
    errorText?: string;
    isInvalid: boolean;
}

export const SupportText = ({ helpText, errorText, isInvalid }: Props) => {
    if (isInvalid && errorText) {
        return <span className="jkl-form-support-text jkl-form-support-text--error">{errorText}</span>;
    }
    if (helpText) {
        return <span className="jkl-form-support-text jkl-form-support-text--help">{helpText}</span>;
    }
    return null;
};
