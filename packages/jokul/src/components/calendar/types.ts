import type {
    ChangeEvent,
    HTMLAttributes,
} from "react";

/**
 * Gyldig datostreng i YYYY-MM-DD format
 */
export type ValidDate = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type CalendarProps = Omit<
    HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
> & {
    /**
     * Fjerner ramme-stilene så komponenten enklere kan brukes i andre elementer
     *
     * @default false
     */
    noAccessory?: boolean;
    /**
     * Dato, eller gyldig datostreng (YYYY-MM-DD)
     *
     * @example new Date(2026, 7, 20)
     * @example "2026-07-20"
     *
     * @default new Date()
     */
    value?: ValidDate | Date;
    /**
     * Forhåndsvalgt dato
     *
     * @default undefined
     */
    defaultValue?: ValidDate | Date;
    /**
     * Siste valgbare dato
     *
     * @default undefined
     */
    max?: ValidDate | Date;
    /**
     * Første valgbare dato
     *
     * @default undefined
     */
    min?: ValidDate | Date;
    /**
     * Fjern helgedager som valgbare datoer
     *
     * @default false
     */
    disableWeekends?: boolean;
    /**
     * Fjern navigasjonsmenyen øverst
     *
     * @default false
     */
    hideNavigation?: boolean;
    /**
     * Fjern headeren med ukedager
     *
     * @default false
     */
    hideWeekdayLabels?: boolean;
    /**
     * Navn på input-feltet
     *
     * @default undefined
     */
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, date: Date) => void;
};
