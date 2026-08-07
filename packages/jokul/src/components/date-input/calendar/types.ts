import type { DateInputProps } from "../types.js";

export type CalendarProps = Pick<
    DateInputProps,
    "value" | "onChange" | "id" | "label" | "description"
> & {
    min?: string;
    max?: string;
    popover?: "auto" | "manual";
};
