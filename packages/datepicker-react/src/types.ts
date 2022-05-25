import { ChangeEvent, KeyboardEvent, FocusEvent } from "react";

export type DateValidationError = "WRONG_FORMAT" | "OUTSIDE_LOWER_BOUND" | "OUTSIDE_UPPER_BOUND";

export type DatePickerChangeEventHandler =
    | ((e: ChangeEvent<HTMLInputElement>) => void)
    | ((e: ChangeEvent<HTMLInputElement>, date: Date | null) => void)
    | ((e: ChangeEvent<HTMLInputElement>, date: Date | null, meta: DatePickerMetadata) => void);

export type DatePickerBlurEventHandler =
    | ((e: FocusEvent<HTMLInputElement>) => void)
    | ((e: FocusEvent<HTMLInputElement>, date: Date | null) => void)
    | ((e: FocusEvent<HTMLInputElement>, date: Date | null, meta: DatePickerMetadata) => void);

export type DatePickerFocusEventHandler = DatePickerBlurEventHandler;

export type DatePickerKeyDownEventHandler =
    | ((e: KeyboardEvent<HTMLInputElement>) => void)
    | ((e: KeyboardEvent<HTMLInputElement>, date: Date | null) => void)
    | ((e: KeyboardEvent<HTMLInputElement>, date: Date | null, meta: DatePickerMetadata) => void);

export type DatePickerMetadata = {
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
};
