import type { ChangeEvent, KeyboardEventHandler } from "react";
import type {
    FieldValues,
    Path,
    PathValue,
    RegisterOptions,
    UseFormRegisterReturn,
    UseFormReturn,
} from "react-hook-form";
import { formatDateString } from "../date/formatDate.js";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer.js";
import { formatKontonummer } from "../kontonummer/formatKontonummer.js";
import { formatKortnummer } from "../kortnummer/formatKortnummer.js";
import { formatOrganisasjonsnummer } from "../organisasjonsnummer/formatOrganisasjonsnummer.js";
import { formatTelefonnummer } from "../telefonnummer/formatTelefonnummer.js";
import { formatNumber } from "./formatNumber.js";

const formatters = {
    date: formatDateString,
    fodselsnummer: formatFodselsnummer,
    kortnummer: formatKortnummer,
    kontonummer: formatKontonummer,
    telefonnummer: formatTelefonnummer,
    number: formatNumber,
    organisasjonsnummer: formatOrganisasjonsnummer,
};
export type Formatter = keyof typeof formatters;

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

export type RegisterWithMaskOptions<T extends FieldValues> = Omit<
    RegisterOptions<T>,
    "setValueAs"
>;

const registerWithMask =
    (formatter: Formatter) =>
    <T extends FieldValues>(
        form: UseFormReturn<T>,
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ) => {
        let onKeyDownCaretPosition = 0;
        let onKeyDownKeyPressed = "";
        let deletedCharactersOnKeyDown = "";

        const setValueAs = (value: string) => value.replace(/\s/g, "");
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            options?.onChange?.(event);

            // save some values before event.target.value change
            let onChangeCaretPosition = 0;
            const inputLength = event.target.value.length;

            // type checking formalities
            if (event.target.selectionStart !== null) {
                onChangeCaretPosition = event.target.selectionStart;
            }

            const formattedValue = formatters[formatter](event.target.value, {
                partial: true,
            });
            const formattedLength = formattedValue.toString().length;

            form.setValue(name, formattedValue as PathValue<T, Path<T>>);

            let newPosition: number | null = null;

            if (["Delete", "Backspace"].includes(onKeyDownKeyPressed)) {
                // handle removing content
                // calculate how much to move the caret, this also accounts for removing sections of text
                const delta = onKeyDownCaretPosition - onChangeCaretPosition;
                const formattedLengthChange =
                    deletedCharactersOnKeyDown.trim() === ""
                        ? 0
                        : formattedLength - inputLength;

                // calculate new caret position (- because we move backwards)
                newPosition =
                    onKeyDownCaretPosition - delta + formattedLengthChange;
            } else if (
                onChangeCaretPosition < event.target.value.length ||
                inputLength !== formattedLength
            ) {
                // handle adding content from inside the string
                // calculate how much to move the caret forwards
                const delta = formattedLength - inputLength;

                // calculate new caret position (+ because we move forwards)
                newPosition = onChangeCaretPosition + delta;
            }

            if (newPosition !== null) {
                const clampedPosition = clamp(newPosition, 0, formattedLength);

                event.target.setSelectionRange(
                    clampedPosition,
                    clampedPosition,
                    undefined,
                );
            }
        };

        const registerOptions: RegisterOptions<T, Path<T>> = {
            setValueAs,
            onChange,
        };
        if (options) {
            Object.assign(registerOptions, options);
        }
        const register = form.register(name, registerOptions);

        // save the caret position before the change occured
        const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
            deletedCharactersOnKeyDown = "";

            const input = event.target as HTMLInputElement;
            const { selectionStart, selectionEnd, value } = input;

            if (selectionStart !== null) {
                onKeyDownCaretPosition = selectionStart;

                if (selectionEnd !== null && selectionEnd > selectionStart) {
                    deletedCharactersOnKeyDown = value.slice(
                        selectionStart,
                        selectionEnd,
                    );
                } else if (event.key === "Backspace") {
                    deletedCharactersOnKeyDown =
                        value[onKeyDownCaretPosition - 1] ?? "";
                } else if (event.key === "Delete") {
                    deletedCharactersOnKeyDown =
                        value[onKeyDownCaretPosition] ?? "";
                }
            }
            onKeyDownKeyPressed = event.key;
        };

        // add onKeyDown event handler to the registered input
        const extra: Record<string, unknown> = {
            onKeyDown,
        };

        if (formatter === "number") {
            extra.align = "right"; // Se https://github.com/fremtind/jokul/pull/2898
        }

        return Object.assign(register, extra);
    };

/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithFodselsnummerMask = registerWithMask("fodselsnummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithKortnummerMask = registerWithMask("kortnummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithKontonummerMask = registerWithMask("kontonummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithTelefonnummerMask = registerWithMask("telefonnummer");

/**
 * Hjelpefunksjon for React Hook Form som lar deg bruke formateringsfunksjonene i denne pakken som inputmasker.
 */
export const registerWithMasks = <T extends FieldValues>(
    form: UseFormReturn<T>,
) => ({
    registerWithFodselsnummerMask: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn =>
        registerWithMask("fodselsnummer")<T>(form, name, options),
    registerWithKortnummerMask: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn =>
        registerWithMask("kortnummer")<T>(form, name, options),
    registerWithKontonummerMask: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn =>
        registerWithMask("kontonummer")<T>(form, name, options),
    registerWithTelefonnummerMask: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn =>
        registerWithMask("telefonnummer")<T>(form, name, options),
    registerWithOrganisasjonsnummerMask: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn =>
        registerWithMask("organisasjonsnummer")<T>(form, name, options),
    registerWithDateMask: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn =>
        registerWithMask("date")<T>(form, name, options),
    registerWithNumber: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn & { align: "right" } =>
        registerWithMask("number")<T>(
            form,
            name,
            options,
        ) as unknown as UseFormRegisterReturn & {
            align: "right";
        },
});
