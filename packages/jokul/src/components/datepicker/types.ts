import type { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import type { DataTestAutoId } from "../../utilities/index.js";
import type { InputGroupProps, LabelProps } from "../input-group/index.js";

export type DateValidationError =
    | "WRONG_FORMAT"
    | "OUTSIDE_LOWER_BOUND"
    | "OUTSIDE_UPPER_BOUND";

export type DateInputMetadata = {
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
};

// Events
export type DateInputChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
    date: Date | null,
    meta: DateInputMetadata,
) => void;
export type DateInputBlurEventHandler = (
    e: FocusEvent<HTMLInputElement>,
    date: Date | null,
    meta: DateInputMetadata,
) => void;
export type DateInputFocusEventHandler = DateInputBlurEventHandler;
export type DateInputKeyDownEventHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    date: Date | null,
    meta: DateInputMetadata,
) => void;

export type DateInputSharedProps = Omit<InputGroupProps, "label" | "children"> &
    DataTestAutoId & {
        name?: string;
        label?: string;
        labelProps?: Omit<LabelProps, "children">;
        defaultValue?: string;
        value?: string;
        min?: string;
        max?: string;
        /**
         * @deprecated Bruk `min`
         */
        disableBeforeDate?: string;
        /**
         * @deprecated Bruk `max`
         */
        disableAfterDate?: string;
        onChange?: DateInputChangeEventHandler;
        onFocus?: DateInputFocusEventHandler;
        onBlur?: DateInputBlurEventHandler;
        onKeyDown?: DateInputKeyDownEventHandler;
        /**
         * Merk som ugyldig uten å sende inn en errorLabel.
         * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
         */
        invalid?: boolean;
    };

export interface DatePickerProps extends DateInputSharedProps {
    /**
     * Sendes direkte til datofeltet
     */
    dateInputProps?: DateInputSharedProps;
    /**
     * Sendes direkte til kalenderen
     */
    calendarProps?: DateInputSharedProps;
}

export interface DateInputProps extends DateInputSharedProps {}

export interface CalendarProps extends DateInputSharedProps {
    /**
     * Fjern helgedager som valgbare datoer
     *
     * @default false
     */
    disableWeekends?: boolean;
    /**
     * Viser kalenderen flatt på siden
     */
    hideOutline?: boolean;
    /**
     * Fjerner piler og nedtrekksliste for valg av måned og år
     */
    hideNavigation?: boolean;
    /**
     * Fjerner ukedag-teksten
     */
    hideWeekdayLabels?: boolean;
}
