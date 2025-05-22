import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from "react";
import type { Density } from "../../core/types.js";
import type { FieldGroupProps, SupportLabelProps } from "../input-group/types.js";

export interface BaseRadioButtonProps extends RadioButtonProps {
    inline?: boolean;
    density?: Density;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface RadioButtonProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
    children?: ReactNode;
    value: string;
    /** Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form */
    name?: string;
    /** Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** @deprecated Bruk children */
    label?: ReactNode;
    helpLabel?: ReactNode;
    supportLabelProps?: Omit<
        SupportLabelProps,
        "id" | "errorLabel" | "helpLabel" | "density"
    >;
}

export interface RadioButtonGroupProps
    extends Omit<FieldGroupProps, "onChange"> {
    legend: string;
    /** Alle RadioButton i gruppen får dette som name. */
    name?: string;
    /** Om gruppen skal være controlled setter du den valgte verdien her. */
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    helpLabel?: string;
    /**
     * Erstatter hjelpeteksten (hvis noen) med en feilmelding.
     * Merker samtidig alle RadioButton i gruppen som ugyldige.
     */
    errorLabel?: string;
    /**
     * Setter inline-modifieren på alle RadioButton i gruppen.
     * @default false
     */
    inline?: boolean;
    density?: Density;
}
