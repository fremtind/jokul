import React, { FC } from "react";
import classNames from "classnames";

export interface SupportLabelProps {
    id?: string;
    helpLabel?: string;
    errorLabel?: string;
    forceCompact?: boolean;
    className?: string;
    srOnly?: boolean;
    /** @deprecated */
    inverted?: boolean;
}

export const SupportLabel: FC<SupportLabelProps> = ({
    id,
    helpLabel,
    errorLabel,
    forceCompact,
    className,
    srOnly,
    inverted,
    ...rest
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
            <span id={id} className={componentClassName} {...rest}>
                {errorLabel || helpLabel}
            </span>
        );
    }

    return null;
};
