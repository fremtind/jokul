import type { ChangeEvent } from "react";
import type { Path, PathValue, RegisterOptions, UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer";
import { formatKontonummer } from "../kontonummer/formatKontonummer";
import { formatKortnummer } from "../kortnummer/formatKortnummer";
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

export type RegisterWithMaskOptions<T> = Omit<RegisterOptions<T>, "setValueAs">;

const registerWithMask =
    (formatter: Formatter) =>
    <T>(form: UseFormReturn<T>, name: Path<T>, options?: RegisterWithMaskOptions<T>) => {
        const setValueAs = (value: string) => value.replace(/\s/g, "");
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            options?.onChange?.(event);
            form.setValue(
                name as unknown as Path<T>,
                formatters[formatter](event.target.value, { partial: true }) as PathValue<T, Path<T>>,
            );
        };
        const register = form.register(name, { ...options, setValueAs, onChange });
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
    registerWithFodselsnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("fodselsnummer")(form, name, options),
    registerWithKortnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("kortnummer")(form, name, options),
    registerWithKontonummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("kontonummer")(form, name, options),
    registerWithTelefonnummerMask: (name: Path<T>, options?: RegisterWithMaskOptions<T>): UseFormRegisterReturn =>
        registerWithMask("telefonnummer")(form, name, options),
    registerWithNumber: (
        name: Path<T>,
        options?: RegisterWithMaskOptions<T>,
    ): UseFormRegisterReturn & { align: "right" } =>
        registerWithMask("number")(form, name, options) as unknown as UseFormRegisterReturn & {
            align: "right";
        },
});
