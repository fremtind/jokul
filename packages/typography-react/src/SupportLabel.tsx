import React from "react";
import classNames from "classnames";

interface Props {
    id?: string;
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
    className?: string;
    srOnly?: boolean;
}

export const SupportLabel = ({ id, helpLabel, errorLabel, forceCompact, className, srOnly }: Props) => {
    const componentClassName = classNames("jkl-form-support-label", className, {
        "jkl-form-support-label--compact": forceCompact,
        "jkl-form-support-label--error": errorLabel,
        "jkl-form-support-label--help": !errorLabel,
        "jkl-form-support-label--sr-only": srOnly,
    });

    if (errorLabel || helpLabel) {
        return (
            <span id={id} className={componentClassName}>
                {errorLabel || helpLabel}
            </span>
        );
    }

    return null;
};
