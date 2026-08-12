import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { InputGroupProps } from "../input-group/types.js";

export type FileInputProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "value" | "children"
> & {
    /**
     * Bestemmer om komponenten skal vises som knapp eller dropzone.
     *
     * @default "button"
     */
    variant?: "button" | "dropzone";
    /**
     * Skjuler den native filstatusen visuelt. Inputen er fortsatt tilgjengelig
     * for skjermlesere.
     *
     * @default false
     */
    hideFileName?: boolean;
    /**
     * Tekst på label til InputGroup.
     *
     * @default "Last opp dokumenter"
     */
    label?: InputGroupProps["label"];
    /**
     * Tekst på knappen.
     *
     * @default "Velg fil"
     */
    children?: ReactNode;
    description?: InputGroupProps["description"];
    errorLabel?: InputGroupProps["errorLabel"];
    /**
     * @deprecated Bruk heller `description`.
     */
    helpLabel?: InputGroupProps["helpLabel"];
};
