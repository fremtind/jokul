import type { ChangeEvent } from "react";
import type { Path, PathValue, RegisterOptions, UnpackNestedValue, UseFormReturn } from "react-hook-form";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer";
import { formatKortnummer } from "../kortnummer/formatKortnummer";
import { formatKontonummer } from "../kontonummer/formatKontonummer";
import { formatTelefonnummer } from "../telefonnummer/formatTelefonnummer";
import { formatNumber } from "./formatNumber";

const formatters = {
    fodselsnummer: formatFodselsnummer,
    kortnummer: formatKortnummer,
    kontonummer: formatKontonummer,
    telefonnummer: formatTelefonnummer,
    number: formatNumber,
};
export type Formatter = keyof typeof formatters;

const registerWithMask =
    (formatter: Formatter) =>
    <T>(form: UseFormReturn<T>, name: keyof T, options?: RegisterOptions<T>) => {
        const setValueAs = (value: string) => value.replace(/\s/g, "");
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            options?.onChange?.(event);
            form.setValue(
                name as unknown as Path<T>,
                formatters[formatter](event.target.value, { partial: true }) as UnpackNestedValue<
                    PathValue<T, Path<T>>
                >,
            );
        };
        return form.register(name as unknown as Path<T>, { ...options, setValueAs, onChange });
    };

/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithFodselsnummerMask = registerWithMask("fodselsnummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithKortnummerMask = registerWithMask("kortnummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithKontonummerMask = registerWithMask("kontonummer");
/** @deprecated Bruk `registerWithMasks` i stedet */
export const registerWithTelefonnummerMask = registerWithMask("telefonnummer");

export const registerWithMasks = <T>(form: UseFormReturn<T>) => ({
    registerWithFodselsnummerMask: (name: keyof T, options?: RegisterOptions<T>) =>
        registerWithMask("fodselsnummer")(form, name, options),
    registerWithKortnummerMask: (name: keyof T, options?: RegisterOptions<T>) =>
        registerWithMask("kortnummer")(form, name, options),
    registerWithKontonummerMask: (name: keyof T, options?: RegisterOptions<T>) =>
        registerWithMask("kontonummer")(form, name, options),
    registerWithTelefonnummerMask: (name: keyof T, options?: RegisterOptions<T>) =>
        registerWithMask("telefonnummer")(form, name, options),
    registerWithNumber: (name: keyof T, options?: RegisterOptions<T>) =>
        registerWithMask("number")(form, name, options),
});
