import { type Density } from "@fremtind/jkl-core";
import { ErrorIcon, SuccessIcon, WarningIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { type FC, type ReactNode } from "react";

export type SupportLabelType = "help" | "error" | "warning" | "success";

export interface SupportLabelProps {
    /**
     * En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.
     *
     * @example
     *  ```tsx
     *  const uid = useId();
     *  const supportId = useId();
     *  const hasSupportText = helpLabel || errorLabel;
     *  const describedBy = hasSupportText ? supportId : undefined;
     *
     *  return (
     *    <div>
     *      <Label standAlone htmlFor={uid}>
     *        Velg en tekst
     *      </Label>
     *      <select
     *        id={uid}
     *        aria-describedby={describedBy}
     *      >
     *        <option value="e">Example</option>
     *      </select>
     *      <SupportLabel
     *        id={supportId}
     *        label={errorLabel}
     *        labelType="error"
     *        density={density}
     *      />
     *    </div>
     *  );
     *  ```
     */
    id: string;
    /**
     * @deprecated Bruk `label` for å få samme resultat.
     */
    helpLabel?: ReactNode;
    /**
     * @deprecated Bruk `label` og `labelType="warning"` for å få samme resultat.
     */
    errorLabel?: ReactNode;
    label?: ReactNode;
    /**
     * Bestemmer hvilket ikon som skal vises:
     *
     * - "help" viser ikke noe ikon
     * - "warning" viser WarningIcon, det som tidligere ble vist med `errorLabel`
     * - "error" viser ErrorIcon
     * - "success" viser SuccessIcon
     *
     * @default "help"
     */
    labelType?: SupportLabelType;
    density?: Density;
    className?: string;
    srOnly?: boolean;
}

export const SupportLabel: FC<SupportLabelProps> = ({
    id,
    helpLabel,
    errorLabel,
    label,
    labelType = "help",
    density,
    className,
    srOnly,
    ...rest
}) => {
    const hasLabel = errorLabel || helpLabel || label;

    const isHelp = labelType === "help" || (helpLabel && !errorLabel);
    const isWarning = labelType === "warning" || errorLabel;
    const isError = labelType === "error";
    const isSuccess = labelType === "success";

    const componentClassName = hasLabel
        ? cn("jkl-form-support-label", className, {
              "jkl-form-support-label--sr-only": srOnly,
              "jkl-form-support-label--help": isHelp,
              "jkl-form-support-label--error": isError,
              "jkl-form-support-label--warning": isWarning,
              "jkl-form-support-label--success": isSuccess,
          })
        : "jkl-dormant-form-support-label";

    const restProps = hasLabel ? rest : {};

    const Icon = isError ? ErrorIcon : isSuccess ? SuccessIcon : WarningIcon;

    return (
        <span
            id={id}
            className={componentClassName}
            {...restProps}
            data-density={density}
        >
            <Icon variant="small" className="jkl-form-support-label__icon" />
            <span>{errorLabel || helpLabel || label}</span>
        </span>
    );
};
