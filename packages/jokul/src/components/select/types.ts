import type { ChangeEvent, SelectHTMLAttributes } from "react";
import type { DataTestAutoId, Density } from "../../core/types.js";
import type { ValuePair } from "../../utilities/valuePair.js";
import type { LabelProps } from "../input-group/types.js";
import type { InputGroupProps } from "../input-group/types.js";

export interface NativeSelectProps
    extends Omit<InputGroupProps, "children">,
        SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
    /**
     * Setter inn et placeholderelement som vises når ingenting er valgt i nedtrekkslisten.
     * @default "Velg"
     */
    placeholder?: string;
    items: Array<string | ValuePair>;
    selectClassName?: string;
    width?: string;
}

export interface SelectPartialChangeEvent
    extends Partial<Omit<ChangeEvent<HTMLSelectElement>, "target">> {
    /** Kreves av react-hook-form, det skjer ulike ting avhengig av om det er blur eller change */
    type: "change" | "blur";
    target: {
        /** Kreves av react-hook-form for å vite hvilket skjemafelt som ble endret */
        name: string;
        value: string;
    };
}

export type SelectChangeEventHandler = (
    event: SelectPartialChangeEvent,
) => void;

export interface SelectProps
    extends Omit<InputGroupProps, "children">,
        DataTestAutoId {
    id?: string;
    name: string;
    label: string;
    labelProps?: Omit<
        LabelProps,
        "children" | "density" | "htmlFor" | "standAlone"
    >;
    items: Array<string | ValuePair>;
    /**
     * @default false
     */
    inline?: boolean;
    /**
     * @default "Velg"
     */
    defaultPrompt?: string;
    className?: string;
    value?: string;
    helpLabel?: string;
    errorLabel?: string;
    /**
     * @default false
     */
    searchable?:
        | boolean
        | ((searchValue: string, searchItem: string | ValuePair) => boolean);
    density?: Density;
    width?: string;
    onChange?: SelectChangeEventHandler;
    onBlur?: SelectChangeEventHandler;
    onFocus?: SelectChangeEventHandler;
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
    /**
     * Hvor mange valg skal vises i listen før den begynner å scrolle.
     * @default 5
     */
    maxShownOptions?: number;
}

export type BETA_SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    description?: string;
    placeholder?: string;
    errorMessage?: string;
    helpMessage?: string;
};
