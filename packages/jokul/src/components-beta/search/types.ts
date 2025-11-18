import type {
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import type { InputGroupProps } from "../../components/input-group/types.js";

export type SearchInputProps = Omit<
    InputGroupProps,
    "children" | "inline" | "label"
> &
    InputHTMLAttributes<HTMLInputElement> & {
        /**
         * Label til søket. Bruk {@link LabelProps} for å vise den.
         */
        label?: string;
        /**
         * Lar deg velge hvilket ikon som vises på venstresiden i feltet.
         * @default "search"
         */
        icon?: "search" | "filter_alt" | "filter_list";
        children?: ReactNode;
    };

export type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Lar deg endre teksten i knappen.
     * @default "Søk"
     */
    label?: string;
};
