import type { ChangeEvent, SelectHTMLAttributes } from "react";
import type { ValuePair } from "../../utilities/valuePair.js";
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

export type SelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange"
> & {
    label: string;
    items: Array<string | ValuePair>;
    errorLabel?: string;
    /**
     * @default false
     */
    searchable?: boolean;
    /**
     * Håndtering av søking, typisk brukt for å filtrere elementer asynkront. Hvis denne funksjonen er satt, vil ikke søkefeltet filtrere elementene lokalt.
     * @default undefined
     */
    onSearch?: (searchValue: string) => void;
    /**
     * Laster inn elementer asynkront. Viser en spinner i nedtrekkslisten.
     * @default false
     */
    loading?: boolean;
    onChange?: (value: string | Array<string>) => void;
};
