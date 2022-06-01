import type { ChangeEvent } from "react";
import type {
    Path,
    PathValue,
    RegisterOptions,
    UnpackNestedValue,
    UseFormRegisterReturn,
    UseFormReturn,
} from "react-hook-form";
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
        const register = form.register(name as unknown as Path<T>, { ...options, setValueAs, onChange });
        let extra = {};

        if (formatter === "number") {
            extra = {
                align: "right", // Se https://github.com/fremtind/jokul/pull/2898
            };
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

export const registerWithMasks = <T>(form: UseFormReturn<T>) => ({
    registerWithFodselsnummerMask: (name: keyof T, options?: RegisterOptions<T>): UseFormRegisterReturn =>
        registerWithMask("fodselsnummer")(form, name, options),
    registerWithKortnummerMask: (name: keyof T, options?: RegisterOptions<T>): UseFormRegisterReturn =>
        registerWithMask("kortnummer")(form, name, options),
    registerWithKontonummerMask: (name: keyof T, options?: RegisterOptions<T>): UseFormRegisterReturn =>
        registerWithMask("kontonummer")(form, name, options),
    registerWithTelefonnummerMask: (name: keyof T, options?: RegisterOptions<T>): UseFormRegisterReturn =>
        registerWithMask("telefonnummer")(form, name, options),
    registerWithNumber: (name: keyof T, options?: RegisterOptions<T>): UseFormRegisterReturn & { align: "right" } =>
        registerWithMask("number")(form, name, options) as UseFormRegisterReturn & {
            align: "right";
        },
});
