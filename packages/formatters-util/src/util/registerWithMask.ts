import type { ChangeEvent, KeyboardEventHandler } from "react";
import type {
    FieldValues,
    PathValue,
    RegisterOptions,
    UseFormRegister,
    UseFormReturn,
    FieldPath,
} from "react-hook-form";
import { formatDateString } from "../date/formatDate";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer";
import { formatKontonummer } from "../kontonummer/formatKontonummer";
import { formatKortnummer } from "../kortnummer/formatKortnummer";
import { formatOrganisasjonsnummer } from "../organisasjonsnummer/formatOrganisasjonsnummer";
import { formatTelefonnummer } from "../telefonnummer/formatTelefonnummer";
import { formatNumber } from "./formatNumber";

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

export type RegisterWithMaskOptions<T extends FieldValues> = Omit<RegisterOptions<T>, "setValueAs">;

const createRegisterFunctionWithMask = <T extends FieldValues>(
    formatter: Formatter,
    form: UseFormReturn<T>,
): UseFormRegister<T> => {
    return (name, options) => {
        let onKeyDownCaretPosition = 0;
        let onKeyDownKeyPressed = "";

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

            form.setValue(
                name,
                formatters[formatter](event.target.value, {
                    partial: true,
                }) as PathValue<T, FieldPath<T>>,
            );

            let newPosition: number | null = null;

            if (["Delete", "Backspace"].includes(onKeyDownKeyPressed)) {
                // handle removing content
                // calculate how much to move the caret, this also accounts for removing sections of text
                const delta = onKeyDownCaretPosition - onChangeCaretPosition;

                // calculate new caret position (- because we move backwards)
                newPosition = onKeyDownCaretPosition - delta;
            } else if (onChangeCaretPosition < event.target.value.length) {
                // handle adding content from inside the string
                // calculate how much to move the caret forwards
                const delta = event.target.value.length - inputLength;

                // calculate new caret position (+ because we move forwards)
                newPosition = onChangeCaretPosition + delta;
            }

            if (newPosition !== null) {
                event.target.setSelectionRange(newPosition, newPosition, undefined);
            }
        };

        const registerOptions: RegisterOptions<T, typeof name> = {
            setValueAs,
            onChange,
        };
        if (options) {
            Object.assign(registerOptions, options);
        }
        const register = form.register<typeof name>(name, registerOptions);

        // save the caret position before the change occured
        const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
            if ((event.target as HTMLInputElement).selectionStart !== null) {
                onKeyDownCaretPosition = (event.target as HTMLInputElement).selectionStart as number;
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
};

/**
 * Hjelpefunksjon for React Hook Form som lar deg bruke formateringsfunksjonene i denne pakken som inputmasker.
 */
export const registerWithMasks = <T extends FieldValues>(form: UseFormReturn<T>) => ({
    registerWithFodselsnummerMask: createRegisterFunctionWithMask("fodselsnummer", form),
    registerWithKortnummerMask: createRegisterFunctionWithMask("kortnummer", form),
    registerWithKontonummerMask: createRegisterFunctionWithMask("kontonummer", form),
    registerWithTelefonnummerMask: createRegisterFunctionWithMask("telefonnummer", form),
    registerWithOrganisasjonsnummerMask: createRegisterFunctionWithMask("organisasjonsnummer", form),
    registerWithDateMask: createRegisterFunctionWithMask("date", form),
    registerWithNumber: createRegisterFunctionWithMask("number", form),
});
