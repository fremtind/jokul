import React, { FC } from "react";
import cn from "classnames";

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
    const hasLabel = errorLabel || helpLabel;

    const componentClassName = hasLabel
        ? cn("jkl-form-support-label", className, {
              "jkl-form-support-label--compact": forceCompact,
              "jkl-form-support-label--error": errorLabel,
              "jkl-form-support-label--help": !errorLabel,
              "jkl-form-support-label--sr-only": srOnly,
              "jkl-form-support-label--inverted": inverted,
          })
        : "jkl-dormant-form-support-label";

    const restProps = hasLabel ? rest : {};

    return (
        <span id={id} className={componentClassName} {...restProps}>
            <svg
                className="jkl-form-support-label__icon"
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3588 20.5107L5.64157 20.5107C3.33259 20.5107 1.88917 18.0116 3.04301 16.0116L9.40163 4.98996C10.5561 2.98885 13.4443 2.98885 14.5987 4.98996L20.9574 16.0116C22.1112 18.0116 20.6678 20.5107 18.3588 20.5107ZM12.7515 13.6525L12.7515 7.63131L11.9988 7.63131L11.2462 7.63131L11.2462 13.6525L12.7515 13.6525ZM12.0012 15.0458C11.441 15.0458 10.9868 15.5 10.9868 16.0602C10.9868 16.6205 11.441 17.0747 12.0012 17.0747C12.5615 17.0747 13.0157 16.6205 13.0157 16.0602C13.0157 15.5 12.5615 15.0458 12.0012 15.0458Z"
                    fill="currentColor"
                />
            </svg>

            {errorLabel || helpLabel}
        </span>
    );
};
