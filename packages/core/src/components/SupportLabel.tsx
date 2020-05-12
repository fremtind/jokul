import React from "react";
import classNames from "classnames";

interface Props {
    id?: string;
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
    className?: string;
    srOnly?: boolean;
    inverted?: boolean;
}

export const SupportLabel: React.FC<Props> = ({
    id,
    helpLabel,
    errorLabel,
    forceCompact,
    className,
    srOnly,
    inverted,
}) => {
    const componentClassName = classNames("jkl-form-support-label", className, {
        "jkl-form-support-label--compact": forceCompact,
        "jkl-form-support-label--error": errorLabel,
        "jkl-form-support-label--help": !errorLabel,
        "jkl-form-support-label--sr-only": srOnly,
        "jkl-form-support-label--inverted": inverted,
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
