import type { ChangeEvent, HTMLAttributes } from "react";
import type { DatePickerProps } from "../types.js";

export type CalendarProps = Omit<
    HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
> &
    Pick<
        DatePickerProps,
        "value" | "defaultValue" | "disableBeforeDate" | "disableAfterDate"
    > & {
        max?: string;
        min?: string;
        /**
         * Fjern helgedager som valgbare datoer
         *
         * @default false
         */
        disableWeekends?: boolean;
        styleOptions?: {
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
        };
        /**
         * Navn på input-feltet
         *
         * @default undefined
         */
        name?: string;
        onChange?: (event: ChangeEvent, date: string) => void;
    };
