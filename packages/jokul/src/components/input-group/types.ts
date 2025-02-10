import { CSSProperties, FieldsetHTMLAttributes, type ReactNode } from "react";
import {
    DataTestAutoId,
    Density,
    WithChildren,
    WithOptionalChildren,
} from "../../core/types.js";

export interface FieldGroupProps
    extends DataTestAutoId,
        FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    labelProps?: Omit<LabelProps, "children" | "density">;
    supportLabelProps?: Omit<
        SupportLabelProps,
        "id" | "errorLabel" | "helpLabel" | "density"
    >;
    tooltip?: ReactNode;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    density?: Density;
}

export interface InputProps {
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
    id?: string;
}

export type InputGroupProps = WithOptionalChildren &
    DataTestAutoId & {
        id?: string;
        className?: string;
        "data-testid"?: string;
        density?: Density;
        errorLabel?: ReactNode;
        helpLabel?: ReactNode;
        inline?: boolean;
        label: ReactNode;
        labelProps?: Omit<LabelProps, "children" | "density">;
        supportLabelProps?: Omit<
            SupportLabelProps,
            "id" | "errorLabel" | "helpLabel" | "density"
        >;
        tooltip?: ReactNode;
        style?: CSSProperties;
        render?: (props: InputProps) => JSX.Element;
    };

export type LabelVariant = "small" | "medium" | "large";

export interface LabelProps extends WithChildren {
    id?: string;
    variant?: LabelVariant;
    density?: Density;
    srOnly?: boolean;
    standAlone?: boolean;
    htmlFor?: string;
    className?: string;
    style?: CSSProperties;
}

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
