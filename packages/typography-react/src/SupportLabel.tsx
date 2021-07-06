import React from "react";
import classNames from "classnames";

interface Props {
    id?: string;
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
    className?: string;
    srOnly?: boolean;
    /** @deprecated */
    inverted?: boolean;
}

let warningHasBeenShown = false;

export const SupportLabel = ({ id, helpLabel, errorLabel, forceCompact, className, srOnly, inverted }: Props) => {
    const componentClassName = classNames("jkl-form-support-label", className, {
        "jkl-form-support-label--compact": forceCompact,
        "jkl-form-support-label--error": errorLabel,
        "jkl-form-support-label--help": !errorLabel,
        "jkl-form-support-label--sr-only": srOnly,
        "jkl-form-support-label--inverted": inverted,
    });

    if (process.env.NODE_ENV !== "production" && !warningHasBeenShown) {
        console.warn(
            "WARNING: This version of the SupportLabel component is deprecated! Please use the SupportLabel component found in @fremtind/jkl-core instead",
        );
        warningHasBeenShown = true;
    }

    if (errorLabel || helpLabel) {
        return (
            <span id={id} className={componentClassName}>
                {errorLabel || helpLabel}
            </span>
        );
    }

    return null;
};
