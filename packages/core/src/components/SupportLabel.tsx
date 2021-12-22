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
                <svg
                    className="jkl-form-support-label__icon"
                    aria-hidden
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8058 23L3.19424 23C0.885265 23 -0.558162 20.5008 0.595683 18.5008L10.4015 1.50415C11.5559 -0.496963 14.4441 -0.496963 15.5986 1.50415L25.4043 18.5008C26.5582 20.5008 25.1148 23 22.8058 23ZM14 8.00001L14 15.4142L12 15.4142L12 8.00001L14 8.00001ZM13 17C12.3096 17 11.75 17.5597 11.75 18.25C11.75 18.9404 12.3096 19.5 13 19.5C13.6904 19.5 14.25 18.9404 14.25 18.25C14.25 17.5597 13.6904 17 13 17Z"
                        fill="currentColor"
                    />
                </svg>
                {errorLabel || helpLabel}
            </span>
        );
    }

    return null;
};
