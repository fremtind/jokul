import clsx from "clsx";
import React, { type FC } from "react";
import type { IconComponent } from "../icon/Icon.jsx";
import { ErrorIcon } from "../icon/icons/ErrorIcon.js";
import { SuccessIcon } from "../icon/icons/SuccessIcon.js";
import { WarningIcon } from "../icon/icons/WarningIcon.js";
import { Text } from "../typography/Text.jsx";
import type { SupportLabelProps, SupportLabelType } from "./types.js";

const ICON: Record<SupportLabelType, IconComponent | typeof React.Fragment> = {
    error: ErrorIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    help: React.Fragment,
};

export const SupportLabel: FC<SupportLabelProps> = ({
    id,
    helpLabel,
    errorLabel,
    label,
    labelType = "help",
    className,
    srOnly,
    ...rest
}) => {
    // Støtte for gamle properties `helpLabel` og `errorLabel`
    const isHelp = labelType === "help" || (helpLabel && !errorLabel);
    const hasLabel = errorLabel || helpLabel || label;

    const componentClassName = hasLabel
        ? clsx("jkl-form-support-label", className, {
              "jkl-sr-only": srOnly,
          })
        : "jkl-dormant-form-support-label";

    const restProps = hasLabel ? rest : {};
    const Icon = ICON[labelType];

    return (
        <Text
            short
            size="s"
            subdued={Boolean(isHelp)}
            id={id}
            {...restProps}
            className={componentClassName}
            data-color={isHelp ? undefined : labelType}
        >
            <Icon className="jkl-form-support-label__icon" />
            {errorLabel || helpLabel || label}
        </Text>
    );
};
